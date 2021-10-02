import React from "react";
import { BsPeople } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import "./FormSearch.scss";

const FormSearch = (props) => {
  return (
    <form className={"form " + props.width}>
      <div className="row">
        <div className={props.widthText}>
          <div className="input-group">
            <span className="input-icon">
              <IoLocationOutline />
            </span>
            <input
              className="form-control search-text"
              type="text"
              placeholder="Bạn muốn đi đâu?"
              value={props.location}
              required
            />
          </div>
        </div>
        
        <div className="col">
          <div className="row">
            <div className="col-6">
              <div className="row date-picker">
                <div className="col-auto"><input className="form-control date-picker__from" type="date" /></div>
                <div className="col-auto"><input className="form-control date-picker__from" type="date" /></div>
              </div>
            </div>
            <div className="col-4 room">
              <div className="input-group">
                <span className="input-icon">
                  <BsPeople />
                </span>
                <div className="form-control search-room">
                  <p className="search-room__value">2 người lớn, 0 trẻ em</p>
                  <p className="search-room__discription">1 phòng</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <button className="btn btn-search">Tìm</button>
            </div>
          </div>
        </div>
      
      </div>
    </form>
  );
};

export default FormSearch;
