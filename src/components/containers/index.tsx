import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-black  ${className}`}>
      {children}
    </div>
  );
}
