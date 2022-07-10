import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActionDanhSachPhim } from "../../../redux/actions/DanhSachPhimAction";
import MutipleRowSlick from "../../../components/RSlick/MutipleRowSlick";

export default function HomeDanhSachPhim() {
  const { arrPhim } = useSelector((state) => state.DanhSachPhimReducer);
  const dispatch = useDispatch();
  // console.log(arrPhim);
  useEffect(() => {
    const action = getActionDanhSachPhim;
    dispatch(action());
  }, []);

  return (
    <div className="container mx-auto my-10">
      <MutipleRowSlick arrPhim={arrPhim} />
    </div>
  );
}
