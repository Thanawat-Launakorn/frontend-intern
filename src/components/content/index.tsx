import React from "react";
import crossX from "../../assets/svg/crossX.svg";

import {
  Button,
  Drawer,
  DrawerProps,
  Layout,
  Radio,
  RadioChangeEvent,
} from "antd";
import { routes } from "../../routes";
import { Route, Routes } from "react-router-dom";
import Container from "../containers";
import Modal from "../modal";
import ThemeProvider from "../../context/ThemeProvider";

const { Content } = Layout;
type ContentProps = {
  toggle?: () => {};
  isOpen: boolean;
};

export default function AppContent({ isOpen }: ContentProps) {
  const [placement, setPlacement] =
    React.useState<DrawerProps["placement"]>("left");
  const [open, setOpen] = React.useState(isOpen);

  console.log(`open : ${open}`);

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    // return setOpen(isOpen);
  }, []);
  return (
    <Content>
      <Container>
        <Routes>
          {routes.map(({ path, element }, idx) => {
            return <Route key={idx} path={path} element={element} />;
          })}
        </Routes>
        <Drawer
          title="Basic Drawer"
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div className="relative">
            <img
              src={crossX}
              alt="image-crossX"
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </Drawer>
      </Container>
    </Content>
  );
}
