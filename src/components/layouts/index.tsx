import React, { useState } from "react";
import "./defaultLayout.css";

import { Layout, theme } from "antd";
import AppSideBar from "../sidebar";
import AppHeader from "../header";
import AppContent from "../content";
import ThemeProvider from "../../context/ThemeProvider";

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [receive, setReceive] = React.useState<boolean>(false);

  return (
    <ThemeProvider initialTheme="">
      <Layout className="h-screen">
        <AppSideBar collapsed={collapsed} trigger={null} className="" />
        <Layout className="site-layout">
          <AppHeader
            collapsed={collapsed}
            onClick={() => setCollapsed(!collapsed)}
            props={receive}
          />

          <AppContent isOpen={receive} />
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default DefaultLayout;
