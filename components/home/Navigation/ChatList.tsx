"use client";
import { useAppContext } from "@/store/AppContext";
import { Chat } from "@/types/chat";
import { groupChatListByTime } from "@/utils/chat";
import React, { useMemo, useState } from "react";
import ChatNavLabel from "./ChatNavLabel";

const ChatList = () => {
  const [chatList] = useState<Chat[]>([
    {
      id: "1",
      title: "Rect 入门实战",
      updateTime: Date.now(),
    },
    {
      id: "2",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "3",
      title: "Smallk的小课堂",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "4",
      title: "Rect 入门实战",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "5",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "6",
      title: "Smallk的小课堂",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "7",
      title: "Rect 入门实战",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "8",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() + 1,
    },
    {
      id: "9",
      title: "Smallk的小课堂",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "10",
      title: "Rect 入门实战",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "11",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "12",
      title: "Smallk的小课堂",
      updateTime: Date.now() - 24 * 60 * 60 * 5 * 1000,
    },
    {
      id: "13",
      title: "Rect 入门实战",
      updateTime: Date.now(),
    },
    {
      id: "14",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() + 1,
    },
    {
      id: "15",
      title: "Smallk的小课堂",
      updateTime: Date.now() + 2,
    },
    {
      id: "16",
      title: "Rect 入门实战",
      updateTime: Date.now(),
    },
    {
      id: "17",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() + 1,
    },
    {
      id: "18",
      title: "Smallk的小课堂",
      updateTime: Date.now() + 2,
    },
    {
      id: "19",
      title: "Rect 入门实战",
      updateTime: Date.now(),
    },
    {
      id: "20",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() + 1,
    },
    {
      id: "21",
      title: "Smallk的小课堂",
      updateTime: Date.now() + 2,
    },
    {
      id: "22",
      title: "Rect 入门实战",
      updateTime: Date.now(),
    },
    {
      id: "23",
      title: "如何使用Nextjs创建React项目",
      updateTime: Date.now() - 10000000,
    },
    {
      id: "24",
      title: "Smallk的小课堂",
      updateTime: Date.now() - 1000000000,
    },
  ]);

  const chatListGroups = useMemo(() => {
    return groupChatListByTime(chatList);
  }, [chatList]);

  const {
    state: { selectedChatId },
    dispatch,
  } = useAppContext();

  const handleChangeSelectedId = React.useMemo(
    () => (id: string) => {
      return () => {
        dispatch({ type: "SET_SELECTED_CHAT", payload: id });
      };
    },
    [dispatch]
  );
  return (
    <div className="flex flex-col gap-0 mt-5 overflow-y-auto mb-7">
      <ul>
        {chatListGroups.map(([date, chats]) => {
          return (
            <div key={date}>
              <div className="sticky top-0 text-gray-500 z-10 bg-gray-900 p-3 text-sm">
                {date}
              </div>
              {chats.map((chat) => (
                <ChatNavLabel
                  key={chat.id}
                  item={chat}
                  onClick={handleChangeSelectedId(chat.id)}
                  selected={selectedChatId === chat.id}
                />
              ))}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;
