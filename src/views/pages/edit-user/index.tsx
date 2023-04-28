import { Button, Form, Input } from "antd";
import EditForm from "../../../components/form/edit-user-form";
import layout from "antd/es/layout/layout";
import Container from "../../../components/containers";
import * as Api from "../../../service/Api/api";

const BASE_URL = "http://192.168.2.62:3001/";

export default function EditUser() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

//   const handleEdit = async (id: string) => {
//     try {
//       await Api.update(Number(id), BASE_URL);
//       window.location.reload();
//     } catch (err) {
//       alert(err);
//     }
//   };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 1000 }}
      validateMessages={validateMessages}
      className=""
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "Position"]} label="Position">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "Phone"]} label="Phone">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
        className=" m-10"
      >
        <button className="">Submit</button>
      </Form.Item>
    </Form>
  );
}
