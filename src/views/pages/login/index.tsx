import React from "react";

import { Typography, Form, Input, Space, Col, Row } from "antd";
import Container from "../../../components/containers";
import rabbit from "../../../assets/images/rabbit.png";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();
  return (
    <Container className="grid justify-center">
      <Space className="grid grid-cols-1 lg:grid-cols-[350px_auto] justify-items-center rounded-lg shadow-lg bg-white px-10 my-20 ">
        <div className="">
          <Typography.Title className="">Sign in</Typography.Title>
          <Typography.Text className="text-gray-500 font-normal">
            Enter your email and password to sign in
          </Typography.Text>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
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
              rules={[{ required: true, message: "Please input your email!" }]}
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
              className="bg-pink-600 text-white hover:bg-blue-600"
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
          <img
            src={rabbit}
            alt="rabbit-img"
            className="object-fit doll-animation"
          />
        </div>
      </Space>
    </Container>
  );
}
