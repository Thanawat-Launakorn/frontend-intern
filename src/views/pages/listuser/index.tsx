import { Avatar, Button, Input, Space, Table, Tag } from "antd";
import Container from "../../../components/containers";
import "./listuser.css";
import { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Search from "antd/es/input/Search";
import axios from "axios";

("http://192.168.2.62:3001/user");

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

function Listuser() {
  interface DataType {
    key: string;
    name: string;
    age: number;
    email: string;
    tags: string[];
  }
  React.useEffect(() => {});

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      email: "erions@gmail.com",
      tags: ["Project manager"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      email: "gwpcmb@gmail.com",
      tags: ["forntend"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      email: "qwerty@gmail.com",
      tags: ["backend"],
    },
    {
      key: "4",
      name: "J gold",
      age: 23,
      email: "qwebofkty@gmail.com",
      tags: ["backend"],
    },
  ];

  // console.log(data);
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_, rc) => (
        <div>
          <div className="">
            <Avatar src="https://cdn.pixabay.com/photo/2022/09/30/12/56/cat-7489398__340.jpg" />
          </div>
          <div>
            <a className=" text-red-500">{rc.name}</a>
          </div>
        </div>
      ),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "left",
    },
    {
      title: "Position",
      key: "position",
      dataIndex: "tags",
      align: "center",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 8 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "gray";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
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

  const onSearch = (value: string) => console.log(value);

  return (
    <Container>
      <div className="flex flex-col">
        <div className="mx-20 ">
          <Search
            className=""
            placeholder="search"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>

        <div className="">
          <Table className="" columns={columns} dataSource={data} />
        </div>
      </div>
    </Container>
  );
}
export default Listuser;
// {record.name}
