import axios from "axios";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { DOMAIN, TokenCyberSoft } from "../../util/settings/config";
import { SET_CAROUSEL } from "../type/CarouselType";

export const getActionCarousel = async (dispatch) => {
  try {
    // const result = await axios({
    //   method: "GET",
    //   url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
    //   headers: {
    //     TokenCybersoft: TokenCyberSoft,
    //   },
    // });
    // console.log(result);

    const result = await quanLyPhimService.layDanhSachBanner();
    dispatch({
      type: SET_CAROUSEL,
      arrImg: result.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
