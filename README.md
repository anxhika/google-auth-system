# 🔐 Secure Login System (Google Authentication)

A modern full-stack authentication system that allows users to securely sign in using their Google account.  
This project demonstrates OAuth 2.0 authentication, JWT token handling, MongoDB integration, and deployment-ready architecture.

---

## 🚀 Features

- Google OAuth 2.0 Login
- Secure JWT authentication
- User data stored in MongoDB Atlas
- Modern responsive UI
- Profile display after login
- Logout functionality
- Full-stack architecture (Next.js + Node.js)
- Production ready deployment

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- Axios
- Google OAuth (@react-oauth/google)
- CSS (modern UI styling)

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Axios

---
## ⚙️ Environment Variables

Create a `.env` file inside **server** folder:
For frontend deployment:
---

## ▶️ Run Locally

### 1. Clone repo
### 2. Install dependencies

Frontend:


cd client
npm install


Backend:


cd server
npm install


---

### 3. Start backend server


cd server
node server.js


Server runs on:


http://localhost:5000


---

### 4. Start frontend


cd client
npm run dev


Frontend runs on:


http://localhost:3000


---

## 🔑 How Authentication Works

1. User clicks **Sign in with Google**
2. Google returns ID token
3. Frontend sends token to backend
4. Backend verifies token using Google API
5. User data stored in MongoDB
6. JWT token generated for session
7. User profile displayed on dashboard

