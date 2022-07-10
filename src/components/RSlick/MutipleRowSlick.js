import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RSlick.css";

import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/type/DanhSachPhim";

export default function MutipleRowSlick({ arrPhim }) {
  let dispatch = useDispatch();
  let { sapChieu, dangChieu } = useSelector(
    (state) => state.DanhSachPhimReducer
  );
  //   console.log(arrPhim);
  const settings = {
    dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 2,
  };

  const renderArrPhim = () => {
    return arrPhim?.slice(0, 20).map((item, index) => {
      //   return <Film phim={item} key={index} />;
      return <Film_Flip phim={item} key={index} />;
    });
  };

  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <div>
        <div>
          {dangChieu ? (
            <button
              onClick={() => {
                dispatch({ type: SET_PHIM_DANG_CHIEU });
              }}
              type="button"
              className="px-6 py-2 mr-2 font-semibold  rounded bg-gray-800 text-white"
            >
              PHIM ĐANG CHIẾU
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: SET_PHIM_DANG_CHIEU });
              }}
              type="button"
              className="px-6 py-2 mr-2 font-semibold border-2 rounded border-gray-800 text-gray-800"
            >
              PHIM ĐANG CHIẾU
            </button>
          )}

          {sapChieu ? (
            <button
              onClick={() => {
                dispatch({ type: SET_PHIM_SAP_CHIEU });
              }}
              type="button"
              className="px-6 py-2 font-semibold border-2 rounded bg-gray-800 text-white"
            >
              PHIM SẮP CHIẾU
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({ type: SET_PHIM_SAP_CHIEU });
              }}
              type="button"
              className="px-6 py-2 font-semibold border-2 rounded border-gray-800 text-gray-800"
            >
              PHIM SẮP CHIẾU
            </button>
          )}
        </div>
      </div>
      <Slider className="listPhim" {...settings}>
        {renderArrPhim()}
      </Slider>
    </div>
  );
}
