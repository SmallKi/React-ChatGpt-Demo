"use client";
import { useAppContext } from "@/store/AppContext";
import { ComponentPropsWithRef, FC } from "react";
import ChatList from "./ChatList";
import Menubar from "./Menubar";
import ToolBar from "./ToolBar";

const Navigation: FC<ComponentPropsWithRef<"nav">> = ({
  className,
  ...props
}) => {
  const state = useAppContext().state;
  return (
    <nav
      className={`flex flex-col relative overflow-hidden box-border h-full transition-all bg-gray-900 text-gray-300 ${
        state.navOpen ? "w-[260px] p-2" : "w-0"
      } ${className}`}
      {...props}
    >
      <Menubar></Menubar>
      <ChatList></ChatList>
      <ToolBar />
    </nav>
  );
};

export default Navigation;
