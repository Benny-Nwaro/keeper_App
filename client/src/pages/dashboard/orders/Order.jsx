import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table3 } from "../../../components";
import { getAllCustomers } from "../../../services/staff/staff";

export const Order = () => {
  const [orders, setOrders] = useState([]);
  const [errMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    getAllCustomers()
      .then((response) => {
        setOrders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  }, []);
  if (errMessage) {
    return (
      <div className="w-full ">
        <p className="text-red-800 font-palanquin text-[34px] mx-10">
          {errMessage}
        </p>
      </div>
    );
  }
  if (!errMessage) {
    return (
      <div className="mt-[40px]">
        <Table3 orders={orders} />
      </div>
    );
  }
};
