import { Chat } from "@/types/chat";

const groupChatListByTime = (chatList: Chat[]) => {
  const nowTime = new Date();
  const sortedChat = chatList.sort((a, b) => -a.updateTime + b.updateTime);
  // 针对时间排序后的列表进行分组
  // 7天内 30天内 某月 ..
  const chatListMap = new Map<string, Chat[]>();
  for (let i = 0; i < sortedChat.length; i++) {
    const chat = sortedChat[i];
    const chatDate = new Date(chat.updateTime);
    let groupKey = "";
    const timeIntervel = nowTime.getTime() - chat.updateTime;

    if (
      `${chatDate.getFullYear()}-${chatDate.getMonth()}-${chatDate.getDate()}` ===
      `${nowTime.getFullYear()}-${nowTime.getMonth()}-${nowTime.getDate()}`
    ) {
      groupKey = "今天";
    } else if (timeIntervel < 7 * 24 * 60 * 60 * 1000) {
      groupKey = "最近7天";
    } else if (timeIntervel < 30 * 24 * 60 * 60 * 1000) {
      groupKey = "最近30天";
    } else if (chatDate.getFullYear() === nowTime.getFullYear()) {
      groupKey = chatDate.getMonth() + 1 + "月";
    } else {
      groupKey = chatDate.getFullYear() + "年";
    }

    const list = chatListMap.get(groupKey);
    if (list) {
      list.push(chat);
    } else {
      chatListMap.set(groupKey, [chat]);
    }
  }

  const ret: [string, Chat[]][] = [];
  for (const [key, value] of chatListMap) {
    ret.push([key, value]);
  }
  return ret;
};

export { groupChatListByTime };
