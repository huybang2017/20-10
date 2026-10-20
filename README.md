# 20-10

Landing page chúc mừng **Ngày Phụ nữ Việt Nam 20/10** — gồm hai trang:

| Trang | File | Dành cho |
| --- | --- | --- |
| Gửi gia đình | `index.html` | Mẹ, bà, cô, chị, em, vợ, con gái… |
| Gửi bạn bè | `ban-be.html` | Bạn thân, bạn cấp 3, đồng nghiệp, hàng xóm… |

Mở file bằng trình duyệt (cần mạng để tải font và thư viện tạo ảnh).

## Tính năng

- **Cá nhân hóa**: chọn người nhận / gõ tên — lời gọi, đại từ và câu chữ đổi theo từng người
- Random lời chúc dạng lá thư
- Sao chép thư / tải ảnh PNG để gửi
- Tự nhớ lựa chọn trong phiên làm việc

## Giao diện

- Nền giấy có hạt, quầng sáng chuyển động, cánh hoa (trang gia đình) và trái tim bay (trang bạn bè)
- Hero với số `20 · 10` ánh kim loại, hoa văn chia đôi, mũi tên cuộn trang
- Trang gia đình: bì thư có sáp niêm phong, lá thư giấy kem với góc vàng, tem bưu điện SVG, chữ hoa đầu dòng (drop cap)
- Trang bạn bè: thiệp bo góc có băng keo, ảnh cực polaroid vẽ bằng SVG, thẻ chọn quan hệ, sóng phân cách
- Hiệu ứng hiện dần khi cuộn, header đổi nền khi cuộn, trái tim bắn ra khi gửi thư
- Tương thích mobile, hỗ trợ `prefers-reduced-motion` và truy cập bằng bàn phím

## Cấu trúc

```
index.html      trang gia đình
ban-be.html     trang bạn bè
styles.css      nền tảng dùng chung (token màu, nút, header, hiệu ứng cuộn)
ban-be.css      chủ đề riêng cho trang bạn bè (ghi đè bảng màu + thẻ thiệp)
script.js       logic trang gia đình
ban-be.js       logic trang bạn bè
```
