import { Typography } from "antd";
import React from "react";

type Props = {
  image: string;
  name: string;
  amount: string | number;
};

export default function CardPaid({ image, amount, name }: Props) {
  return (
    <div className="flex flex-col rounded-b-lg shadow-lg">
      <div className="">
        <img
          src={image}
          alt="image-profile"
          className="object-cover w-full h-40 rounded-t-lg"
        />
      </div>
      <div>
        <Typography.Title>{amount}</Typography.Title>
        <Typography.Text>{name}</Typography.Text>
      </div>
    </div>
  );
}
