# RUBIK MASTER
**Learn Every Move. Understand Every Case. Master Every Puzzle.**

Nền tảng bách khoa toàn thư, thư viện công thức, hệ thống hướng dẫn giải từ cơ bản đến nâng cao, mô phỏng 2D/3D từng bước, luyện tập Flashcard và Speedcubing Timer chuẩn WCA.

---

## 1. Tổng quan Hệ sinh thái RUBIK MASTER

1. **Bách khoa toàn thư 52 loại Rubik (`src/data/puzzles.json`)**:
   - **Cube Puzzles (10)**: 2x2x2, 3x3x3, 4x4x4, 5x5x5, 6x6x6, 7x7x7, 8x8x8, 9x9x9, 10x10x10 & Hệ thống tổng quát NxN.
   - **Shape Mods (12)**: Mirror Cube, Fisher Cube, Windmill Cube, Axis Cube, Ghost Cube, Mastermorphix, Barrel Cube, Unequal Cube, Bandaged Cube, Void Cube, Fisher Diamond, Crazy Cube.
   - **Pyraminx Family (4)**: Pyraminx (WCA), Master Pyraminx, Professor Pyraminx, Pyramorphix / Jing's Pyraminx.
   - **Megaminx Family (6)**: Megaminx (WCA), Kilominx, Master Kilominx, Gigaminx, Teraminx, Petaminx.
   - **Skewb Family (3)**: Skewb (WCA), Master Skewb, Skewb Ultimate / Diamond.
   - **Square-1 Family (2)**: Square-1 (WCA) & Super Square-1 / Square-2.
   - **Gear Puzzles (4)**: Gear Cube, Gear Ball & Extreme, Gear Shift, Gear Pyraminx.
   - **Clock & Các loại Puzzle khác (11)**: Rubik's Clock (WCA), Dino Cube, Ivy Cube, Redi Cube, Helicopter Cube, Curvy Copter, Rex Cube, Clover Cube, Mixup Cube, Rainbow Cube, Bagua Cube.
2. **Thư viện Công thức Đã Kiểm Chứng (`src/data/algorithms.json` — 234 Cases)**:
   - **Full CFOP (119/119 Cases — 100% VERIFIED)**: 41/41 F2L, 57/57 OLL, 21/21 PLL.
   - **Full 2x2x2 (54/54 Cases — 100% VERIFIED)**: 12/12 Ortega (7 OLL + 5 PBL), 42/42 CLL (Sune, Anti-Sune, Pi, U, T, L, H, Corner Swap).
   - **Beginner 3x3x3 (8 Cases)**, **Roux Method (12 CMLL/LSE Cases)**, **ZZ & Petrus (8 Cases)**, **Big Cube 4x4–7x7 & Parity (9 Cases)**, **Pyraminx, Megaminx, Skewb, Square-1, Clock, Gear & Shape Mods (24 Cases)**.
3. **Hệ thống Hướng dẫn từ Cơ bản đến Nâng cao (`src/data/methods.json`)**:
   - Khóa học **Beginner 11 bước** tương tác kèm hình mô phỏng trạng thái trước/sau từng bước và cảnh báo lỗi thường gặp.
   - 15 phương pháp giải chuyên sâu (4LLL Trung cấp, Full CFOP, Roux, ZZ, Petrus, Heise/Waterman/ZB, 2x2 LBL/Ortega/CLL/EG, Big Cube Reduction/Yau/Hoya, Pyraminx LBL/L4E, Megaminx S2L, Sarah's Skewb, Square-1 Vandenbergh).
4. **Trình mô phỏng 2D/3D & Algorithm Player**:
   - Hỗ trợ WebGL 3D (Three.js) xoay chuột/cảm ứng và chế độ 2D Net nhẹ cho thiết bị cấu hình thấp.
   - Đầy đủ Play, Pause, Step Forward, Step Backward, Reset, Replay, chỉnh tốc độ và kiểm tra cú pháp notation.
5. **Bảng Ký hiệu Rubik (`src/data/notations.json` — 40 Ký hiệu & Quiz)**:
   - Giải thích chi tiết kèm sơ đồ minh họa và bài tập trắc nghiệm nhận diện.
6. **Practice Center & WCA Speedcubing Timer**:
   - Flashcard 2 mặt, Luyện ngẫu nhiên, Theo dõi tiến độ học tập (lưu `localStorage` + xuất JSON).
   - Đồng hồ bấm giờ chuẩn WCA (hỗ trợ 15s Inspection, tạo Scramble hợp lệ, tính Best, Mean, Ao5, Ao12 và Case Trainer).

---

## 2. Hướng dẫn Cài đặt, Chạy và Build

### Cách 1: Chạy ngay lập tức không cần cài đặt (Zero-Setup Standalone)
Mở trực tiếp file `public/standalone_app.html` (hoặc `rubik_master_app.html`) trên bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox, Safari).

### Cách 2: Chạy môi trường Phát triển Vite + React + TypeScript
1. **Cài đặt Node.js** (nếu máy chưa có):
   - Tải bản **Node.js LTS (v18.x hoặc v20.x trở lên)** tại [https://nodejs.org/](https://nodejs.org/).
   - Kiểm tra sau khi cài bằng lệnh `node -v` và `npm -v`.
2. **Trên Windows**:
   - Nháy đúp `setup.bat` để cài đặt toàn bộ thư viện (`npm install`).
   - Nháy đúp `run.bat` để khởi động сервер phát triển tại `http://localhost:5173`.
   - Nháy đúp `build.bat` để đóng gói bản Production vào thư mục `dist/`.
3. **Trên macOS / Linux**:
   ```bash
   npm install
   npm run dev
   npm run build
   ```

---

## 3. Tài liệu Đính kèm trong thư mục `docs/`
- `docs/DATA_ARCHITECTURE.md`: Tài liệu kiến trúc dữ liệu & Schema JSON/TypeScript.
- `docs/ADDING_NEW_ALGORITHMS.md`: Hướng dẫn bổ sung loại Rubik mới và kiểm chứng công thức mới.
- `docs/LIBRARIES_AND_LICENSES.md`: Danh sách thư viện sử dụng và giấy phép mã nguồn mở.
- `docs/QA_TEST_REPORT.md`: Báo cáo kiểm thử chức năng, toán học thuật toán, giao diện responsive và hiệu năng.
- `docs/DEPLOYMENT_GUIDE.md`: Hướng dẫn triển khai lên Vercel, Netlify, GitHub Pages hoặc Cloudflare Pages.
