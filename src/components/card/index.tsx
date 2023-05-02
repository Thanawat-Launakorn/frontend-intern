import { Space, Typography } from "antd";
import React from "react";
type Props = {
  name: string;
  amount: string | number;
  icon: React.ReactNode;
};
export default function Card({ name, amount, icon }: Props) {
  return (
    <div className="px-3 py-4 rounded-lg shadow-md bg-white hover:bg-secondary hover:text-white">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">{amount}</h2>
        <p className="text-xl">{icon}</p>
      </div>
      <h4 className="font-bold">{name}</h4>
    </div>
  );
}
