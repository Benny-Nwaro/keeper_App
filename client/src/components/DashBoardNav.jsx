import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { avatar } from "../assets/images";
// import { Cart, Chat, Notification, UserProfile } from ".";
import { useMyStateNav } from "../contexts/ContextProvider";
import { Tooltip } from "@mantine/core";
import PropTypes from "prop-types";
import { useEffect } from "react";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <Tooltip
      label={title}
      color="#55555564"
      position="bottom"
      withArrow
      transitionProps={{ transition: "scale", duration: 300 }}
    >
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </Tooltip>
  );
};

export const DashBoardNav = () => {
  const { setActiveMenu, handleClick, screenSize, setScreenSize } =
    useMyStateNav();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Store"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#D70303"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification3Line />}
        />
        <Tooltip
          label="Profile"
          position="bottom"
          color="#55555564"
          withArrow
          transitionProps={{ transition: "scale", duration: 300 }}
        >
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14 ">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Favour
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        {/* {isClicked.cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </div>
    </div>
  );
};
NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  customFunc: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
  dotColor: PropTypes.string,
};
