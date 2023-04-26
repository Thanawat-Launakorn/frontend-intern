import React from "react";

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
      <div className="text-lg text-red-300">dfe</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
            onClick: () => navigate("/home"),
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
