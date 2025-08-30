
// const express = require('express');
// const cors = require('cors');
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // Initialize database connection
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
// });

// // Test database connection
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connected successfully.');
    
//     // Sync models (create tables if they don't exist)
//     await sequelize.sync({ alter: true }); // Use { force: true } only during development
    
//     // Start server
//     const app = express();
//     app.use(cors());
//     app.use(express.json());

//     // Routes will go here later
    
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();




// // In src/index.js after model definitions
// User.hasMany(Post, { foreignKey: 'userId' });
// Post.belongsTo(User, { foreignKey: 'userId' });

// Community.hasMany(Post, { foreignKey: 'communityId' });
// Post.belongsTo(Community, { foreignKey: 'communityId' });

// Post.hasMany(Comment, { foreignKey: 'postId' });
// Comment.belongsTo(Post, { foreignKey: 'postId' });

// User.hasMany(Comment, { foreignKey: 'userId' });
// Comment.belongsTo(User, { foreignKey: 'userId' });

// // Many-to-many relationship between users and communities
// User.belongsToMany(Community, { through: 'UserCommunities' });
// Community.belongsToMany(User, { through: 'UserCommunities' });





// const http = require('http');
// const socketIo = require('socket.io');

// // ... existing code ...

// const server = http.createServer(app);
// const io = socketIo(server);

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('join-community', (communityId) => {
//     socket.join(communityId);
//   });

//   socket.on('leave-community', (communityId) => {
//     socket.leave(communityId);
//   });

//   socket.on('new-post', (data) => {
//     io.to(data.communityId).emit('post-added', data.post);
//   });

//   socket.on('new-comment', (data) => {
//     io.to(data.communityId).emit('comment-added', data.comment);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// // Replace app.listen with server.listen
// server.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });



// const userRouter = require('./routes/userRoutes');
// app.use('/api/users', userRouter);



// const communityRouter = require('./routes/communityRoutes');
// app.use('/api/communities', communityRouter);



// const postRouter = require('./routes/postRoutes');
// app.use('/api/posts', postRouter);


// const commentRouter = require('./routes/commentRoutes');
// app.use('/api/comments', commentRouter);













// const express = require('express');
// const cors = require('cors');
// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// // Initialize database connection
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
// });

// // Import models FIRST
// const User = require('./models/User');
// const Post = require('./models/Post');
// const Community = require('./models/Community');
// const Comment = require('./models/Comment');

// // Define relationships AFTER importing models
// User.hasMany(Post, { foreignKey: 'userId' });
// Post.belongsTo(User, { foreignKey: 'userId' });

// Community.hasMany(Post, { foreignKey: 'communityId' });
// Post.belongsTo(Community, { foreignKey: 'communityId' });

// Post.hasMany(Comment, { foreignKey: 'postId' });
// Comment.belongsTo(Post, { foreignKey: 'postId' });

// User.hasMany(Comment, { foreignKey: 'userId' });
// Comment.belongsTo(User, { foreignKey: 'userId' });

// // Many-to-many relationship between users and communities
// User.belongsToMany(Community, { through: 'UserCommunities' });
// Community.belongsToMany(User, { through: 'UserCommunities' });

// // Test database connection
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connected successfully.');
    
//     // Sync models (create tables if they don't exist)
//     await sequelize.sync({ alter: true }); // Use { force: true } only during development
    
//     // Start server
//     const app = express();
//     app.use(cors());
//     app.use(express.json());
    
//     // Socket.io setup
//     const http = require('http');
//     const socketIo = require('socket.io');
//     const server = http.createServer(app);
//     const io = socketIo(server);
    
//     io.on('connection', (socket) => {
//       console.log('New client connected');
//       socket.on('join-community', (communityId) => {
//         socket.join(communityId);
//       });
//       socket.on('leave-community', (communityId) => {
//         socket.leave(communityId);
//       });
//       socket.on('new-post', (data) => {
//         io.to(data.communityId).emit('post-added', data.post);
//       });
//       socket.on('new-comment', (data) => {
//         io.to(data.communityId).emit('comment-added', data.comment);
//       });
//       socket.on('disconnect', () => {
//         console.log('Client disconnected');
//       });
//     });
    
//     // Routes
//     const userRouter = require('./routes/userRoutes');
//     app.use('/api/users', userRouter);
    
//     const communityRouter = require('./routes/communityRoutes');
//     app.use('/api/communities', communityRouter);
    
//     const postRouter = require('./routes/postRoutes');
//     app.use('/api/posts', postRouter);
    
//     const commentRouter = require('./routes/commentRoutes');
//     app.use('/api/comments', commentRouter);
    
//     // Start server
//     server.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();












const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

// Import models FIRST
const User = require('./models/User').default;
const Post = require('./models/Post').default;
const Community = require('./models/Community').default;
const Comment = require('./models/Comment').default;

// Define relationships AFTER importing models
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Community.hasMany(Post, { foreignKey: 'communityId' });
Post.belongsTo(Community, { foreignKey: 'communityId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

// Many-to-many relationship between users and communities
User.belongsToMany(Community, { through: 'UserCommunities' });
Community.belongsToMany(User, { through: 'UserCommunities' });

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    
    // Sync models (create tables if they don't exist)
    await sequelize.sync({ alter: true }); // Use { force: true } only during development
    
    // Start server
    const app = express();
    app.use(cors());
    app.use(express.json());
    
    // Socket.io setup
    const http = require('http');
    const socketIo = require('socket.io');
    const server = http.createServer(app);
    const io = socketIo(server);
    
    io.on('connection', (socket) => {
      console.log('New client connected');
      socket.on('join-community', (communityId) => {
        socket.join(communityId);
      });
      socket.on('leave-community', (communityId) => {
        socket.leave(communityId);
      });
      socket.on('new-post', (data) => {
        io.to(data.communityId).emit('post-added', data.post);
      });
      socket.on('new-comment', (data) => {
        io.to(data.communityId).emit('comment-added', data.comment);
      });
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
    
    // Routes
    const userRouter = require('./routes/userRoutes');
    app.use('/api/users', userRouter);
    
    const communityRouter = require('./routes/communityRoutes');
    app.use('/api/communities', communityRouter);
    
    const postRouter = require('./routes/postRoutes');
    app.use('/api/posts', postRouter);
    
    const commentRouter = require('./routes/commentRoutes');
    app.use('/api/comments', commentRouter);
    
    // Start server
    server.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();