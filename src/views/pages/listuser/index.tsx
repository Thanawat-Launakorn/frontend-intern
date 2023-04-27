import { Avatar, Button, Input, Space, Table, Tag } from "antd";
import Container from "../../../components/containers";
import "./listuser.css";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import Search from "antd/es/input/Search";
import IUser, { IUserTable } from "../../../models/IUser";
import * as Api from "../../../service/Api/api";
import { EditOutlined, UserDeleteOutlined } from "@ant-design/icons";


function Listuser() {
  const onSearch = (value: string) => console.log(value);
  const [getData, setData] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await Api.getUser();
        console.log(data);
        setData(data);
      } catch (err) {
        alert("err");
      }
    })();
  }, []);

  const dataTable = getData.map((item: IUser) => {
    return {
      ...item,
      columnName: { name: item.name, img: item.img, email: item.email },

      social: {
        tel: item.tel,
      },
    };
  });

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "columnName",
      key: "columnName",
      align: "center",

      render: (_, rc) => (
        <div className="flex items-center">
          <div className="">
            <Avatar src={rc.email} />
          </div>
          <div className="mx-2"></div>
          <div className="flex flex-col items-start">
            <h3 className=" text-red-500 ">{rc.name}</h3>
            <p>{rc.email}</p>
          </div>
        </div>
      ),
    },

    {
      title: "Position",
      key: "position",
      dataIndex: "position",
      align: "center",
      render: (_, rc) => (
        <>
          <h3 className=" text-red-500">{rc.position.position}</h3>
        </>
      ),
    },

    {
      title: "",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" className="bg-blue-300">
            Edit
          </Button>
          <Button id="delete-button" type="primary" className="bg-slate-900 ">
            <DeleteButton />
          </Button>
        </Space>
      ),
    },
  ];

  function DeleteButton() {
    const [isClicked, setIsClicked] = useState(false);

    function handleButtonClick() {
      setIsClicked(true);
      console.log("Delete button clicked!");
    }

    return (
      <button id="delete-button" onClick={handleButtonClick}>
        {isClicked ? "Delete" : "Delete"}
      </button>
    );
  }

  return (
    <Container>
      <div className="flex flex-col">
        <div className="mx-20 ">
          <Search
            placeholder="search"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>

        <div className=" ">
          <Table
            className="hidden lg:block"
            columns={columns}
            dataSource={dataTable}
          />
        </div>
      </div>
    </Container>
  );
}
export default Listuser;
