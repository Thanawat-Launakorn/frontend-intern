import { Space, Typography } from "antd";
import React from "react";
type Props = {
  name: string;
  amount: string | number;
  icon: React.ReactNode;
};
export default function Card({ name, amount, icon }: Props) {
  return (
    <div className="rounded-lg shadow-md bg-white dark:bg-red-600">
      <div className="flex justify-between ">
        <Typography.Title>{amount}</Typography.Title>
        <Typography.Text className="text-xl">{icon}</Typography.Text>
      </div>
      <Typography.Title level={4}>{name}</Typography.Title>
    </div>
  );
}
