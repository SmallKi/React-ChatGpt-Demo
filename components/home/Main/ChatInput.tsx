import Button from "@/components/common/Button";
import { useAppContext } from "@/store/AppContext";
import { ChatRequest } from "@/types/api";
import { Message } from "@/types/chat";
import { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { HiRefresh, HiStop } from "react-icons/hi";
import { RiThunderstormsLine } from "react-icons/ri";
import TextArea from "react-textarea-autosize";
import { v4 as uuidV4 } from "uuid";
const ChatInput = () => {
	const {
		state: { streamingId, messageList },
		dispatch,
	} = useAppContext();
	const [currentMessage, setCurrentMessage] = useState("");

	// 停止状态
	const stopFlag = useRef(false);

	const resendMessage = () => {
		// 查看最后一个对话是否是
		if (
			messageList.length > 1 &&
			messageList[messageList.length - 1].role === "assistant" &&
			messageList[messageList.length - 2].role === "user"
		) {
			const userMessage = messageList[messageList.length - 2];
			dispatch({
				type: "REMOVE_MESSAGE",
				payload: messageList[messageList.length - 1].id,
			});
			doSend(userMessage);
		}
	};

	const doSend = async (message: Message) => {
		stopFlag.current = false;
		const respMessage: Message = {
			id: uuidV4(),
			content: "正在生成...",
			role: "assistant",
		};
		dispatch({ type: "ADD_MESSAGE", payload: respMessage });
		const req: ChatRequest = {
			msg: message.content,
			model: "deepseek",
		};
		dispatch({ type: "SET_STREAMING_ID", payload: respMessage.id });
		const abortController = new AbortController();
		const res = await fetch("http://localhost:3000/api/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req),
			signal: abortController.signal,
		});
		if (!res.ok) {
			console.log("error:", res.statusText);
			return;
		}
		const reader = await res.body?.getReader();
		if (!reader) {
			console.log("error on reader");
			return;
		}

		let currentContent = "";
		const decoder = new TextDecoder("utf-8");
		while (true) {
			if (stopFlag.current) {
				abortController.abort();
				break;
			}

			const content = await reader.read();
			currentContent += decoder.decode(content.value, { stream: true });
			dispatch({
				type: "UPDATE_MESSAGE",
				payload: { ...respMessage, content: currentContent },
			});
			if (content.done) {
				break;
			}
		}
		dispatch({ type: "SET_STREAMING_ID", payload: "" });
	};
	const sendChat = async (content: string) => {
		const message: Message = {
			id: uuidV4(),
			content,
			role: "user",
		};

		dispatch({ type: "ADD_MESSAGE", payload: message });

		doSend(message);
	};
	function handleSendMessage(): void {
		if (currentMessage.trim() !== "") {
			sendChat(currentMessage.trim());
			setCurrentMessage("");
		}
	}

	return (
		<div className="p-5 gap-1 flex flex-col justify-center items-center absolute bottom-0 w-full  bg-gradient-to-t dark:from-slate-900 dark:to-[rgba(0, 0, 0)] from-slate-200 from-[10%] to-[rgba(255,255,255,0)] from-[13.4%]]">
			{messageList.length > 0 && (
				<div>
					{streamingId !== "" ? (
						<Button
							icon={HiStop}
							variant="primary"
							onClick={() => {
								stopFlag.current = true;
							}}
						>
							停止生成
						</Button>
					) : (
						<Button
							icon={HiRefresh}
							variant="primary"
							onClick={() => {
								resendMessage();
							}}
						>
							重新生成
						</Button>
					)}
				</div>
			)}
			<div className="w-full items-center gap-3 text-base bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-100 rounded p-2 m-2 shadow-md relative overflow-hidden flex justify-between">
				<span className="text-green-500">
					<RiThunderstormsLine />
				</span>
				<TextArea
					placeholder="输入一条消息..."
					className="flex-1 max-h-[300px]  outline-none bg-transparent resize-none "
					value={currentMessage}
					onChange={(e) => setCurrentMessage(e.target.value)}
				></TextArea>
				<button
					className="p-2 inset-y-0 right-0 text-white rounded disabled:text-gray-500 bg-green-500 disabled:bg-transparent hover:bg-green-600"
					onClick={handleSendMessage}
					disabled={currentMessage.trim() === ""}
				>
					<BsFillSendFill />
				</button>
			</div>
		</div>
	);
};

export default ChatInput;
