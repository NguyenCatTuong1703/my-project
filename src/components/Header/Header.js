import avatar from "assets/images/avatar-default-white.svg";
import logo from "assets/images/logo.svg";
import React, { useState } from "react";
import { BsArrowRight, BsThreeDots } from "react-icons/bs";
import { FaAngleDown, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import "./Header.scss";

const Header = () => {
  const [showMenuAccount, setShowMenuAccount] = useState("hide");

  function handleShowMenuAccount() {
    if (showMenuAccount === "hide") {
      setShowMenuAccount("show");
    } else {
      setShowMenuAccount("hide");
    }
  }

  return (
    <nav className="top-nav">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-auto">
            <a href="/">
              <img src={logo} alt="logo" className="top-nav__logo" />
            </a>
            <ul className="top-nav__menu">
              <li className="top-nav__menu-item top-nav__menu-item--active">
                <a href="/">Khách sạn</a>
              </li>
              <li className="top-nav__menu-item">
                <a href="/du-lich">Tours</a>
              </li>
              <li className="top-nav__menu-item">
                <a href="/ve-may-bay">Vé máy bay</a>
              </li>
              <li className="top-nav__menu-item">
                <a href="/an-uong">Ăn uống</a>
              </li>
              <li className="top-nav__menu-item">
                <div className="btn no-padding">
                  <BsThreeDots />
                </div>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <div
              className="top-nav__account btn no-padding"
              onClick={handleShowMenuAccount}
            >
              <img
                src={avatar}
                alt="avatar"
                className="top-nav__account-avatar"
              />
              <span className="top-nav__account-dropdown">
                Tài khoản <FaAngleDown />
              </span>
            </div>

            <div
              className={
                "top-nav__account-menu " +
                showMenuAccount
              }
            >
              <RiArrowUpSFill className="arrow-up" />

              <a href="/dang-nhap">
                <button className="btn mb-3 btn-login">
                  Đăng nhập
                </button>
              </a>
              
              <p>
                Chưa có tài khoản? <a href="/dang-ky">Đăng ký</a> ngay
              </p>
            </div>

            <div className="hot-line">
              <div className="hot-line__number">
                <FaPhoneAlt /> 1900 1870
              </div>
              <div className="hot-line__location">
                <FaRegClock /> 7h30 <BsArrowRight /> 21h <MdLocationOn /> Hồ Chí
                Minh <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
