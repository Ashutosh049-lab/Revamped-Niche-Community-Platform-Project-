

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunityPosts } from '../features/postsSlice';
import PostItem from './PostItem';
import { socket } from '../utils/socket';

const RealTimeFeed = ({ communityId }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const feedRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCommunityPosts(communityId));
    
    // Listen for new posts
    socket.on('post-added', (newPost) => {
      if (newPost.communityId === communityId) {
        dispatch({ type: 'posts/addPost', payload: newPost });
        
        // Animate new post entry
        if (feedRef.current) {
          const newElement = document.createElement('div');
          newElement.className = 'animate-pulse bg-green-100 p-4 rounded mb-4';
          newElement.innerHTML = `<strong>New post:</strong> ${newPost.title}`;
          feedRef.current.insertBefore(newElement, feedRef.current.firstChild);
          
          setTimeout(() => {
            newElement.style.transition = 'opacity 1s';
            newElement.style.opacity = '0';
            setTimeout(() => newElement.remove(), 1000);
          }, 3000);
        }
      }
    });

    return () => {
      socket.off('post-added');
    };
  }, [communityId, dispatch]);

  return (
    <div ref={feedRef} className="space-y-4">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RealTimeFeed;