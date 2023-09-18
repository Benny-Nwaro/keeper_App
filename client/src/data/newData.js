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
    title: "Expenses",
    links: [
      {
        name: "orders",
        icon: AiOutlineShoppingCart,
      },
      {
        name: "payments",
        icon: IoMdContacts,
      },
      {
        name: "salaries",
        icon: RiContactsLine,
      },
    ],
  },
  {
    title: "Users",
    links: [
      {
        name: "customers",
        icon: AiOutlineCalendar,
      },
      {
        name: "clients",
        icon: BsKanban,
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
      
      {
        name: "store",
        icon: AiOutlineAreaChart,
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        name: "settings",
        icon: AiOutlineBarChart,
      },
      {
        name: "reports",
        icon: FiPieChart,
      },
      {
        name: "staffs",
        icon: RiStockLine,
      },
      {
        name: "locations",
        icon: BsBarChart,
      },
      {
        name: "emails",
        icon: GiLouvrePyramid,
      },
      {
        name: "notifications",
        icon: AiOutlineBarChart,
      },
      {
        name: "feedbacks",
        icon: RiStockLine,
      },
    ],
  },
];
