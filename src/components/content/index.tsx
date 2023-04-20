import React from "react";
import { Layout } from "antd";
import { routes } from "../../routes";
import { Route, Routes } from "react-router-dom";
const { Content } = Layout;
type Props = {};

export default function AppContent({}: Props) {
  return (
    <Content>
      <Routes>
        {routes.map(({ path, element }, idx) => {
          return <Route key={idx} path={path} element={element} />;
        })}
      </Routes>
    </Content>
  );
}
