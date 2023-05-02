import React from "react";
import type { RouteObject } from "react-router-dom";
export interface IRouteCustom extends Omit<RouteObject, "children"> {
  keyName?: string;
  children?: IRouteCustom[];
  requireAuth?: boolean;
  element?: React.ReactNode;
}

export interface IRoute {
  keyName?: string;
  index?: boolean;
  path?: string;
  element?: React.ReactNode;
}
