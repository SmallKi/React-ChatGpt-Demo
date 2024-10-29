"use client";
import Button from "@/components/common/Button";
import { useAppContext } from "@/store/AppContext";
import { HiPlus } from "react-icons/hi";
import { LuPanelRightClose } from "react-icons/lu";

const Menubar = () => {
  const { dispatch } = useAppContext();
  function handleNavClose(): void {
    dispatch({ type: "SET_NAV_OPEN", payload: false });
  }

  return (
    <div className="flex gap-2 justify-between flex-shrink-0">
      <Button icon={HiPlus} variant="outline" className="flex-1 flex-shrink-0">
        创建对话1
      </Button>
      <Button icon={LuPanelRightClose} onClick={handleNavClose} />
    </div>
  );
};

export default Menubar;
