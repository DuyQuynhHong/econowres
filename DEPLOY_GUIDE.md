# Hướng dẫn Deploy Backend lên Render.com

## Bước 1: Đăng ký MongoDB Atlas (MIỄN PHÍ)
1. Truy cập: https://www.mongodb.com/cloud/atlas/register
2. Tạo tài khoản miễn phí
3. Tạo cluster M0 (Free tier)
4. Database Access: Tạo user (username/password)
5. Network Access: Add IP 0.0.0.0/0 (allow all)
6. Lấy connection string: mongodb+srv://<username>:<password>@cluster.mongodb.net/econoverse

## Bước 2: Deploy Backend lên Render.com (MIỄN PHÍ)
1. Truy cập: https://render.com
2. Đăng nhập bằng GitHub
3. Click "New +" → "Web Service"
4. Connect repository: DuyQuynhHong/econoverse
5. Cấu hình:
   - Name: econoverse-backend
   - Environment: Node
   - Region: Singapore (gần VN nhất)
   - Branch: main
   - Root Directory: backend
   - Build Command: npm install && npm run build
   - Start Command: npm run start:prod
6. Environment Variables:
   - MONGODB_URI = <connection string từ MongoDB Atlas>
   - PORT = 3000
7. Click "Create Web Service"
8. Đợi 5-10 phút → Có URL: https://econoverse-backend.onrender.com

## Bước 3: Cập nhật Frontend trên Vercel
1. Vào Vercel Dashboard
2. Chọn project econoverse
3. Settings → Environment Variables
4. Thêm/sửa: VITE_API_URL = https://econoverse-backend.onrender.com
5. Deployments → Redeploy

## Hoàn tất!
- Frontend: https://econoverse.vercel.app
- Backend: https://econoverse-backend.onrender.com
- Đăng nhập/đăng ký sẽ hoạt động!
