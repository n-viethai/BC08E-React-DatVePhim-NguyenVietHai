import { thisExpression } from "@babel/types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/DatVePhimAction";

class HangGhe extends Component {
  renderGhe = () => {
    let { hangGhe } = this.props;
    return hangGhe.danhSachGhe.map((item, index) => {
      let cssDaDat = "";
      let disabled = false;
      if (item.daDat) {
        cssDaDat = "gheDuocChon";
        disabled = true;
      }

      // xét trạng thái ghế đang đặt
      let cssGheDangChon = "";
      let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(
        (object) => object.soGhe === item.soGhe
      );
      if (indexGheDangChon !== -1) {
        cssGheDangChon = "gheDangChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssDaDat} ${cssGheDangChon} text-black`}
          key={index}
          onClick={() => {
            this.props.dispatch(datGheAction(item));
          }}
        >
          {item.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    let { hangGhe, soHangGhe } = this.props;
    if (soHangGhe === 0) {
      return (
        <div>
          {hangGhe.hang}
          {hangGhe.danhSachGhe.map((item, index) => {
            return (
              <button key={index} className="rowNumber text-xl">
                {item.soGhe}
              </button>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <span className="inline-block w-4">{hangGhe.hang}</span>
        {this.renderGhe()}
      </div>
    );
  };
  render() {
    return (
      <div className="text-white mt-2 text-xl">{this.renderHangGhe()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.DatVePhimReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(HangGhe);
