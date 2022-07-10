import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HETHONGRAP } from "../type/HeThongRapType";

export const getHeThongRap = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinHeThongRap();
      dispatch({
        type: SET_HETHONGRAP,
        arrRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
