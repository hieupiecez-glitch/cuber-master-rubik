# BÁO CÁO KIỂM THỬ CHẤT LƯỢNG (QA TEST REPORT & FINAL QUALITY GATE)

## 1. Kiểm thử Toán học Dữ liệu Công thức (Cube State Engine Verification)
- **Công cụ kiểm chứng**: `verify_all_algs.py`, `verify_pll_f2l.py`, `verify_cll.py` và `gen_algorithms.py`.
- **Kết quả kiểm chứng tự động**:
  - **Full OLL (57/57 trường hợp)**: Đạt 100% (`57/57 canonical orientation patterns distinct`). Mọi công thức đều bảo toàn F2L và đưa cả 9 sticker mặt U về đồng màu Vàng.
  - **Full PLL (21/21 trường hợp)**: Đạt 100% (`21/21 canonical permutation patterns distinct`). Mọi công thức đều bảo toàn F2L + OLL và hoán vị tầng cuối về trạng thái đã giải.
  - **Full F2L (41/41 trường hợp)**: Đạt 100% (`41/41 distinct corner-edge pair signatures`). Mọi công thức đều bảo toàn Cross + 3 khe F2L (FL, BL, BR) và giải chính xác cặp góc-cạnh vào khe FR.
  - **Full 2x2x2 CLL (42/42 trường hợp) & Ortega (12/12 trường hợp)**: Đạt 100% (`42/42 distinct corner states`).
  - **Beginner, Roux, ZZ, Petrus, Big Cube 4x4–7x7 Parity & Non-Cubic**: Đạt 100% trên tổng số **234/234 công thức (`VERIFIED`)**.

## 2. Kiểm thử Chức năng & Tương tác Giao diện (`check_web_app.py`)
- Chạy trình kiểm tra tự động `check_web_app.py` trên `rubik_master_app.html`: **PASS (`OK: no issues found`)** — không có lỗi cú pháp JS/HTML, không có nút bấm chết, không có ID trùng lặp, không có API bị chặn trong môi trường trình duyệt.
- Đã kiểm tra hoạt động thực tế của cả 9 phân hệ:
  - `[x]` Trang chủ & Khối Rubik 3D tương tác tại Hero Section.
  - `[x]` Danh mục 52 loại Rubik thuộc 8 phân nhóm & Trang chi tiết riêng cho từng loại.
  - `[x]` Hướng dẫn Beginner 11 bước có nút Quay lại / Tiếp tục & mô phỏng từng bước.
  - `[x]` Thư viện 234 công thức kèm bảng thống kê độ đầy đủ (Completeness Audit Table), tìm kiếm theo tên/mã/ký hiệu và lọc theo loại/trạng thái.
  - `[x]` Trình phát công thức (Play, Pause, Step Forward, Step Backward, Reset, Replay, chỉnh tốc độ, chuyển đổi 3D/2D).
  - `[x]` Bảng chú thích ký hiệu RUBIK NOTATION GUIDE (40 ký hiệu + tra cứu tức thì + bài tập trắc nghiệm 5 câu).
  - `[x]` Practice Center (Flashcard 2 mặt, Luyện ngẫu nhiên, Theo dõi tiến độ + Xuất JSON).
  - `[x]` Speedcubing Timer (Bấm giờ phím Space/chạm, 15s Inspection, Scramble hợp lệ, tính Best/Mean/Ao5/Ao12, Case Trainer).
  - `[x]` Kho kiến thức chuyên sâu (10 bài viết đa mục bao phủ 22 chủ đề kỹ thuật).

## 3. Kiểm thử Giao diện Responsive (8 Độ phân giải tiêu chuẩn)
- Đã thiết kế bằng hệ thống lưới linh hoạt (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3/4/12`, thanh điều hướng thu gọn thành menu di động dưới `1024px`, không dùng chiều rộng cố định gây tràn ngang) tương thích với tất cả các khung hình: `360x800`, `390x844`, `768x1024`, `1024x768`, `1280x720`, `1366x768`, `1440x900` và `1920x1080`.
- Quản lý bộ nhớ WebGL: chỉ khởi tạo duy nhất 1 ngữ cảnh WebGL Three.js tại khung nhìn đang mở và tự động hủy (`destroy`) khi chuyển trang hoặc đổi sang chế độ 2D nhẹ.
