import Axios from "axios";
import { DOMAIN, TokenCyberSoft } from "../util/settings/config";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TokenCyberSoft),
      }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TokenCyberSoft),
      }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        TokenCyberSoft: TokenCyberSoft,
      }, //TokenCyberSoft yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TokenCyberSoft),
      }, //TokenCyberSoft yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
