import { Typography } from "antd";
import React from "react";

type Props = {
  image: string;
  name: string;
  amount: string | number;
};

export default function CardPaid({ image, amount, name }: Props) {
  return (
    <div>
      <div>
        <img src={image} alt="image-profile" />
      </div>
      <div>
        <Typography.Title>{amount}</Typography.Title>
        <Typography.Text>{name}</Typography.Text>
      </div>
    </div>
  );
}
