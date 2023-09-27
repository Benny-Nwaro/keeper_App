import axios from "axios";

// import authHeader from "../auth-header";
const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/`;
const login = (userData) => {
  return axios.post(API_URL + "login", userData);
};

export { login };
