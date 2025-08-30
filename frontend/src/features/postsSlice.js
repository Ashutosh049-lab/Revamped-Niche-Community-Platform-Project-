
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  currentPage: 1,
  totalPages: 1,
  currentCommunity: null,
  hasMore: true
};

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ communityId, page = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/communities/${communityId}/posts`, {
        params: { page }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch posts');
    }
  }
);

// Async thunk for creating a new post
export const createPost = createAsyncThunk(
  'posts/createPost',
  async ({ communityId, content, title }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/communities/${communityId}/posts`, {
        title,
        content
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create post');
    }
  }
);

// Async thunk for updating a post
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ postId, content, title }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/posts/${postId}`, {
        title,
        content
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update post');
    }
  }
);

// Async thunk for deleting a post
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      return postId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete post');
    }
  }
);

// Async thunk for adding a comment to a post
export const addComment = createAsyncThunk(
  'posts/addComment',
  async ({ postId, content }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/posts/${postId}/comments`, {
        content
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add comment');
    }
  }
);

// Async thunk for liking/unliking a post
export const toggleLike = createAsyncThunk(
  'posts/toggleLike',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/posts/${postId}/like`);
      return { postId, liked: response.data.liked };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to toggle like');
    }
  }
);

// Create the slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.posts = [];
      state.currentPage = 1;
      state.hasMore = true;
      state.status = 'idle';
    },
    setCurrentCommunity: (state, action) => {
      state.currentCommunity = action.payload;
    },
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        if (action.meta.arg.page === 1) {
          state.posts = action.payload.posts;
        } else {
          state.posts = [...state.posts, ...action.payload.posts];
        }
        
        state.totalPages = action.payload.totalPages;
        state.hasMore = action.payload.hasNextPage;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Create Post
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      
      // Update Post
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      
      // Delete Post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      
      // Add Comment
      .addCase(addComment.fulfilled, (state, action) => {
        const postIndex = state.posts.findIndex(post => post.id === action.payload.postId);
        if (postIndex !== -1) {
          state.posts[postIndex].comments.push(action.payload.comment);
        }
      })
      
      // Toggle Like
      .addCase(toggleLike.fulfilled, (state, action) => {
        const postIndex = state.posts.findIndex(post => post.id === action.payload.postId);
        if (postIndex !== -1) {
          const post = state.posts[postIndex];
          if (action.payload.liked) {
            post.likes.push({ userId: 'current-user-id' }); // Replace with actual user ID
          } else {
            post.likes = post.likes.filter(like => like.userId !== 'current-user-id');
          }
        }
      });
  }
});

// Export actions
export const { resetPosts, setCurrentCommunity, incrementPage, setHasMore } = postsSlice.actions;

// Export selectors
export const selectAllPosts = (state) => state.posts.posts;
export const selectCurrentCommunity = (state) => state.posts.currentCommunity;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectCurrentPage = (state) => state.posts.currentPage;
export const selectTotalPages = (state) => state.posts.totalPages;
export const selectHasMorePosts = (state) => state.posts.hasMore;

// Export reducer
export default postsSlice.reducer;