 
 import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import communitiesReducer from '../features/communitiesSlice';
import postsReducer from '../features/postsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    communities: communitiesReducer,
    posts: postsReducer
  }
});