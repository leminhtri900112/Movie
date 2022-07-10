import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default function Film({ phim }) {
  return (
    <Card
      className="py-10"
      hoverable
      style={{ width: "240px", marginBottom: "20px" }}
      cover={
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${phim.hinhAnh})` }}
        >
          <img
            className="w-20 h-60 opacity-0"
            alt={phim.id}
            src={phim.hinhAnh}
          />
        </div>
      }
    >
      <Meta title={phim.tenPhim} description="www.instagram.com" />
    </Card>
  );
}
