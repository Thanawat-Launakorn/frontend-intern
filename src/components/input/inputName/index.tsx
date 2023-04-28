import React from "react";
import { Input } from "antd";
type InputTitleProps = {
  type: string;
  className?: string;
  placeholder?: string;
  name: string;
  value?: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
};
export default function InputName({
  type,
  className,
  placeholder,
  name,
  value,
  onChange,
  autoComplete,
}: InputTitleProps) {
  return (
    <div className="input-name">
      <Input
        {...{
          type,
          className,
          placeholder,
          name,
          value,
          onChange,
          autoComplete,
        }}
      />
    </div>
  );
}