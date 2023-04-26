import React from "react";
import AppFooter from "../../../components/footer";

import { Typography, Form, Input, Space } from "antd";
import Container from "../../../components/containers";
import rabbit from "../../../assets/images/rabbit.png";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                className=""
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
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
                className="bg-blue-700 text-white hover:bg-blue-500"
                onClick={() => {}}
              />
              <div className="my-5"></div>
            </Form>
            <Button
              value="register"
              className="bg-white text-blue-700 border-2 border-blue-700 hover:bg-blue-700 hover:text-white"
              onClick={() => navigate("/register")}
            />
          </div>
          <div className="justify-self-end">
            <img src={rabbit} alt="rabbit-img" className="object-fit" />
          </div>
        </Space>
      </Container>
      <AppFooter />
    </div>
  );
}
