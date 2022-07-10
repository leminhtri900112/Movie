import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
  constructor(props) {
    super(props);
  }

  layThongTinHeThongRap = () => {
    return this.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
    );
  };
}

export const quanLyRapService = new QuanLyRapService();
