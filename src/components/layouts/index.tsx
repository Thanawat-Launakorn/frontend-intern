import React, { useState } from "react";
import "./defaultLayout.css";

import { Layout, theme } from "antd";
import AppSideBar from "../sidebar";
import AppHeader from "../header/indetx";
import AppContent from "../content";

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleClick = {};
  return (
    <Layout className="h-screen">
      <AppSideBar collapsed={collapsed} trigger={null} className="" />
      <Layout className="site-layout">
        <AppHeader
          collapsed={collapsed}
          onClick={() => setCollapsed(!collapsed)}
        />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
