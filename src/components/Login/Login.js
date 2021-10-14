import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Login.scss";

export default function Login() {
  const history = useHistory();

  const users = useSelector(state => state.users);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;
    
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (username === element.username) {
        if (password === element.password) {
          setError('');
          setTimeout(() => {
            history.push('/');
          }, 1000);
        } 
        else setError("Sai mat khau!!!");
        break;
      }
      else setError("Tai khoan khong ton tai!!!");
    };
  }

  return (
    <div className="login">
      <form className="login-form mb-3" onSubmit={handleSubmit}>
        <h1 className="login__heading">Đăng nhập</h1>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Tên tài khoản
          </label>
          <input type="text" className="form-control" id="inputUsername" placeholder="Nhập tên tài khoản" required />
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

          <div className="mb-3"><span className="error">{error}</span></div>
        
        </div>

        <div className="row justify-content-between mb-3">
          <div className="col-auto">
            <input type="checkbox" id="rememberPassword" />
            <label htmlFor="rememberPassword">&nbsp; Nhớ mật khẩu?</label>
          </div>
          <div className="col-auto"><a href="/#">Quên mật khẩu?</a></div>
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>

      <span style={{display: "block", textAlign: "center", fontSize: "16px"}}>
        Chưa có tài khoản? <a href="/dang-ky">Đăng ký</a> ngay
      </span>
    </div>
  );
}
