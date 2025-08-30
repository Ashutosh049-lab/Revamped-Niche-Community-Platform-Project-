
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommunityPosts } from '../features/postsSlice';
import PostItem from '../components/PostItem';
import CommentForm from '../components/CommentForm';
import { toast } from 'react-toastify';

const CommunityPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchCommunityPosts(id));
  }, [dispatch, id]);

  if (status === 'loading') {
    return <div>Loading posts...</div>;
  }

  if (status === 'failed') {
    toast.error('Failed to load posts');
    return <div>Error</div>
    }

}