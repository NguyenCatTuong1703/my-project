import React from 'react';
import './Register.scss';

export default function Register() {
  return (
    <div className="register">
      <form className="login-form mb-3">
        <h1 className="login__heading">Đăng ký</h1>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Tên tài khoản
          </label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Nhập tên tài khoản" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail" placeholder="Nhập Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhoneNumber" className="form-label">
            Số điện thoại
          </label>
          <input type="tel" pattern="[0-9]{10}" className="form-control" id="inputPhoneNumber" placeholder="0333 333 333" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Nhập lại mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Nhập lại mật khẩu"
            required
          />
        {/* <span className="error">error</span> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Tạo tài khoản
        </button>
      </form>

      <span style={{display: "block", textAlign: "center", fontSize: "16px"}}>
        Đã có tài khoản? <a href="/dang-nhap">Đăng nhập</a> ngay
      </span>
    </div>
  )
}
