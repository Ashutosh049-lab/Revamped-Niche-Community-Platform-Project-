
import React from 'react';

const AchievementBadge = ({ achievement }) => {
  const badgeColors = {
    'first_post': 'bg-yellow-500',
    'top_contributor': 'bg-purple-500',
    'community_helper': 'bg-green-500'
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeColors[achievement.type]} text-white mr-2`} title={achievement.name}>
      <span>{achievement.icon}</span>
      <span className="ml-1">{achievement.name}</span>
    </div>
  );
};

export default AchievementBadge;