# Sử dụng Oauth với google actions
*Luồng trên sử dụng Implicit*
### **Về phía server**
1.Clone code trên về

2.Chạy **npm install**

3.Chạy **npm start**

4.Tạo file **.env** chứa thông tin về **PORT** *(~=3000)* và **ACCESS_TOKEN_SECRET** *(~="secret")*

5.Tải [NGROK](https://ngrok.com/download) để tạo link HTTPS ,đăng nhập vào ngrok

6.chạy lệnh **ngrok http PORT** *(ví dụ đây là **ngrok http 3000**)*

    Forwarding                    http://2e25bcd9.ngrok.io -> http://localhost:3000
    Forwarding                    https://2e25bcd9.ngrok.io -> http://localhost:3000

7.Copy link https phía dưới tí nữa paste vào 

### **Cấu hình project**
1.Mở Actions Console và chọn project bạn muốn sử dụng

2.Click vào **Develop** tab và chọn **Account linking**

3.Enable **Account linking**

4.Trong **Account creation**, chọn *No, I only want to allow account creation on my website.*

5.Trong **Linking type**, chọn **OAuth** và **Implicit**.

![Configure](https://developers.google.com/assistant/identity/images/configure_oauth_implicit.png)

6.Trong **Client Information**:
  * Điền Client ID được xác định để nhận các request từ trang đăng nhâp.*(cái này điền tùy mục đích, server mình không dùng nhiều việc nên điền lung tung cũng được)* :)
  * Điền URL dùng để Authorization *(~ lấy lúc chạy ngrok nhé)*

7.Ấn **Save**

