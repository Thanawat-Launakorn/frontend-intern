import React from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
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
  return (
    <Sider trigger={trigger} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        className=""
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
}
