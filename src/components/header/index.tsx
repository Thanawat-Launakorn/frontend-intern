import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { Avatar, Layout, Space, theme } from "antd";
import {
  UserOutlined,
  SettingFilled,
  BulbFilled,
  BulbOutlined,
} from "@ant-design/icons";
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
  console.log("isDark", useTheme);

  return (
    <Header
      style={{ padding: 0 }}
      className="shadow-lg bg-white dark:bg-secondary border"
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
            <Space direction="vertical">
              <Space wrap>
                <button
                  type="button"
                  className="text-xl rounded-lg p-2.5 pt-0 m-2.5 border shadow-sm"
                  onClick={() => {
                    setTheme && setTheme(isDark ? "light" : "dark");
                  }}
                >
                  {isDark ? (
                    <>
                      <BulbFilled />
                    </>
                  ) : (
                    <>
                      <BulbOutlined />
                    </>
                  )}
                </button>

                <Avatar
                  icon={<UserOutlined className="object-cover" />}
                  size="large"
                  className="bg-gray-300"
                />

                <SettingFilled
                  className="ml-3 text-lg cursor-pointer"
                  onClick={() => setIsToggle(!props)}
                />
              </Space>
            </Space>
          </div>
        </div>
      </div>
    </Header>
  );
}
