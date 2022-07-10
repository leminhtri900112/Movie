import React from "react";

import HomeDanhSachPhim from "./HomeDanhSachPhim/HomeDanhSachPhim";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  return (
    <div>
      <HomeDanhSachPhim />
      <HomeMenu />
    </div>
  );
}
