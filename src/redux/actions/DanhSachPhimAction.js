import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_LISTPHIM } from "../type/DanhSachPhim";

export const getActionDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
      dispatch({
        type: SET_LISTPHIM,
        arrPhim: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
