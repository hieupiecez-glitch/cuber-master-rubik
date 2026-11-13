# HƯỚNG DẪN TRIỂN KHAI LÊN HOSTING (DEPLOYMENT GUIDE)

## 1. Triển khai lên Vercel / Netlify / Cloudflare Pages
1. Đẩy thư mục mã nguồn dự án lên kho lưu trữ GitHub / GitLab.
2. Kết nối kho lưu trữ với **Vercel** hoặc **Netlify**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: `20.x`

## 2. Triển khai lên GitHub Pages hoặc Static Hosting bất kỳ
- Sau khi chạy `build.bat` (hoặc `npm run build`), toàn bộ tệp tĩnh nằm trong thư mục `dist/` (hoặc file độc lập `rubik_master_app.html`) có thể tải trực tiếp lên GitHub Pages, Firebase Hosting, AWS S3 hoặc bất kỳ máy chủ web Nginx/Apache nào mà không cần cấu hình máy chủ phía sau.
