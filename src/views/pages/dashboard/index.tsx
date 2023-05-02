import { Space } from "antd";
import React from "react";
import Card from "../../../components/card";
import Container from "../../../components/containers";
import OptionalLayout from "../../../components/layouts/optionalLayout";
import { MoreOutlined } from "@ant-design/icons";
import faker from "@faker-js/faker";
import image1 from "../../../assets/images/images1.png";

import { useState } from "react";
import TabContainer from "../../../components/tab";
import CardPaid from "../../../components/card/card-paid";

export default function Dashboard() {
  interface IMock {
    name: string;
    amount: string | number;
    icon: React.ReactNode;
    className?: string;
  }

  interface IPaid {
    name: string;
    amount: string | number;
    image: string;
  }

  const Usermocks: Array<IMock> = [
    { name: "user", amount: 12, icon: <MoreOutlined /> },
    { name: "frontend developer", amount: 12, icon: <MoreOutlined /> },
    { name: "backend developer", amount: 12, icon: <MoreOutlined /> },
    { name: "paid", amount: 12, icon: <MoreOutlined /> },
  ];

  const Paidmocks: Array<IPaid> = [
    { name: "Thanawat", amount: 12, image: image1 },
    { name: "Thanawat", amount: 12, image: "" },
    { name: "Thanawat", amount: 12, image: "" },
  ];

  return (
    <Container className="p-5">
      {/* Card */}
      <OptionalLayout
        items={Usermocks}
        className="grid lg:gap-x-5 lg:grid-cols-4 content-center place-content-center "
        renderItem={({ item, key }: { item: IMock; key: string | number }) => {
          return (
            <Card name={item.name} amount={item.amount} icon={item.icon} />
          );
        }}
      />
      {/* Dashboard */}
      <TabContainer />
      <OptionalLayout
        items={Paidmocks}
        className="grid lg:gap-x-10 lg:grid-cols-3"
        renderItem={({ item, key }: { item: IPaid; key: string | number }) => {
          return (
            <CardPaid
              image={item.image}
              name={item.name}
              amount={item.amount}
            />
          );
        }}
      />
      {/* User Table */}
    </Container>
  );
}
