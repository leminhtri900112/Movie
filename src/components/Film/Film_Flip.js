import React from "react";
import "./Film_Flip.css";
import { PlayCircleOutlined } from "@ant-design/icons";

export default function Film_Flip(props) {
  const { phim } = props;

  return (
    <div className="flip-card mt-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={phim.hinhAnh}
            alt="Avatar"
            style={{ width: "100%", height: "100%" }}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = "https://picsum.photos/300/300";
            // }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div
            className="w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <img
              src={phim.hinhAnh}
              alt="Avatar"
              style={{ width: "100%", height: "100%" }}
              //   onError={(e) => {
              //     e.target.onerror = null;
              //     e.target.src = "https://picsum.photos/300/300";
              //   }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl  font-bold">{phim.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {}}
        className="text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
