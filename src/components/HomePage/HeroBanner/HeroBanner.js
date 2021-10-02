import FormSearch from "components/FormSearch/FormSearch";
import React from "react";
import './HeroBanner.scss';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="row">
          <h1 className="hero-banner__heading">
            Trải nghiệm kỳ nghỉ tuyệt vời
          </h1>
          <h2 className="hero-banner__discription">
            Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất
          </h2>
        </div>
        <FormSearch 
          width='col-8'
          widthText='col-12 mb-3'
        />
      </div>
    </section>
  );
};

export default HeroBanner;
