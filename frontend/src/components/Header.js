

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Niche Community</h1>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;