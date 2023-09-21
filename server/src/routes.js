import { Router } from "express";

import {
  testRoute,
  addStaff,
  getCompanyPositions,
  addCustomer,
  addOrders,
  getAllOrders,
  getAllStaffs,
  getAllCustomers,
  getTotalCounts,
  login,
  getStaffData,
  getSingleStaffData,
  getAllCustomersAndOrdersData,
  getSingleCustomerOrderData,
} from "./controller.js";
import verifyToken from "./verifyToken.js";

const router = Router();

router.get("/", verifyToken, testRoute);
router.get("/all-positions", verifyToken, getCompanyPositions);
router.post("/add-staff", verifyToken, addStaff);
router.post("/add-customer", verifyToken, addCustomer);
router.post("/add-order", verifyToken, addOrders);
router.get("/all-orders", verifyToken, getAllOrders);

router.get("/all-staffs", verifyToken, getAllStaffs);
router.get("/all-customers", verifyToken, getAllCustomers);
router.get("/all-counts", verifyToken, getTotalCounts);
router.post("/login", login);
router.get("/all-staff-data", verifyToken, getStaffData);
router.get("/staff-profile", verifyToken, getSingleStaffData);
router.get("/all-customers-orders", verifyToken, getAllCustomersAndOrdersData);
router.get("/customer-order/:id", verifyToken, getSingleCustomerOrderData);

export default router;
