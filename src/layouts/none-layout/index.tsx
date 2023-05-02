import React from "react";
import { Outlet } from "react-router-dom";
type Props = {};

export default function NoLayout({}: Props) {
  return (
    <div>
      NoLayout <Outlet />
    </div>
  );
}
