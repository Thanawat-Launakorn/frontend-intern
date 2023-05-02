export const projectConfig = {
  projectName: "Frontend Intern",
  projectDescription: "",
  favicon: "/favicon.ico",

  baseURL: import.meta.env.REACT_APP_API_SERVICE || "http://localhost:3001",
  apiVersion: import.meta.env.REACT_APP_API_VERSION || "/api",
};
export default projectConfig;
