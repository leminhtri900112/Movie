import React from "react";

export default function HomeItemMenu({ itemPhim }) {
  return (
    <div className="flex w-full h-32 space-x-3 border-b-2">
      <img
        className="w-1/5 h-full object-cover rounded"
        src={itemPhim.hinhAnh}
        alt={itemPhim.tenPhim}
      />
      <div>
        <p className="text-red-500 text-lg font-bold">{itemPhim.tenPhim}</p>
        <div className="grid grid-cols-4 gap-3">
          {itemPhim.lstLichChieuTheoPhim.map((itemLich, index) => {
            return index < 8 ? (
              <button className="bg-gray-300 p-1  rounded">
                {itemLich.ngayChieuGioChieu}
              </button>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
    </div>
  );
}
