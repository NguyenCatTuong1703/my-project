import chungNhan from 'assets/images/chung-nhan.png';
import ivvAgency from 'assets/images/ivv-agency-winner.svg';
import TMGLogo from 'assets/images/TMG-logo.png';
import victoriaLogo from 'assets/images/Victoria-logo.png';
import QRCode from 'assets/images/QR_code.png';
import appStoreLink from 'assets/images/tai-appstore.png';
import googlePlayLink from 'assets/images/tai-googleplay.png';

import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FaAngleDown, FaFacebookF, FaFacebookMessenger, FaInstagram, FaPhoneAlt, FaPinterestP, FaRegClock, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <section className="infor mb-3">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-2">
                  <h5 className="infor__title">Về iVIVU.com</h5>
                  <ul className="infor__detail">
                    <li><a href="/#">Chúng tôi</a></li>
                    <li><a href="/#">iVIVU Blog</a></li>
                    <li><a href="/#">PMS - Miễn phí</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="infor__title">Thông Tin Cần Biết</h5>
                  <ul className="infor__detail">
                    <li><a href="/#">Điều kiện &amp; Điều khoản</a></li>
                    <li><a href="/#">Quy chế hoạt động</a></li>
                    <li><a href="/#">Câu hỏi thường gặp</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5 className="infor__title">Đối tác</h5>
                  <ul className="infor__detail">
                    <li><a href="/#">Quy chế bảo hiểm Cathay</a></li>
                    <li><a href="/#">Yêu cầu bồi thường Cathay</a></li>
                    <li><a href="/#">Quy chế trả góp</a></li>
                  </ul>
                </div>
                <div className="col-auto">
                  <h5 className="infor__title">Được chứng nhận</h5>
                  <img src={chungNhan} alt="chung-nhan" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row company">
                <div className="col"></div>
                <div className="col-auto company__logo"><img src={TMGLogo} alt="TMG" /></div>
                <div className="col-auto company__logo"><img src={victoriaLogo} alt="victoria" /></div>
                <div className="col"></div>
              </div>
              <div className="row">
                <span className="col company__disc">Một thành viên của <b>Thiên Minh Group</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="row contact__agency">
                <div className="col-auto p-0">
                  <img src={ivvAgency} className="contact__agency-img" alt="" />
                </div>
                <div className="col">
                  <span className="contact__agency-title">
                    iVIVU.com © 2020 - Đại lý Du lịch Trực tuyến Hàng đầu Việt Nam 2020
                  </span>
                </div>
              </div>
              <div className="row contact__address">
                <p>DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch đầu tư thành phố Hồ Chí Minh</p>
                <p><b><MdLocationOn /> HCM:</b> Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh <a href="/#">(Xem bản đồ)</a></p>
                <p><b><MdLocationOn /> HN:</b> Tầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội <a href="/#">(Xem bản đồ)</a></p>
                <p><b><MdLocationOn /> Cần Thơ:</b> Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ <a href="/#">(Xem bản đồ)</a></p>
                <p className="mb-3">
                  <b style={{color: '#1877F2'}}>Like để cập nhật cẩm nang du lịch</b>
                  <button className="btn btn-like"><AiFillLike /> Thích 1,2 triệu</button>
                  <a href="/#"><MdEmail /> tc@ivivu.com</a>
                </p>
                <div className="row social-links">
                  <div className="col-auto social-links__icon"><FaFacebookF /></div>
                  <div className="col-auto social-links__icon"><FaPinterestP /></div>
                  <div className="col-auto social-links__icon"><FaInstagram /></div>
                  <div className="col-auto social-links__icon"><FaTwitter /></div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <p><b>Bạn cần trợ giúp? Hãy gọi ngay</b></p>
              <div className="hot-line mb-3">
                <span className="hot-line__number">
                  <FaPhoneAlt /> 1900 1870 
                </span>
                <span className="hot-line__location">
                  <FaRegClock /> 7h30 <BsArrowRight /> 21h <MdLocationOn /> Hồ Chí Minh <FaAngleDown />
                </span>
              </div>
              <div className="mb-3 messenger">
                <div className="messenger__icon"><FaFacebookMessenger /></div>
                <span>Tư vấn với Olivia - chatbot của iVIVU</span>
              </div>
              <p><b>Đặt phòng dễ dàng hơn qua ứng dụng iVIVU</b></p>
              <div className="app-download">
                <div>
                  <img className="app-download__qr-code" src={QRCode} alt="QR code" />
                </div>
                <div className="app-download__links">
                  <img src={appStoreLink} alt="App Store link" />
                  <img src={googlePlayLink} alt="Google Play link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
