import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getActionCarousel } from "../../../../redux/actions/CarouselAction";

import "./HomeCarousel.css";

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "bottom",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { arrCarousel } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  // console.log(arrCarousel);

  // Sử dụng cách thông thường
  // useEffect(async () => {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner`,
  //       headers: {
  //         TokenCybersoft:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxOCIsIkhldEhhblN0cmluZyI6IjI0LzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NjU2OTYwMDAwMCIsIm5iZiI6MTYzNzc3MzIwMCwiZXhwIjoxNjY2NzE3MjAwfQ.DWLvOaiIVlM3ruSxr9n9wTjFAhCxMgyw8spyqZIBrPE",
  //       },
  //     });
  //     console.log(result);
  //     dispatch({
  //       type: "SET_CAROUSEL",
  //       arrImg: result.data.content,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  //Sử dụng redux thunk
  useEffect(() => {
    const action = getActionCarousel;
    dispatch(action);
  }, []);

  const renderCarousel = () => {
    return arrCarousel.map((item, index) => {
      return (
        <div style={{ width: "100%" }} key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="w-full opacity-0" />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel className="carouselBanner" effect="fade">
      {renderCarousel()}
    </Carousel>
  );
}
