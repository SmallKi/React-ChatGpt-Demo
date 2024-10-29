"use client";
import Button from "@/components/common/Button";
import { useAppContext } from "@/store/AppContext";
import { LuPanelRightClose } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToolBar = () => {
  const {
    state: { theme },
    dispatch,
  } = useAppContext();
  function handleNavOpen(): void {
    dispatch({ type: "SET_NAV_OPEN", payload: true });
  }

  function handleChangeTheme(): void {
    dispatch({
      type: "SET_THEME",
      payload: theme === "dark" ? "light" : "dark",
    });
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex justify-between flex-shrink-0">
      <Button
        icon={theme === "dark" ? MdLightMode : MdDarkMode}
        onClick={handleChangeTheme}
      ></Button>
      <Button icon={LuPanelRightClose} onClick={handleNavOpen} />
    </div>
  );
};

export default ToolBar;
