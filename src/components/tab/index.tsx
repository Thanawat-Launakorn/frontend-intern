"use client";
import React from "react";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import type { TabsProps } from "antd";
import UserGraph from "../chart/user";
import PaidGraph from "../chart/paid";

type Props = {};

const TabContainer = (props: Props) => {
  const onChange = (key: string) => {};
  const titleStyle = {
    fontFamily: "'Quicksand', sans-serif",
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="text-[#707070] hover:text-black text-lg font-semibold capitalize"
          style={titleStyle}
        >
          User
        </div>
      ),
      children: (
        <div>
          <UserGraph />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="text-[#707070] hover:text-black text-lg font-semibold capitalize"
          style={titleStyle}
        >
          Paid
        </div>
      ),
      children: (
        <div>
          <PaidGraph />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white w-full  mx-auto rounded-lg p-5 sm:p-10  break-all my-10 shadow-lg">
      <Tabs items={items} onChange={onChange} defaultActiveKey="1" />
    </div>
  );
};

export default TabContainer;
