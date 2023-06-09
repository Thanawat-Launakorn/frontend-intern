import React from "react";

type ButtonType = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  type?: any | string;
};
export default function Button({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value,
  type,
}: ButtonType) {
  return (
    <div>
      <button
        {...{ onClick, onMouseEnter, onMouseLeave, type }}
        className={`}
w-full uppercase text-sm lg:text-lg py-1.5 font-bold transition-all delay-75 ${className}`}
      >
        {value}
      </button>
    </div>
  );
}
