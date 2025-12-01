# Econoverse - Full Stack Application

Hệ thống hướng nghiệp với Backend (NestJS + MongoDB) và Frontend (React + Vite)

## Cấu trúc Project

```
econoverse/
├── backend/          # NestJS API với MongoDB
│   ├── src/
│   │   ├── auth/     # Authentication (simple login/register)
│   │   ├── users/    # Users module
│   │   ├── files/    # File upload module
│   │   └── main.ts
│   ├── uploads/      # Uploaded avatars
│   └── package.json
│
├── src/              # React Frontend
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   └── main.jsx
│
└── package.json      # Frontend dependencies
```

## Backend Setup (NestJS + MongoDB)

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Database Setup
Cài đặt MongoDB:
- Download: https://www.mongodb.com/try/download/community
- Hoặc sử dụng MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

Chạy MongoDB:
```bash
mongod
```

Cập nhật file `.env` trong thư mục `backend` (nếu cần):
```env
MONGODB_URI=mongodb://localhost:27017/econoverse
PORT=3000
```

### 3. Start Backend
```bash
cd backend
npm run start:dev
```

Backend sẽ chạy tại: **http://localhost:3000**

## Frontend Setup (React)

### 1. Install Dependencies  
```bash
npm install axios
```

### 2. Start Frontend
```bash
npm run dev
```

Frontend sẽ chạy tại: **http://localhost:5173**

## Database Collections

### users
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (plain text - đơn giản),
  fullName: String,
  phone: String,
  avatar: String,
  level: Number (default: 1),
  experience: Number (default: 0),
  maxExperience: Number (default: 100),
  createdAt: Date,
  updatedAt: Date
}
```

## Tính năng đã hoàn thành

### Backend API
- ✅ **Authentication (Simple)**
  - `POST /auth/register` - Đăng ký user mới
  - `POST /auth/login` - Đăng nhập (so sánh password thô)

- ✅ **Users**
  - `GET /users/profile/:id` - Xem profile
  - `PUT /users/profile/:id` - Cập nhật profile

- ✅ **File Upload**
  - `POST /files/upload/avatar` - Upload avatar (cần userId)

### Frontend Pages
- ✅ **Trang chủ** - Landing page với statistics và content
- ✅ **Đăng nhập** - Login với API integration
- ✅ **Đăng ký** - Sign up với API integration  
- ✅ **Thế giới nghề** - Career world với các đảo nghề nghiệp
- ✅ **Cộng đồng** - Community page
- ✅ **Profile** - User profile với upload avatar
- ✅ **Video Intro** - Trang giới thiệu video

### Các tính năng
- ✅ Simple Authentication (không JWT)
- ✅ Upload và hiển thị avatar
- ✅ Level system với experience bar
- ✅ Form validation
- ✅ Error handling
- ✅ Responsive design
- ✅ Navigation giữa các trang

## Sử dụng

1. Chạy MongoDB: `mongod`
2. Khởi động Backend: `cd backend && npm run start:dev`
3. Khởi động Frontend: `npm run dev`
4. Truy cập: http://localhost:5173
5. Đăng ký tài khoản mới hoặc đăng nhập
6. Upload avatar và khám phá các tính năng

## Tech Stack

**Backend:**
- NestJS 10
- Mongoose (MongoDB ODM)
- MongoDB
- Simple Authentication (no JWT/bcrypt)
- Multer (file upload)

**Frontend:**
- React 18
- Vite
- Axios
- CSS3

## Cấu trúc Project

```
econoverse/
├── backend/          # NestJS API
│   ├── src/
│   │   ├── auth/     # Authentication module
│   │   ├── users/    # Users module
│   │   ├── files/    # File upload module
│   │   └── main.ts
│   ├── uploads/      # Uploaded files
│   └── package.json
│
├── src/              # React Frontend
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   └── main.jsx
│
└── package.json      # Frontend dependencies
```

## Backend Setup (NestJS)

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Database Setup
Cài đặt PostgreSQL và tạo database:
```sql
CREATE DATABASE econoverse;
```

Cập nhật file `.env` trong thư mục `backend`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=econoverse
JWT_SECRET=your-secret-key
```

### 3. Create Upload Directory
```bash
cd backend
mkdir -p uploads/avatars
```

### 4. Start Backend
```bash
cd backend
npm run start:dev
```

Backend sẽ chạy tại: **http://localhost:3000**

## Frontend Setup (React)

### 1. Install Dependencies  
```bash
npm install axios
```

### 2. Start Frontend
```bash
npm run dev
```

Frontend sẽ chạy tại: **http://localhost:5173**

## Tính năng đã hoàn thành

### Backend API
- ✅ **Authentication**
  - `POST /auth/register` - Đăng ký user mới
  - `POST /auth/login` - Đăng nhập

- ✅ **Users**
  - `GET /users/profile` - Xem profile (cần auth)
  - `PUT /users/profile` - Cập nhật profile (cần auth)

- ✅ **File Upload**
  - `POST /files/upload/avatar` - Upload avatar (cần auth)

### Frontend Pages
- ✅ **Trang chủ** - Landing page với statistics và content
- ✅ **Đăng nhập** - Login với API integration
- ✅ **Đăng ký** - Sign up với API integration  
- ✅ **Thế giới nghề** - Career world với các đảo nghề nghiệp
- ✅ **Cộng đồng** - Community page
- ✅ **Profile** - User profile với upload avatar
- ✅ **Video Intro** - Trang giới thiệu video

### Các tính năng
- ✅ JWT Authentication
- ✅ Upload và hiển thị avatar
- ✅ Level system với experience bar
- ✅ Form validation
- ✅ Error handling
- ✅ Responsive design
- ✅ Navigation giữa các trang

## Sử dụng

1. Khởi động Backend: `cd backend && npm run start:dev`
2. Khởi động Frontend: `npm run dev`
3. Truy cập: http://localhost:5173
4. Đăng ký tài khoản mới hoặc đăng nhập
5. Upload avatar và khám phá các tính năng

## Tech Stack

**Backend:**
- NestJS 10.0.0
- TypeORM 0.3.19
- PostgreSQL
- JWT Authentication
- Multer (file upload)
- bcrypt (password hashing)

**Frontend:**
- React 18.2.0
- Vite 5.0.8
- Axios
- CSS3 với animations

## API Documentation

Xem chi tiết API endpoints trong file `backend/README.md`
