# Backend API - MongoDB

## Cài đặt

```bash
npm install
```

## Chạy MongoDB

Đảm bảo MongoDB đang chạy trên máy:
```bash
mongod
```

Hoặc sử dụng MongoDB Atlas (cloud)

## Chạy server

```bash
npm run start:dev
```

Server sẽ chạy tại: http://localhost:3000

## Database Schema

### Collection: users
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String,
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

## API Endpoints

### Auth
- `POST /auth/register` - Đăng ký
- `POST /auth/login` - Đăng nhập

### Users
- `GET /users/profile/:id` - Xem profile
- `PUT /users/profile/:id` - Cập nhật profile

### Files
- `POST /files/upload/avatar` - Upload avatar (cần userId trong body)
