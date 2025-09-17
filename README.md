# 📖 Blogging Platform API

A simple **RESTful API** for a personal blogging platform with basic CRUD operations, built using **Node.js, Express.js, MongoDB, and Swagger**.

---

## 🚀 Features
- Create a new blog post (**POST /posts**)
- Get all blog posts (**GET /posts**)
- Get a single blog post by ID (**GET /posts/:id**)
- Update a blog post (**PUT /posts/:id**)
- Delete a blog post (**DELETE /posts/:id**)
- Search blog posts by `title`, `content`, or `category` (**GET /posts?term=...**)
- API documentation with **Swagger UI**

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Swagger (swagger-jsdoc + swagger-ui-express)
- dotenv (for environment variables)
- Nodemon (for development)

---

## 📂 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <repo-url>
cd platform-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Create a `.env` file in the root directory:
```
MONGO_URI=mongodb://127.0.0.1:27017/blogging-platform
PORT=5000
```

### 4️⃣ Run the server
```bash
npm run dev
```

If successful, you should see:
```
✅ MongoDB Connected...
🚀 Server running on port 5000
```

---

## 📖 API Endpoints

### Create a blog post
```http
POST /posts
```
**Body:**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

### Get all posts
```http
GET /posts
```

### Get a single post
```http
GET /posts/:id
```

### Update a post
```http
PUT /posts/:id
```

### Delete a post
```http
DELETE /posts/:id
```

### Search posts
```http
GET /posts?term=tech
```

---

## 📑 Swagger Documentation
Once the server is running, visit:
```
http://localhost:5000/api-docs
```
Test all endpoints interactively.

---

## ✅ Status Codes
- `201 Created` → Post created  
- `200 OK` → Success (Get, Update)  
- `204 No Content` → Post deleted  
- `400 Bad Request` → Validation error  
- `404 Not Found` → Post not found  

---

✍️ Author: **Dariush Rahmani**  
📌 Project: **Blogging Platform API**
