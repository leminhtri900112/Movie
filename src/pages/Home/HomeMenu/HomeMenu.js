import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getHeThongRap } from "../../../redux/actions/QuanLyRapAction";
import HomeItemMenu from "./HomeItemMenu";
const { TabPane } = Tabs;

export default function HomeMenu(props) {
  let { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  let dispatch = useDispatch();
  // console.log(heThongRapChieu);
  useEffect(() => {
    dispatch(getHeThongRap());
  }, []);

  const renderHeThongRap = () => {
    return heThongRapChieu.map((itemRap, index) => {
      return (
        <TabPane
          tab={<img className="w-14 h-14" src={itemRap.logo} />}
          key={index}
        >
          {/* {itemRap.lstCumRap.map((itemCumRap, index) => {
            return <p>cfdgfg</p>;
          })} */}
          <Tabs style={{ height: 600 }} tabPosition="left">
            {itemRap.lstCumRap.map((itemCumRap, index) => {
              return (
                <TabPane tab={<p>{itemCumRap.tenCumRap}</p>} key={index}>
                  <div
                    className="w-full space-y-3 overflow-y-scroll"
                    style={{ height: 600 }}
                  >
                    {itemCumRap.danhSachPhim.map((itemPhim, index) => {
                      return <HomeItemMenu itemPhim={itemPhim} key={index} />;
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="container mx-auto px-28 pt-10 ">
      <Tabs style={{ height: 600 }} tabPosition="left">
        {renderHeThongRap()}
      </Tabs>
    </div>
  );
}
