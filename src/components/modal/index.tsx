import React from "react";
import crossX from "../../assets/svg/crossX.svg";
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({ isVisible, children, className }: ModalProps) {
  const [isClose, setIsClose] = React.useState(isVisible);
  return !isClose ? null : (
    <div className="fixed inset-0 bg-black bg-opacity-25  flex justify-end items-st">
      <div className={`bg-white ${className}`}>
        <div className="relative">
          <img src={crossX} alt="image-crossX" />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}
