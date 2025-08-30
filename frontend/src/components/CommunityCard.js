

import React from 'react';
import { Link } from 'react-router-dom';

const CommunityCard = ({ community }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img 
        src={community.coverImageUrl || 'https://via.placeholder.com/300x200'} 
        alt={community.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{community.name}</h3>
        <p className="text-gray-600 mb-4">{community.description}</p>
        <Link 
          to={`/communities/${community.id}`} 
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Join Community
        </Link>
      </div>
    </div>
  );
};

export default CommunityCard;