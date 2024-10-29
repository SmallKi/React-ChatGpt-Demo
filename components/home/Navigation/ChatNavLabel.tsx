"use client";
import { Chat } from "@/types/chat";
import { FC, memo, useEffect, useState } from "react";
import {
  AiFillDelete,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { PiChatBold } from "react-icons/pi";

const ChatNavLabel: FC<{
  item: Chat;
  onClick: () => void;
  selected: boolean;
}> = ({ item, onClick, selected }) => {
  console.log("重新渲染");

  const [editing, setEditing] = useState(false);
  const [deleting, setdeleting] = useState(false);
  useEffect(() => {
    setEditing(false);
    setdeleting(false);
  }, [selected]);
  return (
    <li
      key={item.id}
      className={`group mt-2 flex gap-2 items-center justify-between p-3 rounded cursor-pointer hover:bg-gray-700 ${
        selected ? "bg-gray-700" : ""
      }`}
      onClick={onClick}
    >
      <div>
        {deleting ? <AiFillDelete></AiFillDelete> : <PiChatBold></PiChatBold>}
      </div>
      {editing ? (
        <input
          className="flex-1 outline-none bg-transparent min-w-0"
          autoFocus
          defaultValue={item.title}
          onBlur={() => setEditing(false)}
        />
      ) : (
        <div className="relative flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {item.title}
          <span
            className={`absolute right-0 w-20 bg-gradient-to-l inset-y-0
                group-hover:from-gray-700
            ${selected ? "from-gray-700" : "from-gray-900"}`}
          ></span>
        </div>
      )}

      {selected && (
        <div className="flex gap-2">
          {editing || deleting ? (
            <>
              <button
                className="hover:text-white"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  console.log("com");
                  if (editing) {
                    console.log("edit com");
                  } else if (deleting) {
                    console.log("delte com");
                  }
                  setEditing(false);
                  setdeleting(false);
                }}
              >
                <AiOutlineCheck />
              </button>
              <button
                className="hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setdeleting(false);
                  setEditing(false);
                }}
              >
                <AiOutlineClose />
              </button>
            </>
          ) : (
            <>
              <button
                className="hover:text-white"
                onClick={(e) => {
                  setEditing(true);
                  e.stopPropagation();
                }}
              >
                <AiOutlineEdit />
              </button>
              <button
                className="hover:text-white"
                onClick={(e) => {
                  setdeleting(true);
                  e.stopPropagation();
                }}
              >
                <AiOutlineDelete />
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default memo(ChatNavLabel);
