

import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export const useUserAchievements = () => {
  const user = useSelector(selectUser);
  
  // Calculate achievements based on user activity
  const calculateAchievements = () => {
    const achievements = [];
    
    if (user.postsCount >= 10) {
      achievements.push({
        id: 'top_contributor',
        name: 'Top Contributor',
        icon: '🏆',
        type: 'top_contributor'
      });
    }
    
    if (user.commentsCount >= 50) {
      achievements.push({
        id: 'community_helper',
        name: 'Community Helper',
        icon: '🤝',
        type: 'community_helper'
      });
    }
    
    if (user.posts.length > 0) {
      achievements.push({
        id: 'first_post',
        name: 'First Post',
        icon: '🎉',
        type: 'first_post'
      });
    }
    
    return achievements;
  };

  return { achievements: calculateAchievements() };
};