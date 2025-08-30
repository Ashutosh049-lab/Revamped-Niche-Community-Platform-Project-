

import { useSelector } from 'react-redux';
import { selectUserInterests } from '../features/userSlice';

export const usePersonalizedRecommendations = () => {
  const userInterests = useSelector(selectUserInterests);
  
  // In a real app, this would call an AI recommendation endpoint
  const getRecommendedCommunities = () => {
    // Mock implementation based on user interests
    const interestMap = {
      technology: ['Tech Innovators', 'Programming Hub'],
      fitness: ['Fitness Enthusiasts', 'Health & Wellness'],
      books: ['Book Lovers', 'Literary Circle']
    };
    
    return userInterests.reduce((acc, interest) => {
      if (interestMap[interest]) {
        acc.push(...interestMap[interest]);
      }
      return acc;
    }, []);
  };

  return { recommendedCommunities: getRecommendedCommunities() };
};