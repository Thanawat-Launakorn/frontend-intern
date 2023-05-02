import { Authentication, UserInfo } from "./interface.config";

//------- User info --------//
export const userInfo: UserInfo = {
  id: "",
  role: "",
  uuid: "",
  email: "",
  firstName: "",
  lastName: "",
  permission: [
    {
      id: "01",
      keyName: "dashboard",
      title_en: "Dashboard",
      title_th: "แดชบอร์ด",
      accessPermission: {
        create: false,
        update: false,
        delete: false,
        viewers: true,
      },
    },
    {
      id: "02",
      keyName: "admin",
      title_en: "Admin",
      title_th: "แอดมิน",
      accessPermission: {
        create: false,
        update: false,
        delete: false,
        viewers: false,
      },
    },
  ],
};
//------- Authentication --------//
export const authentication: Authentication = {
  auth: false,
  token: {
    accessToken: undefined,
    refreshToken: undefined,
  },
};
