import { Router } from "express";

import { testRoute, addStaff, getCompanyPositions, addCustomer } from "./controller.js";

const router = Router();

router.get("/", testRoute);
router.get("/all-positions", getCompanyPositions);
router.post("/add-staff", addStaff);
router.post("/add-customer", addCustomer);

export default router;
