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
    <ThemeProvider>
      <Layout className="min-h-screen flex flex-col justify-between" hasSider>
        <AppSideBar collapsed={collapsed} trigger={null} className="" />
        <Layout
          className="site-layout transition-all delay-75 "
          style={collapsed ? { marginLeft: 80 } : { marginLeft: 250 }}
        >
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
