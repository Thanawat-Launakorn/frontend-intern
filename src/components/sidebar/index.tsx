import React from "react";
import calendar from "../../assets/images/calendar.png";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;
type AppSideBarProps = {
  collapsed: boolean;
  trigger: React.ReactNode;
  className?: string;
};
export default function AppSideBar({
  collapsed,
  trigger,
  className,
}: AppSideBarProps) {
  const navigate = useNavigate();
  return (
    <Sider
      trigger={trigger}
      collapsible
      collapsed={collapsed}
      className="bg-white"
    >
      <div className="logo bg-transparent flex justify-between items-center">
        <img
          src={calendar}
          alt="calendar-image"
          className="object-fill h-10 w-10 transition-all delay-75 translate-x-1"
        />
        <div className={collapsed ? "hidden" : ""}>
          <h1 className="text-white text-md font-bold tracking-wide">
            Booking System
          </h1>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
            onClick: () => navigate("/list-user"),
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
            onClick: () => navigate("/page3"),
          },
        ]}
      />
    </Sider>
  );
}
