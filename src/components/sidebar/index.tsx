import React, { useContext } from "react";
import calendar from "../../assets/images/calendar.png";
import type { MenuProps } from "rc-menu";
import "./sidebar.css";
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  ExportOutlined,
  UserAddOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
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
  const { useTheme, setTheme } = useContext(ThemeContext);
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Dashboard", "1", <DashboardOutlined />),
    getItem("Form", "sub1", <FormOutlined />, [
      getItem("Login", "5", <ExportOutlined />),
      getItem("Register", "6", <UserAddOutlined />),
      getItem("Submenu", "sub2", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("List", "sub3", <TableOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem("Calendar", "sub4", <CalendarOutlined />, [
      getItem("Calendar", "13"),
    ]),
  ];

  const changeRoute: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        navigate("/Dashboard");
        break;
      case "5":
        navigate("/Login");
        break;
      case "6":
        navigate("/Register");
        break;
      case "13":
        navigate("/Calendar");
        break;

      default:
        alert("cant not find page");
        break;
    }
  };

  return (
    <Sider
      trigger={trigger}
      collapsible
      collapsed={collapsed}
      className="shadow-lg"
      width={250}
      theme={useTheme === "dark" ? "dark" : "light"}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        className="logo bg-transparent flex justify-between items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={calendar}
          alt="calendar-image"
          className="object-fill h-10 w-10 transition-all delay-75 translate-x-1"
        />
        <div className={collapsed ? "hidden" : ""}>
          <div className="lg:-translate-x-1">
            <h1 className="text-black text-xl  tracking-wide side-bar-fadein font-bold dark:text-white ">
              Booking System
            </h1>
          </div>
        </div>
      </div>

      <Menu
        theme={useTheme === "dark" ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={[]}
        items={items}
        onClick={changeRoute}
      />
    </Sider>
  );
}
