import { Form, Input, Space, Typography } from "antd";
import React from "react";
import Button from "../../../components/button";
import Container from "../../../components/containers";

import { useNavigate } from "react-router-dom";
import AppFooter from "../../../components/footer";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <Container className="sm:px-20 lg:px-32">
        <Space className="grid grid-cols-1 lg:grid-cols-[300px_auto] place-items-center">
          <div className="">
            <Typography.Title className="">Sign in</Typography.Title>
            <Typography.Text className="text-gray-500 font-normal">
              Enter your email and password to sign in
            </Typography.Text>
            <Form
              name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Button
                value="sign in"
                className="bg-blue-700 text-white hover:bg-blue-500 drop-shadow-md"
                onClick={() => {}}
              />
              <div className="my-5"></div>
            </Form>
            <Button
              value="register"
              className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white"
              onClick={() => navigate("/login")}
            />
          </div>
          <div className="justify-self-end">
            <img src={""} alt="rabbit-img" className="object-fit" />
          </div>
        </Space>
      </Container>
      <AppFooter />
    </div>
  );
}
