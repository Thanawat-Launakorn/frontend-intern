import React, { ButtonHTMLAttributes } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout, theme } from "antd";

const { Header, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
type AppHeaderProps = {
  collapsed: boolean;
  onClick: any;
};
export default function AppHeader({ collapsed, onClick }: AppHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0 }} className="bg-white">
      <div className="flex">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: onClick,
          }
        )}
        <div></div>
      </div>
    </Header>
  );
}
