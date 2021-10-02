import React from "react";
import "./HomePage.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import uu_dai_1 from "assets/images/uu-dai-1.jpg";
import uu_dai_2 from "assets/images/uu-dai-2.jpg";
import uu_dai_3 from "assets/images/uu-dai-3.jpg";
import uu_dai_4 from "assets/images/uu-dai-4.jpg";
import uu_dai_5 from "assets/images/uu-dai-5.jpg";

const HomePage = () => {
  return (
    <div>
      {/* ===================== hero-banner ==================== */}
      <HeroBanner />

      {/* ===================== main-content ==================== */}
      <section className="main-content mb-3">
        <div className="container">
          {/* du lịch an toàn */}
          <div className="heading">
            <h2 className="heading__title">Du lịch an toàn</h2>
            <p className="heading__discription">
              Nâng cao sức khỏe, cân bằng cuộc sống
            </p>
          </div>

          <div className="row safe-travel">
            <div className="col">
              <a href="/#">
                <div className="card card--romance">
                  <div className="card-body">
                    <h3 className="card-title">Lãng mạn</h3>
                    <p className="card-text">
                      Đi khắp thế gian, yêu thương ngâp tràn -
                      <a href="/#">12 khách sạn</a>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/#">
                <div className="card card--safe">
                  <div className="card-body">
                    <h3 className="card-title">An toàn</h3>
                    <p className="card-text">
                      Khách sạn cách ly an toàn, tiện nghi -
                      <a href="/#">24 khách sạn</a>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/#">
                <div className="card card--positive">
                  <div className="card-body">
                    <h3 className="card-title">Tích cực</h3>
                    <p className="card-text">
                      Khoảng cách an toàn, tạo năng lượng tích cực -
                      <a href="/#">17 khách sạn</a>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a href="/#">
                <div className="card card--gift">
                  <div className="card-body">
                    <h3 className="card-title">Gift Voucher</h3>
                    <p className="card-text">
                      Lưu giữ khoảnh khắc, trải nghiệm hành trình
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* ưu đãi tôt nhất */}
          <div className="heading">
            <h2 className="heading__title">Ưu đãi tốt nhất hôm nay</h2>
            <p className="heading__discription">
              Nhanh tay đặt ngay. Để mai sẽ lỡ
            </p>
          </div>
          <div className="row">
            <div className="col">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="/#"><img src={uu_dai_1} className="d-block w-100" alt="..." /></a>
                  </div>
                  <div className="carousel-item">
                    <a href="/#"><img src={uu_dai_2} className="d-block w-100" alt="..." /></a>
                  </div>
                  <div className="carousel-item">
                    <a href="/#"><img src={uu_dai_3} className="d-block w-100" alt="..." /></a>
                  </div>
                  <div className="carousel-item">
                    <a href="/#"><img src={uu_dai_4} className="d-block w-100" alt="..." /></a>
                  </div>
                  <div className="carousel-item">
                    <a href="/#"><img src={uu_dai_5} className="d-block w-100" alt="..." /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Điểm đến yêu thích trong nước */}
          <div className="heading">
            <h2 className="heading__title">Điểm đến yêu thích trong nước</h2>
            <p className="heading__discription">
              Lên rừng xuống biển. Trọn vẹn Việt Nam
            </p>
          </div>

          <div className="row vietnam-travel" style={{ marginBottom: "10px" }}>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <a href="/#">
                    <div
                      className="card card--phu-quoc"
                      style={{ height: "195px", marginBottom: "10px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Phú Quốc</h3>
                        <p className="card-text">223 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row p-0-7">
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--sapa"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Sapa</h3>
                        <p className="card-text">56 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--hoa-binh"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Hòa Bình</h3>
                        <p className="card-text">12 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a href="/du-lich-nha-trang">
                <div
                  className="card card--nha-trang"
                  style={{ height: "400px" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">Nha Trang</h3>
                    <p className="card-text">119 khách sạn</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row vietnam-travel">
            <div className="col-4">
              <a href="/#">
                <div
                  className="card card--vung-tau"
                  style={{ height: "400px" }}
                >
                  <div className="card-body">
                    <h3 className="card-title">Vũng Tàu</h3>
                    <p className="card-text">101 khách sạn</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <a href="/#">
                    <div
                      className="card card--ha-long"
                      style={{ height: "195px", marginBottom: "10px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Vịnh Hạ Long</h3>
                        <p className="card-text">131 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row p-0-7">
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--ninh-binh"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Ninh Bình</h3>
                        <p className="card-text">27 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--thanh-hoa"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Thanh Hóa</h3>
                        <p className="card-text">17 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Điểm đến yêu thích nước ngoài */}
          <div className="heading">
            <h2 className="heading__title">Điểm đến yêu thích nước ngoài</h2>
            <p className="heading__discription">
              Bao la thế giới. Bốn bể là nhà
            </p>
          </div>

          <div className="row foreign-travel">
            <div className="col-8">
              <div className="row">
                <div className="col">
                  <a href="/#">
                    <div
                      className="card card--portugal"
                      style={{ height: "195px", marginBottom: "10px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Portugal</h3>
                        <p className="card-text">2278 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row p-0-7">
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--spain"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Spain</h3>
                        <p className="card-text">10959 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col p-0-5">
                  <a href="/#">
                    <div
                      className="card card--italy"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Italy</h3>
                        <p className="card-text">21084 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <a href="/#">
                    <div
                      className="card card--switzerland"
                      style={{ height: "195px", marginBottom: "10px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Switzerland</h3>
                        <p className="card-text">732 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <a href="/#">
                    <div
                      className="card card--greece"
                      style={{ height: "195px" }}
                    >
                      <div className="card-body">
                        <h3 className="card-title">Greece</h3>
                        <p className="card-text">7427 khách sạn</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
