import { SET_CAROUSEL } from "../type/CarouselType";

let defaultState = {
  arrCarousel: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const CarouselReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrCarousel = action.arrImg;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
