import { SET_HETHONGRAP } from "../type/HeThongRapType";

const defaultState = {
  heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HETHONGRAP: {
      state.heThongRapChieu = action.arrRap;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
