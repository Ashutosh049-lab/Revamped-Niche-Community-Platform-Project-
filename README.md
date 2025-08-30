# Revamped Niche Community Platform

A modern, feature-rich social platform built with **React** and **Node.js** that enables users to discover, join, and engage in niche communities based on their interests.

---

## Features

### 🌟 User Features
- **User Authentication:** Secure signup/login with JWT authentication  
- **Profile Management:** Customize profile with bio, avatar, and interests  
- **Achievement System:** Earn badges and climb leaderboards for community contributions  
- **Notifications:** Real-time push notifications for replies and mentions  

### 🗣️ Community Features
- **Community Discovery:** Browse communities by categories and interests  
- **Community Creation:** Users can create and manage their own communities  
- **Moderation Tools:** Admin controls for community management  
- **Live Interactions:** Real-time chat and Q&A sessions  

### 💬 Content Features
- **Rich Text Editor:** Format posts and comments with bold, italic, links, and media  
- **Reactions System:** Like/dislike posts and comments  
- **Comments & Replies:** Threaded commenting system  
- **Live Polls:** Host polls within communities  

### 📱 Real-time Features
- **Live Updates:** Real-time feed updates with smooth animations  
- **Live Chat:** Community-specific chat rooms  
- **Push Notifications:** Browser notifications for important events  
- **Live Q&A:** Host live question-and-answer sessions  

---

## Technology Stack

### Frontend
- **React** – UI framework  
- **Redux Toolkit** – State management  
- **Tailwind CSS** – Styling  
- **Socket.IO Client** – Real-time communication  
- **Quill.js** – Rich text editing  

### Backend
- **Node.js** – Runtime environment  
- **Express** – Web framework  
- **Sequelize** – ORM for PostgreSQL  
- **JWT** – Authentication  
- **Socket.IO** – Real-time communication  
- **bcryptjs** – Password hashing  

### Database
- **PostgreSQL** – Relational database  

---
## Project Structure

```text
project-root/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
└── .gitignore
