import axios from "axios";

import authHeader from "../auth-header";
const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/`;
const getAllCustomers = () => {
  
  return axios.get(API_URL + "all-customers-user-orders", {
    headers: authHeader(),
  });
};

const getAllStaffs = () => {
  return axios.get(API_URL + "all-staff-data", {
    headers: authHeader(),
  });
};

const getAllStaffsCustomerOrderCount = () => {
  return axios.get(API_URL + "all-counts", {
    headers: authHeader(),
  });
};

const getAllPermissions = () => {
  return axios.get(API_URL + "all-permission", {
    headers: authHeader(),
  });
};

const getAllPostions = () => {
  return axios.get(API_URL + "all-positions", {
    headers: authHeader(),
  });
};

const getUserProfile = () => {
  return axios.get(API_URL + "profile", {
    headers: authHeader(),
  });
};

const addNewStaff = (userData) => {
  return axios.post(API_URL + "add-staff", userData, {
    headers: authHeader(),
  });
};
const addCustomerNewCustomer = (userData) => {
  return axios.post(API_URL + "add-customer", userData, {
    headers: authHeader(),
  });
};
const createCustomerOrder = (userData) => {
  return axios.post(API_URL + "add-order", userData, {
    headers: authHeader(),
  });
};

export {
  getAllCustomers,
  getAllStaffs,
  getAllStaffsCustomerOrderCount,
  getAllPermissions,
  getAllPostions,
  getUserProfile,
  addNewStaff,
  addCustomerNewCustomer,
  createCustomerOrder,
};
