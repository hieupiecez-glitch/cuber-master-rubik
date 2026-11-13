# TÀI LIỆU KIẾN TRÚC DỮ LIỆU (DATA ARCHITECTURE)

Toàn bộ dữ liệu của **RUBIK MASTER** được tách biệt hoàn toàn khỏi tầng giao diện và lưu trữ có cấu trúc trong `src/data/` tuân thủ schema TypeScript tại `src/types/schema.ts`.

## 1. Cấu trúc `Puzzle` (`src/data/puzzles.json`)
- `id` (`string`): Mã định danh duy nhất (ví dụ: `"3x3"`, `"4x4"`, `"mirror-cube"`, `"square-1"`).
- `name` (`string`): Tên hiển thị đầy đủ tiếng Việt & quốc tế.
- `slug` (`string`): Đường dẫn thân thiện URL (`/puzzles/:slug`).
- `category` & `categoryCode`: Phân nhóm (`cube`, `shapemod`, `pyraminx`, `megaminx`, `skewb`, `square1`, `gear`, `other`).
- `wcaOfficial` (`boolean`): Có phải là bộ môn thi đấu chính thức của [WCA Regulations](https://www.worldcubeassociation.org/regulations/) hay không.
- `simulatorEngine`: Engine mô phỏng tương ứng (`"cube-2x2"`, `"cube-3x3"`, `"cube-4x4"`, hoặc `"none"` cho các biến thể dùng sơ đồ 2D chuyên biệt).
- `structure`, `differences`, `supportedNotation`, `supportedMethods`, `stages`, `specialCases`, `referenceUrl`.

## 2. Cấu trúc `Algorithm` (`src/data/algorithms.json`)
- `id`, `caseCode`, `caseName`, `puzzleId`, `methodId`, `category`, `subGroup`, `difficulty`.
- `algorithm` (`string`): Công thức chính chuẩn hóa theo ký hiệu WCA.
- `alternatives` (`string[]`): Danh sách các công thức thay thế hợp lệ.
- `setup` (`string`): Chuỗi thao tác nghịch đảo tạo ra trạng thái bài toán từ khối đã giải.
- `initialState` & `solvedState` (`string`): Chuỗi 54 ký tự biểu diễn chính xác màu của 54 sticker (`UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB`) được tính từ Cube State Engine.
- `verificationStatus`: `"VERIFIED"` (chỉ gán khi đã vượt qua kiểm tra toán học trên Cube State Engine) hoặc `"UNVERIFIED"`.
- `references`: Danh sách nguồn tham khảo có URL kiểm chứng.

## 3. Cấu trúc `Method` & `BeginnerStep` (`src/data/methods.json`)
- Lưu trữ 11 bước hướng dẫn người mới bắt đầu kèm `initialState`, `resultState`, `formula`, `explanation`, `expectedResult`, `commonMistakes` và 15 phương pháp giải kèm thống kê độ đầy đủ (`expectedCases`, `enteredCases`, `verifiedCases`, `missingCases`).

## 4. Cấu trúc `Notation` (`src/data/notations.json`) & `LearningProgress` (`localStorage`)
- Lưu trữ tiến độ học tập tại khóa `rm_progress` và danh sách yêu thích tại khóa `rm_favorites` trong `localStorage`, hỗ trợ xuất/nhập JSON dễ dàng nâng cấp lên cơ sở dữ liệu đám mây.
