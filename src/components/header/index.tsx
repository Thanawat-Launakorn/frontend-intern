import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { Avatar, Layout, theme } from "antd";
import { UserOutlined, SettingFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Header, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../context/ThemeProvider";
type AppHeaderProps = {
  collapsed: boolean;
  onClick: MouseEventHandler<HTMLSpanElement>;
  props: boolean;
};
export default function AppHeader({
  collapsed,
  onClick,
  props,
}: AppHeaderProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const [isToggle, setIsToggle] = React.useState(props);

  const { useTheme, setTheme } = React.useContext(ThemeContext);
  const isDark = useTheme === "dark";
  console.log(isDark);

  return (
    <Header
      style={{ padding: 0 }}
      className="shadow-sm bg-white dark:bg-gray-900"
    >
      <div className="flex items-center justify-between mr-5">
        <div className="hidden  sm:block">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: onClick,
            }
          )}
        </div>

        <div>
          <div className="flex items-center ">
            <button
              type="button"
              className="text-sm"
              onClick={() => {
                setTheme && setTheme(isDark ? "light" : "dark");
              }}
            >
              <i className="fas fa-moon mr-3"></i>
              <span className="font-normal">Dark Mode</span>
            </button>
            <Avatar icon={<UserOutlined />} size={30} />
            <h3
              className="capitalize mx-2 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              sign in
            </h3>
            <SettingFilled
              className="ml-3 text-lg cursor-pointer"
              onClick={() => setIsToggle(!props)}
            />
          </div>
        </div>
      </div>
    </Header>
  );
}
