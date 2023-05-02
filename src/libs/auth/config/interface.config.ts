export interface UserInfo {
  id: string;
  uuid: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  permission: UserPermission[];
}

export interface UserPermission {
  id: string;
  keyName: string;
  title_en: string;
  title_th: string;
  accessPermission: AccessPermissionType;
}

export type AccessPermissionType = {
  create: boolean;
  update: boolean;
  delete: boolean;
  viewers: boolean;
};

export interface Authentication {
  auth: boolean;
  token: Token;
}

export interface Token {
  accessToken?: string | null;
  refreshToken?: string | null;
}
