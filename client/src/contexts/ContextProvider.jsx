import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export { NavContext };

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
// eslint-disable-next-line react/prop-types
export const NavContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentUser, setCurrentUser] = useState([]);



  
  const getCurrentUser = () => {
    setCurrentUser(JSON.parse(localStorage.getItem("user_data")));
    
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user_data");
  };
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <NavContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        currentUser,
        getCurrentUser,
        setCurrentUser,
        logout,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
export const useMyStateNav = () => useContext(NavContext);
