import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`h-full bg-gray-50 dark:bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}
