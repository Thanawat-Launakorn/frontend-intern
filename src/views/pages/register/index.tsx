import { Form, Input, Space, Typography } from "antd";
import React from "react";
import Button from "../../../components/button";
import Container from "../../../components/containers";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import * as Api from "../../../service/Api/auth/api";
export default function Register() {
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [form] = useForm();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [requireMessage, setRequiredMessage] = React.useState<any>();
  const [activeKey, setActiveKey] = React.useState<string>("");
  const navigate = useNavigate();

  const onRegisterSubmit = async () => {};

  const generateFields = (names: Array<string>, key: string) => {
    return names.map((e) => [e, key]);
  };

  const onFinishAccount = async () => {
    const names = ["email", "password", "confirmPassword"];
    const fields = generateFields(names, "memberInfo");

    try {
      await form.validateFields(fields);

      setLoading(true);
      const memberInfo = form.getFieldValue("memberInfo") || {};
      const { email, password, confirmPassword } = memberInfo;
      console.log(email);
      console.log(password);
      console.log(confirmPassword);

      // TODO:: Check duplicate email
      try {
        Api.POST_CHECK_EMAIL_UNUSE(email);
      } catch (error: any) {
        setRequiredMessage("* " + error?.errorMessage);
        setLoading(false);
        return;
      }

      // TODO:: Password is do not match
      const isNotMatchPassword = password !== confirmPassword;
      if (isNotMatchPassword) {
        setRequiredMessage("* รหัสผ่านไม่ตรงกัน ลองอีกครั้ง");
        setLoading(false);
        return;
      }

      // TODO:: Successfully
      setRequiredMessage(undefined);
      setActiveKey("information");
      setLoading(false);
    } catch (err) {
      return console.log(err);
    }
  };
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
            form={form}
            initialValues={{ remember: true }}
            autoComplete="off"
            size="large"
            layout="vertical"
            onFinish={onRegisterSubmit}
          >
            <Form.Item
              label=""
              name={["memberInfo", "email"]}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
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
              rules={[{ required: true, message: "Please input your email!" }]}
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
              name={["memberInfo", "password"]}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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
              name={["memberInfo", "confirmPassword"]}
              rules={[
                {
                  required: true,
                  message: `Please input your confirm password!`,
                },
              ]}
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
              value="submit"
              className={
                isMouseOver
                  ? "bg-white text-blue-700 hover:bg-blue-500 drop-shadow-md"
                  : "bg-blue-700 text-white hover:bg-blue-500 drop-shadow-md"
              }
              onClick={() => onFinishAccount()}
            />
            <div className="my-5"></div>
          </Form>
          <Button
            value="sigin"
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
