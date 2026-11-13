# HƯỚNG DẪN BỔ SUNG LOẠI RUBIK VÀ CÔNG THỨC MỚI

## 1. Quy trình Thêm Một Loại Puzzle Mới
1. Mở file `src/data/puzzles.json`.
2. Thêm một đối tượng tuân thủ interface `Puzzle` (xem `src/types/schema.ts`):
   - Khai báo rõ `categoryCode` thuộc 1 trong 8 họ puzzle.
   - Liệt kê đầy đủ `supportedNotation`, `stages` (các giai đoạn giải) và `specialCases` (các trường hợp đặc biệt / Parity).
   - Nếu puzzle chia sẻ cơ chế trạng thái lập phương 2x2x2, 3x3x3 hoặc 4x4x4, đặt `simulatorEngine` là `"cube-2x2"`, `"cube-3x3"` hoặc `"cube-4x4"`. Nếu chưa có 3D engine riêng, đặt `"none"` để hệ thống hiển thị sơ đồ 2D minh bạch.

## 2. Quy trình Thêm & Kiểm chứng Công thức Mới (Bắt buộc)
Không bao giờ nhập công thức chưa kiểm chứng rồi gắn nhãn `VERIFIED`. Hãy thực hiện theo 3 bước:
1. Dùng Cube State Engine (`src/engine/cubeEngine.ts`) tính `setup = invertAlgorithmString(algorithm)`.
2. Áp dụng `setup` lên trạng thái đã giải `createSolved3x3()`, căn chỉnh tâm (`alignCenters3x3`) để thu được chuỗi 54 ký tự `initialState`.
3. Áp dụng `algorithm` lên `initialState` để xác nhận trạng thái đích (`solvedState`) giải đúng yêu cầu của phương pháp (ví dụ: bảo toàn F2L và lật đúng 9 sticker U cho OLL; giải hoàn chỉnh cả 54 sticker cho PLL; bảo toàn Cross + 3 khe F2L và giải khe FR cho F2L).
4. Khi kiểm tra đạt 100%, đặt `"verificationStatus": "VERIFIED"` và bổ sung vào `src/data/algorithms.json`.
