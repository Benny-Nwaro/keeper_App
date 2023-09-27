import axios from "axios";

// eslint-disable-next-line no-undef
const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/`;
//StaffRegister

const registerStaffEndPoint = async (userData) => {
  const response = await axios.post(API_URL + "add-staff", userData);
  return response.data;
};

//UserLogin

const loginService = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};
//logout user

const logoutService = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

const authServices = {
  registerStaffEndPoint,
  loginService,
  logoutService,
};
export default authServices;
