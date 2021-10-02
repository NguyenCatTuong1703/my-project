import nvSupport from "assets/images/nv-support.png";
import vinpearlResortSpaLongBeachNhaTrang from "assets/images/vinpearl-resort-spa-long-beach-nha-trang.jpg";
import FormSearch from "components/FormSearch/FormSearch";
import React from "react";
import { AiOutlineClockCircle, AiTwotoneLike } from "react-icons/ai";
import { BsHeartFill, BsSearch, BsStar, BsStarFill } from "react-icons/bs";
import { FaCheck, FaChevronDown, FaShareAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import "./NhaTrang.scss";

const NhaTrang = () => {
  return (
    <div className="nha-trang">
      <div className="container">
        
        <div className="row">
          <FormSearch widthText="col-auto" location="Nha Trang" />
        </div>

        <div className="row mb-3">
          <h3 className="nha-trang__heading">
            Khách sạn Nha Trang{" "}
            <a href="/#">
              {" "}
              <MdLocationOn /> XEM BẢN ĐỒ
            </a>
          </h3>
        </div>

        <div className="row mb-4">
          <div className="col-3 leftSidebar">
            <div className="row mb-3 leftSidebar-item support">
              <div className="col-auto">
                <img
                  src={nvSupport}
                  alt=""
                  className="leftSidebar__support-image"
                />
              </div>
              <div className="col">
                <div className="row">
                  <h3 className="leftSidebar__support-title">Cần hỗ trợ?</h3>
                </div>
                <div className="row">
                  <div className="row">
                    <div className="col-3 no-padding leftSidebar__support-location">
                      HCM
                    </div>
                    <div className="col leftSidebar__support-hotline">
                      1900 1870
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3 no-padding leftSidebar__support-location">
                      HN
                    </div>
                    <div className="col leftSidebar__support-hotline">
                      1900 2045
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3 no-padding leftSidebar__support-location">
                      CT
                    </div>
                    <div className="col leftSidebar__support-hotline">
                      1900 2087
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3 leftSidebar-item filter">
              <div className="col-12 mb-3 filter-section">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên khách sạn"
                    aria-label="hotelName"
                    aria-describedby="basic-addon1"
                  />
                  <span class="input-group-text no-padding" id="basic-addon1">
                    <button className="btn">
                      <BsSearch />
                    </button>
                  </span>
                </div>
              </div>

              <div className="col-12 mb-3 filter-section">
                <div className="filter-menu">
                  <div className="row">
                    <div className="col-12">
                      <span className="filter-title">Hạng sao</span>
                    </div>
                  </div>
                </div>

                <div className="filter-items">
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="1-sao"
                      name="1-sao"
                    />
                    <label htmlFor="1-sao" className="star">
                      <BsStarFill />
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="2-sao"
                      name="2-sao"
                    />
                    <label htmlFor="2-sao" className="star">
                      <BsStarFill /> <BsStarFill />
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="3-sao"
                      name="3-sao"
                    />
                    <label htmlFor="3-sao" className="star">
                      <BsStarFill /> <BsStarFill /> <BsStarFill />
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="4-sao"
                      name="4-sao"
                    />
                    <label htmlFor="4-sao" className="star">
                      <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                      <BsStarFill />
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="5-sao"
                      name="5-sao"
                    />
                    <label htmlFor="5-sao" className="star">
                      <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                      <BsStarFill /> <BsStarFill />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-3 filter-section">
                <div className="filter-menu">
                  <div className="row">
                    <div className="col-12">
                      <span className="filter-title">Khu vực</span>
                    </div>
                  </div>
                </div>
                <div className="filter-items">
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Bãi biển Nhũ Tiên"
                      name="Bãi biển Nhũ Tiên"
                    />
                    <label htmlFor="Bãi biển Nhũ Tiên" className="text-label">
                      Bãi biển Nhũ Tiên
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Bãi Dài"
                      name="Bãi Dài"
                    />
                    <label htmlFor="Bãi Dài" className="text-label">
                      Bãi Dài
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Bình Ba"
                      name="Bình Ba"
                    />
                    <label htmlFor="Bình Ba" className="text-label">
                      Bình Ba
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Cam Ranh"
                      name="Cam Ranh"
                    />
                    <label htmlFor="Cam Ranh" className="text-label">
                      Cam Ranh
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Đảo Hòn Tre"
                      name="Đảo Hòn Tre"
                    />
                    <label htmlFor="Đảo Hòn Tre" className="text-label">
                      Đảo Hòn Tre
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Dốc Lết"
                      name="Dốc Lết"
                    />
                    <label htmlFor="Dốc Lết" className="text-label">
                      Dốc Lết
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-3 filter-section">
                <div className="filter-menu">
                  <div className="row">
                    <div className="col-12">
                      <span className="filter-title">Loại hình nơi ở</span>
                    </div>
                  </div>
                </div>
                <div className="filter-items">
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Khu nghỉ dưỡng (Resort)"
                      name="Khu nghỉ dưỡng (Resort)"
                    />
                    <label
                      htmlFor="Khu nghỉ dưỡng (Resort)"
                      className="text-label"
                    >
                      Khu nghỉ dưỡng (Resort)
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Biệt thự (Villa)"
                      name="Biệt thự (Villa)"
                    />
                    <label htmlFor="Biệt thự (Villa)" className="text-label">
                      Biệt thự (Villa)
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Khách sạn (Hotel)"
                      name="Khách sạn (Hotel)"
                    />
                    <label htmlFor="Khách sạn (Hotel)" className="text-label">
                      Khách sạn (Hotel)
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Căn hộ (Apartment)"
                      name="Căn hộ (Apartment)"
                    />
                    <label htmlFor="Căn hộ (Apartment)" className="text-label">
                      Căn hộ (Apartment)
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Du thuyền (Cruise)"
                      name="Du thuyền (Cruise)"
                    />
                    <label htmlFor="Du thuyền (Cruise)" className="text-label">
                      Du thuyền (Cruise)
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Nhà nghỉ (Guest house)"
                      name="Nhà nghỉ (Guest house)"
                    />
                    <label
                      htmlFor="Nhà nghỉ (Guest house)"
                      className="text-label"
                    >
                      Nhà nghỉ (Guest house)
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12 filter-section">
                <div className="filter-menu">
                  <div className="row">
                    <div className="col-12">
                      <span className="filter-title">Tiện ích</span>
                    </div>
                  </div>
                </div>
                <div className="filter-items">
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Phòng gia đình"
                      name="Phòng gia đình"
                    />
                    <label htmlFor="Phòng gia đình" className="text-label">
                      Phòng gia đình
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Bãi biển riêng"
                      name="Bãi biển riêng"
                    />
                    <label htmlFor="Bãi biển riêng" className="text-label">
                      Bãi biển riêng
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Bãi đậu xe ô tô tại khách sạn"
                      name="Bãi đậu xe ô tô tại khách sạn"
                    />
                    <label
                      htmlFor="Bãi đậu xe ô tô tại khách sạn"
                      className="text-label"
                    >
                      Bãi đậu xe ô tô tại khách sạn
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Hồ bơi"
                      name="Hồ bơi"
                    />
                    <label htmlFor="Hồ bơi" className="text-label">
                      Hồ bơi
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Đưa đón sân bay miễn phí"
                      name="Đưa đón sân bay miễn phí"
                    />
                    <label
                      htmlFor="Đưa đón sân bay miễn phí"
                      className="text-label"
                    >
                      Đưa đón sân bay miễn phí
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Khu vui chơi trẻ em"
                      name="Khu vui chơi trẻ em"
                    />
                    <label htmlFor="Khu vui chơi trẻ em" className="text-label">
                      Khu vui chơi trẻ em
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row leftSidebar-item experience">
              <div className="experience-head">
                Kinh nghiệm du lịch Nha Trang
              </div>
              <div className="experience-content">
                <p>
                  Nếu đã từng một lần đến với Nha Trang, du khách sẽ dễ dàng bị
                  “đánh gục” bởi sự quyến rũ và năng động của thành phố biển
                  xinh đẹp này.
                </p>
                <p>
                  Tắm biển ở bãi Dài, thăm Tháp Bà Ponagar, tắm bùn, chơi các
                  môn thể thao trên nước… là những trải nghiệm bạn nên thử khi
                  tới Nha Trang.
                </p>
                <p>
                  Bên cạnh đó đừng quên thưởng thức tô bún chả cá sứa hay những
                  chiếc bánh xèo mực nóng hổi… bạn sẽ cảm nhận rõ rệt hương vị
                  mặn mòi của phố biển. Hãy cùng Thổ địa iVIVU.com khiến chuyến
                  du lịch của bạn thêm hoàn hảo!
                </p>
                <a href="/#">Xem thêm</a>
              </div>
            </div>
          </div>

          <div className="col hotel">
            <div className="row hotel-item">
              <a href="/#">
                <div className="col-12 hotel-item__combo">
                  <div className="combo-title">
                    <AiOutlineClockCircle />
                    Còn 9 ngày | Nghỉ dưỡng mê ly 6N5Đ + Vé máy bay + Ăn 3 bữa +
                    Test Covid từ 11.599.000 VND/Phòng
                  </div>
                </div>
                <div className="row hotel-item__content">
                  <div className="col-auto left">
                    <img
                      src={vinpearlResortSpaLongBeachNhaTrang}
                      alt=""
                      className="img-wrapper"
                    />
                  </div>

                  <div className="col center">
                    <div className="detail">
                      <p className="name">
                        Vinpearl Resort &amp; Spa Long Beach Nha Trang
                      </p>
                      <p className="rating">
                        <span className="rating-star">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </span>
                        <span className="rating-heart">
                          <BsHeartFill />
                        </span>
                        <span className="rating-review">
                          <span className="rating-review__score">9.3</span>
                          <span className="rating-review__text">Tuyệt vời</span>
                          <span className="rating-review__count">
                            {" "}
                            | 45 đánh giá
                          </span>
                        </span>
                      </p>
                      <p className="address">
                        <MdLocationOn />
                        Lô D6B2 VÀ D7A1 thuộc khu 2 - khu du lịch bán đảo Cam
                        Ranh, huyện Cam Lâm -<b>Xem bản đồ</b>
                      </p>
                    </div>

                    <div className="highlights">
                      <div className="tag mb-2">
                        <div className="tag-item">
                          <FaCheck /> Gần gũi với thiên nhiên
                        </div>
                        <div className="tag-item">
                          <FaCheck /> Chụp ảnh đẹp
                        </div>
                      </div>
                      <div className="pill">
                        <div className="pill-icon"><BsStarFill /></div>
                        <div className="pill-item">Lý tưởng cho cặp đôi nghỉ dưỡng</div>
                        <div className="pill-item">Ngắm hoàng hôn tuyệt đẹp</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 right">
                    <div className="status">
                      <span className="status__icon">
                        <FcAlarmClock />
                      </span>
                      <span className="status__title">Hết phòng</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="row hotel-item">
              <a href="/#">
                <div className="col-12 hotel-item__combo">
                  <div className="combo-title">
                    <AiOutlineClockCircle />
                    Còn 9 ngày | Nghỉ dưỡng mê ly 6N5Đ + Vé máy bay + Ăn 3 bữa +
                    Test Covid từ 11.599.000 VND/Phòng
                  </div>
                </div>
                <div className="row hotel-item__content">
                  <div className="col-auto left">
                    <img
                      src={vinpearlResortSpaLongBeachNhaTrang}
                      alt=""
                      className="img-wrapper"
                    />
                  </div>

                  <div className="col center">
                    <div className="detail">
                      <p className="name">
                        Vinpearl Resort &amp; Spa Long Beach Nha Trang
                      </p>
                      <p className="rating">
                        <span className="rating-star">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </span>
                        <span className="rating-heart">
                          <BsHeartFill />
                        </span>
                        <span className="rating-review">
                          <span className="rating-review__score">9.3</span>
                          <span className="rating-review__text">Tuyệt vời</span>
                          <span className="rating-review__count">
                            {" "}
                            | 45 đánh giá
                          </span>
                        </span>
                      </p>
                      <p className="address">
                        <MdLocationOn />
                        Lô D6B2 VÀ D7A1 thuộc khu 2 - khu du lịch bán đảo Cam
                        Ranh, huyện Cam Lâm -<b>Xem bản đồ</b>
                      </p>
                    </div>

                    <div className="highlights">
                      <div className="tag mb-2">
                        <div className="tag-item">
                          <FaCheck /> Gần gũi với thiên nhiên
                        </div>
                        <div className="tag-item">
                          <FaCheck /> Chụp ảnh đẹp
                        </div>
                      </div>
                      <div className="pill">
                        <div className="pill-icon"><BsStarFill /></div>
                        <div className="pill-item">Lý tưởng cho cặp đôi nghỉ dưỡng</div>
                        <div className="pill-item">Ngắm hoàng hôn tuyệt đẹp</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 right">
                    <div className="status">
                      <span className="status__icon">
                        <FcAlarmClock />
                      </span>
                      <span className="status__title">Hết phòng</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="row hotel-item">
              <a href="/#">
                <div className="col-12 hotel-item__combo">
                  <div className="combo-title">
                    <AiOutlineClockCircle />
                    Còn 9 ngày | Nghỉ dưỡng mê ly 6N5Đ + Vé máy bay + Ăn 3 bữa +
                    Test Covid từ 11.599.000 VND/Phòng
                  </div>
                </div>
                <div className="row hotel-item__content">
                  <div className="col-auto left">
                    <img
                      src={vinpearlResortSpaLongBeachNhaTrang}
                      alt=""
                      className="img-wrapper"
                    />
                  </div>

                  <div className="col center">
                    <div className="detail">
                      <p className="name">
                        Vinpearl Resort &amp; Spa Long Beach Nha Trang
                      </p>
                      <p className="rating">
                        <span className="rating-star">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </span>
                        <span className="rating-heart">
                          <BsHeartFill />
                        </span>
                        <span className="rating-review">
                          <span className="rating-review__score">9.3</span>
                          <span className="rating-review__text">Tuyệt vời</span>
                          <span className="rating-review__count">
                            {" "}
                            | 45 đánh giá
                          </span>
                        </span>
                      </p>
                      <p className="address">
                        <MdLocationOn />
                        Lô D6B2 VÀ D7A1 thuộc khu 2 - khu du lịch bán đảo Cam
                        Ranh, huyện Cam Lâm -<b>Xem bản đồ</b>
                      </p>
                    </div>

                    <div className="highlights">
                      <div className="tag mb-2">
                        <div className="tag-item">
                          <FaCheck /> Gần gũi với thiên nhiên
                        </div>
                        <div className="tag-item">
                          <FaCheck /> Chụp ảnh đẹp
                        </div>
                      </div>
                      <div className="pill">
                        <div className="pill-icon"><BsStarFill /></div>
                        <div className="pill-item">Lý tưởng cho cặp đôi nghỉ dưỡng</div>
                        <div className="pill-item">Ngắm hoàng hôn tuyệt đẹp</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-3 right">
                    <div className="status">
                      <span className="status__icon">
                        <FcAlarmClock />
                      </span>
                      <span className="status__title">Hết phòng</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          
          </div>
        </div>

        <div className="row mb-3 about">
          <div className="col">
            <div className="row mb-3 about-header">
              <div className="col left">
                <h3 className="about-title">Khách sạn Nha Trang</h3>
                <button className="btn btn-like"><AiTwotoneLike /><span>Thích 5k</span></button>
                <button className="btn btn-share"><FaShareAlt /><span>Chia sẻ</span></button>
              </div>
              <div className="col-auto right">
                <div className="rating-star">
                  <BsStarFill className="star-achieved" />
                  <BsStarFill className="star-achieved" />
                  <BsStarFill className="star-achieved" />
                  <BsStar />
                  <BsStar />
                </div>
                <span className="rating-score">3.0/5 trên 773 đánh giá</span>
              </div>
            </div>

            <div className="row about-content">
              <p>
                Nha Trang hầu như đông đúc du khách quanh năm, đặc biệt rất hay cháy phòng vào dịp lễ lạt hoặc 
                cuối tuần dù cho <i>khách sạn Nha Trang</i> rất nhiều và đa dạng phân khúc. Bạn nên sắp xếp lịch 
                đi du lịch nha Trang sớm và book ngay phòng để tránh cập rập nhé!
              </p>
              <p>
                Các khách sạn cao cấp ở Nha Trang đa số nằm <a href="/#">dọc đường Trần Phú</a>, ở ngay trung tâm, 
                gần bãi biển, tầm nhìn đẹp và thoáng mát. Xung quanh những khách sạn này đều có nhà hàng, quán bar, 
                cafe, rạp chiếu phim lớn. Đặt <b>khách sạn Nha Trang</b> ở trung tâm, bạn có cơ hội thoải mái dạo 
                bộ trên bờ biển và tiện lợi khi đến những điểm vui chơi, giải trí tại trung tâm.
              </p>
              <p>
                Ngoài ra, ở phân khúc <a href="/#">khách sạn Nha Trang</a> giá mềm hơn bạn có thể chọn khách sạn 
                nằm trên các trục đường Hùng Vương, <a href="/#">khu phố Tây Nha Trang</a>. Khu vực này khá tấp 
                nập với những hàng quán ăn uống và giải trí suốt đêm để phục vụ du khách. Đặc biệt, đối với du 
                khách muốn trải nghiệm nghỉ dưỡng riêng tư và cao cấp thì các resort biệt lập ở 
                <a href="/#">Vịnh Ninh Vân</a> hay <a href="/#">Bãi Dài</a> lại là lựa chọn dành cho bạn.
              </p>
              <p>
                Dù bạn có nhu cầu ở đâu, hãy liên hệ với iVIVU.com, chúng tôi đảm bảo có phòng hợp với mong muốn 
                của bạn đấy!
              </p>
            </div>
          </div>
        </div>

        <div className="row panel">
          <div className="panel-item">
            <div className="col-12 panel-heading">
              <button 
                className="btn btn-collapse"
                data-bs-toggle="collapse" 
                data-bs-target="#collapseOne" 
                aria-controls="collapseOne"
              >
                <FaChevronDown />
                Khách sạn Nha Trang theo hạng sao
              </button>
            </div>

            <div className="col-12 panel-content collapse show" id="collapseOne">
              <ul>
                <li><a href="/#">Khách sạn 1 sao tại Nha Trang</a></li>
                <li><a href="/#">Khách sạn 2 sao tại Nha Trang</a></li>
                <li><a href="/#">Khách sạn 3 sao tại Nha Trang</a></li>
                <li><a href="/#">Khách sạn 4 sao tại Nha Trang</a></li>
                <li><a href="/#">Khách sạn 5 sao tại Nha Trang</a></li>
              </ul>
            </div>
          </div>

          <div className="panel-item">
            <div className="col-12 panel-heading">
              <button 
                className="btn btn-collapse"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-controls="collapseTwo"
              >
                <FaChevronDown />
                Khách sạn Nha Trang tại các địa điểm phổ biến
              </button>
            </div>

            <div className="col-12 panel-content collapse show" id="collapseTwo">
              <ul>
                <li><a href="/#">Bãi biển Nhũ Tiên</a></li>
                <li><a href="/#">Bãi Dài</a></li>
                <li><a href="/#">Bình Ba</a></li>
                <li><a href="/#">Cam Ranh</a></li>
                <li><a href="/#">Đảo Hòn Tre</a></li>
                <li><a href="/#">Dốc Lết</a></li>
                <li><a href="/#">Đường Phạm Văn Đồng - Bãi Tiên</a></li>
                <li><a href="/#">Đường Trần Phú</a></li>
                <li><a href="/#">Hòn Tằm</a></li>
                <li><a href="/#">Khu phố Tây</a></li>
                <li><a href="/#">Ninh Hòa</a></li>
                <li><a href="/#">Trung tâm Thành Phố</a></li>
                <li><a href="/#">Vịnh Ninh Vân</a></li>
              </ul>
            </div>
          </div>

          <div className="panel-item">
            <div className="col-12 panel-heading">
              <button 
                className="btn btn-collapse"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-controls="collapseThree"
              >
                <FaChevronDown />
                Khách sạn tại các địa điểm du lịch nổi tiếng khác
              </button>
            </div>

            <div className="col-12 panel-content collapse show" id="collapseThree">
              <ul>
                <li><a href="/#">Khách sạn Quảng Ninh</a></li>
                <li><a href="/#">Khách sạn Sơn La</a></li>
                <li><a href="/#">Khách sạn Quảng Trị</a></li>
                <li><a href="/#">Khách sạn Cao Bằng</a></li>
                <li><a href="/#">Khách sạn Vĩnh Long</a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
                <li><a href="/#">Khách sạn </a></li>
              </ul>
            </div>
          </div>
        
        </div>

      </div>
    </div>
  );
};

export default NhaTrang;
