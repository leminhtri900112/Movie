import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor(props) {
    super(props);
  }
  layDanhSachBanner = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachBanner");
  };

  layDanhSachPhim = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00");
  };
}

export const quanLyPhimService = new QuanLyPhimService();
