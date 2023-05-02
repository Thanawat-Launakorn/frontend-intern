import projectConfig from "../../config/project.config";

export const endpoint = {
  auth: {
    signIn: `${projectConfig.baseURL}/create/user`,
    signOut: `${projectConfig.baseURL}`,
    getUser: `${projectConfig.baseURL}`,
  },
};
