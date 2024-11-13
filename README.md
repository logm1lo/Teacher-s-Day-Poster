
# Teacher's Day 20/11 Website

This project is a web-based interactive poster for Teacher's Day, featuring an animated poster with a popup for users to submit wishes for their teachers. Users can add personalized wishes that appear as animated "clouds" floating over the poster.

---

Dự án này là một poster tương tác trên web dành cho Ngày Nhà giáo, với một poster động kèm hộp thoại để người dùng gửi lời chúc cho giáo viên. Người dùng có thể thêm lời chúc cá nhân hóa xuất hiện dưới dạng "đám mây" động lơ lửng trên poster.

## Features / Tính năng

- **Animated Poster**: A responsive Teacher's Day poster with interactive elements.
- **Wish Submission**: Users can click a button to open a popup form and submit wishes for their teachers.
- **Floating Wishes**: Submitted wishes appear as animated text clouds floating over the poster.
- **Responsive Design**: Optimized for both desktop and mobile screens.

---

- **Poster động**: Một poster Ngày Nhà giáo có thể đáp ứng trên các kích thước màn hình khác nhau.
- **Gửi lời chúc**: Người dùng có thể bấm nút để mở hộp thoại và gửi lời chúc cho giáo viên.
- **Lời chúc động**: Các lời chúc xuất hiện dưới dạng đám mây văn bản động lơ lửng trên poster.
- **Thiết kế phản hồi**: Tối ưu hóa cho cả màn hình máy tính và điện thoại.

## Installation / Cài đặt

1. Clone the repository:
   ```
   git clone https://github.com/logm1lo/teachers-day-poster.git
   ```
2. Open the project directory:
   ```
   cd teachers-day-poster
   ```
3. Open `index.html` in your browser to view the poster.

---

1. Sao chép kho lưu trữ:
   ```
   git clone https://github.com/logm1lo/teachers-day-poster.git
   ```
2. Mở thư mục dự án:
   ```
   cd teachers-day-poster
   ```
3. Mở tệp `index.html` trong trình duyệt để xem poster.

## Firebase Setup / Thiết lập Firebase

### Step 1: Set Up Firebase Project

1. Go to the Firebase Console.
2. Click on **Add Project** and give it a name (e.g., TeachersDayPoster).
3. Follow the setup instructions and click **Continue** until the project is created.

---

1. Vào trang Firebase Console.
2. Nhấp vào **Thêm dự án** và đặt tên cho dự án (ví dụ: TeachersDayPoster).
3. Thực hiện theo hướng dẫn thiết lập và nhấn **Tiếp tục** cho đến khi dự án được tạo.

### Step 2: Add Web App to Firebase Project

1. In your Firebase project dashboard, go to **Project Overview** (home page) and select **Web (</> icon)** to add a web app.
2. Name your app (e.g., TeachersDayPosterApp) and register it.
3. Firebase will provide you with a configuration snippet. Copy this snippet and paste it in the `<script>` section of `index.html` where it says `const firebaseConfig = {...};`.

---

1. Trong bảng điều khiển Firebase của bạn, vào **Tổng quan dự án** (trang chủ) và chọn **Web (</> icon)** để thêm ứng dụng web.
2. Đặt tên cho ứng dụng của bạn (ví dụ: TeachersDayPosterApp) và đăng ký nó.
3. Firebase sẽ cung cấp một đoạn cấu hình. Sao chép đoạn này và dán vào phần `<script>` của `index.html` tại vị trí `const firebaseConfig = {...};`.

### Step 3: Set Up Firebase Realtime Database

1. Go to the **Build** section in your Firebase project and click on **Realtime Database**.
2. Click **Create Database**, choose your location, then select **Start in Test Mode**.
3. Click **Enable**.

---

1. Vào phần **Xây dựng** trong dự án Firebase của bạn và nhấp vào **Realtime Database**.
2. Nhấp **Tạo Cơ Sở Dữ Liệu**, chọn vị trí của bạn, sau đó chọn **Bắt đầu ở Chế độ Kiểm tra**.
3. Nhấp vào **Bật**.

### Step 4: Update Database Rules (Optional)

To make the database accessible, ensure that the Realtime Database rules are as follows:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Important: Test Mode allows open read and write access, which is good for development. For production, you should add authentication or restrict access appropriately.

---

Quan trọng: Chế độ Kiểm tra cho phép quyền đọc và ghi mở, phù hợp cho phát triển. Đối với môi trường sản xuất, bạn nên thêm xác thực hoặc giới hạn quyền truy cập.

### Step 5: Update Firebase Config in `script.js` and `index.html`

In your project files (`script.js` and `index.html`), add your Firebase configuration under `firebaseConfig`. Replace placeholder values like `<your apiKey>` with your actual Firebase project values as shown below:

```javascript
// Add your own firebaseConfig here
const firebaseConfig = {
    apiKey: "<your apiKey>",
    authDomain: "<your authDomain>",
    databaseURL: "<your database URL>", 
    projectId: "<your projectID>",
    storageBucket: "<your storageBucket>",
    messagingSenderId: "<your messagingSenderId>",
    appId: "<your appId>",
    measurementId: "<your measurementId>"
};
```

---

Trong các tệp dự án của bạn (`script.js` và `index.html`), thêm cấu hình Firebase của bạn vào `firebaseConfig`. Thay thế các giá trị giữ chỗ như `<your apiKey>` bằng các giá trị thực của dự án Firebase của bạn như sau:

```javascript
// Thêm cấu hình Firebase của bạn vào đây
const firebaseConfig = {
    apiKey: "<your apiKey>",
    authDomain: "<your authDomain>",
    databaseURL: "<your database URL>", 
    projectId: "<your projectID>",
    storageBucket: "<your storageBucket>",
    messagingSenderId: "<your messagingSenderId>",
    appId: "<your appId>",
    measurementId: "<your measurementId>"
};
```

## Usage / Hướng dẫn sử dụng

1. Open the page in a web browser.
2. Click the "Send a Wish" button at the top of the poster.
3. Enter your wish and name in the popup form and submit.
4. Your wish will appear as a floating cloud on the poster.

---

1. Mở trang trong trình duyệt web.
2. Nhấp vào nút "Send a Wish" ở đầu poster.
3. Nhập lời chúc và tên của bạn trong biểu mẫu bật lên và gửi.
4. Lời chúc của bạn sẽ xuất hiện dưới dạng đám mây lơ lửng trên poster.

## Contributing / Đóng góp

Contributions are welcome! Feel free to submit a pull request or open an issue.

---

Chào đón đóng góp! Vui lòng gửi yêu cầu kéo hoặc mở một vấn đề nếu cần.

## License / Giấy phép

This project is licensed under the GPL-3.0 LICENSE. See the [LICENSE](LICENSE) file for details.

---

Dự án này được cấp phép theo Giấy phép GPL-3.0. Xem tệp [LICENSE](LICENSE) để biết chi tiết.

## Contact / Liên hệ

For any questions, please contact us at [logmilo12@gmail.com].

---

Nếu có câu hỏi, vui lòng liên hệ với chúng tôi tại [logmilo12@gmail.com].
