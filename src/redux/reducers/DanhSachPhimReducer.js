import {
  SET_LISTPHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../type/DanhSachPhim";

let defaultState = {
  arrPhim: null,
  dangChieu: false,
  sapChieu: false,
  arrPhimDefault: null,
};

export const DanhSachPhimReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LISTPHIM: {
      state.arrPhimDefault = action.arrPhim;
      state.arrPhim = state.arrPhimDefault;
      return { ...state };
    }

    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = true;
      state.sapChieu = false;
      if (state.dangChieu) {
        state.arrPhim = state.arrPhimDefault.filter((phim) => {
          return phim.dangChieu;
        });
      } else {
        state.arrPhim = state.arrPhimDefault;
      }
      console.log(state.arrPhim);
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = true;
      state.dangChieu = false;
      if (state.sapChieu) {
        state.arrPhim = state.arrPhimDefault.filter((phim) => {
          return phim.sapChieu;
        });
      } else {
        state.arrPhim = state.arrPhimDefault;
      }

      //   console.log(state.arrPhim);
      return { ...state };
    }

    default:
      return { ...state };
  }
};
