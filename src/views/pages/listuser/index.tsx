import { Avatar, Button, Input, Modal, Space, Table, Tag } from "antd";
import Container from "../../../components/containers";
import "./listuser.css";
import { ColumnsType } from "antd/es/table";
import React, { Fragment, useState } from "react";
import Search from "antd/es/input/Search";
import IUser, { IUserTable } from "../../../models/IUser";
import * as Api from "../../../service/Api/api";
import { useNavigate } from "react-router-dom";
import EditUser from "../edit-user";
function Listuser() {
  const onSearch = (value: string) => console.log(value);
  const [getData, setData] = React.useState<IUser[]>([]);
  const [name, setName] = React.useState<IUser[]>([]);
  const [inputUser, setInputUser] = React.useState({} as IUser);

  const BASE_URL = "http://192.168.2.62:3001/";
  const navigate = useNavigate();


  const handleEdit = (id: string | number) => {
      navigate(`/edit-user/${id}`)
  }
  const handleDelete = async (id: string) => {
    try {
      await Api.Delete(Number(id), BASE_URL);
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    {
      setInputUser((prevItem: any) => {
        return { ...prevItem, [e.target.name]: e.target.value };
      });
    }
  };

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

  const dataTable = getData.map((item) => {
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
      dataIndex: "",
      key: "",
      align: "center",

      render: (item) => (
        <div className="flex items-center">
          <div className="">
            <Avatar src={item.email} className="" />
          </div>
          <div className="mx-2"></div>
          <div className="flex flex-col items-start">
            <h3 className=" text-blue-700 ">{item.name} <span className="bg-blue-300">{item.id}</span></h3>
            <p>{item.email}</p>
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
          <h2 className=" text-stone-600">{rc.position.position}</h2>
        </>
      ),
    },
    {
      title: "Phone",
      key: "tel",
      dataIndex: "tel",
      align: "center",
      render: (_, rc) => (
        <>
          <h2 className=" text-stone-600">{rc.tel}</h2>
        </>
      ),
    },

    {
      title: "Actions",
      key: "action",
      align: "center",
      render: (_, rc) => (
        <Space size="middle">
          <div>
            <button
              onClick={() => handleEdit(rc.id)}
              className="text-red-500"
            >
              Edit
            </button>
          </div>

          <button
            // type="primary"
            className=" text-red-600"
            onClick={() => handleDelete(rc.id)}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <div className="flex flex-col">
        <div className=" ">
          <div className="mx-20 ">
            <Search
              placeholder="search"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </div>
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