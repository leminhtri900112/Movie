import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "../reducers/CarouselReducer";
import { DanhSachPhimReducer } from "../reducers/DanhSachPhimReducer";
import { QuanLyRapReducer } from "../reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
  //state
  CarouselReducer,
  DanhSachPhimReducer,
  QuanLyRapReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
