import { Form, Input, Space, Typography } from "antd";
import React from "react";
import Button from "../../../components/button";
import Container from "../../../components/containers";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [isMouseOver, setMouseOver] = React.useState(false);

  const navigate = useNavigate();
  return (
    <Container className="grid justify-center">
      <Space className="flex flex-col justify-between">
        <div className="grid justify-center bg-white rounded-lg shadow-lg py-5 px-12 my-36">
          <Typography.Title className="m-0">Register</Typography.Title>
          <Typography.Text className="text-gray-500 font-normal mb-5">
            Create your account
          </Typography.Text>
          <Form
            name="basic"
            wrapperCol={{ span: 24 }}
            style={{ width: "500px" }}
            initialValues={{ remember: true }}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              label=""
              name="username"
              rules={
                [
                  // { required: true, message: "Please input your username!" },
                ]
              }
            >
              <div className="flex ">
                <span className="bg-gray-200 px-1.5 py-1 rounded-l-lg">
                  <UserOutlined className="text-xl p-2" />
                </span>
                <Input
                  placeholder="Username"
                  className="rounded-r-lg rounded-l-none"
                />
              </div>
            </Form.Item>

            <Form.Item
              label=""
              name="email"
              // rules={[{ required: true, message: "Please input your email!" }]}
            >
              <div className="flex">
                <span className="bg-gray-200 px-1.5 py-1 rounded-l-lg">
                  <MailOutlined className="text-xl p-2" />
                </span>
                <Input
                  placeholder="Email"
                  className="rounded-r-lg rounded-l-none"
                />
              </div>
            </Form.Item>

            <Form.Item
              label=""
              name="password"
              rules={
                [
                  // { required: true, message: "Please input your username!" },
                ]
              }
            >
              <div className="flex">
                <span className="bg-gray-200 px-1.5 py-1 rounded-l-lg">
                  <LockOutlined className="text-xl p-2" />
                </span>
                <Input
                  placeholder="Password"
                  className="rounded-r-lg rounded-l-none"
                />
              </div>
            </Form.Item>

            <Form.Item
              label=""
              name="confirm password"
              rules={
                [
                  // { required: true, message: "Please input your username!" },
                ]
              }
            >
              <div className="flex">
                <span className="bg-gray-200 px-1.5 py-1 rounded-l-lg">
                  <LockOutlined className="text-xl p-2" />
                </span>
                <Input
                  placeholder="Confirm password"
                  className="rounded-r-lg rounded-l-none"
                />
              </div>
            </Form.Item>
            <Button
              value="sign in"
              className={
                isMouseOver
                  ? "bg-white text-blue-700 hover:bg-blue-500 drop-shadow-md"
                  : "bg-blue-700 text-white hover:bg-blue-500 drop-shadow-md"
              }
              onClick={() => {}}
            />
            <div className="my-5"></div>
          </Form>
          <Button
            value="register"
            className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white"
            onClick={() => navigate("/login")}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          />
        </div>
      </Space>
    </Container>
  );
}
