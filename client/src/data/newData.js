import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiPieChart } from "react-icons/fi";
import { BsKanban, BsBarChart } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: FiShoppingBag,
      },
    ],
  },
  {
    title: "Home",
    links: [
      {
        name: "home",
        icon: FiShoppingBag,
      },
    ],
  },

  {
    title: "Customers",
    links: [
      {
        name: "orders",
        icon: AiOutlineShoppingCart,
      },
    ],
  },
 
  {
    title: "Measurements",
    links: [
      {
        name: "sewing",
        icon: AiOutlineStock,
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        name: "staffs",
        icon: RiStockLine,
      },
    
      {
        name: "feedbacks",
        icon: RiStockLine,
      },
    ],
  },
];
