import { Message } from "@/types/chat";

export type AppStateType = {
	navOpen: boolean;
	theme: "light" | "dark";
	selectedChatId: string;
	selectedModel: string;

	messageList: Message[];
	streamingId: string;
};

type UpdateMessage = {
	type: "UPDATE_MESSAGE";
	payload: Message;
};

type RemoveMessage = {
	type: "REMOVE_MESSAGE";
	payload: string;
};

type AddMessage = {
	type: "ADD_MESSAGE";
	payload: Message;
};

type SetNavOpen = {
	type: "SET_NAV_OPEN";
	payload: boolean;
};

type SetTheme = {
	type: "SET_THEME";
	payload: "light" | "dark";
};

type SetSelectedChatId = {
	type: "SET_SELECTED_CHAT";
	payload: string;
};

type SetSelectedModel = {
	type: "SET_SELECTED_MODEL";
	payload: string;
};

type SetStreamingId = {
	type: "SET_STREAMING_ID";
	payload: string;
};

export type ActionType =
	| RemoveMessage
	| SetStreamingId
	| UpdateMessage
	| AddMessage
	| SetSelectedModel
	| SetNavOpen
	| SetTheme
	| SetSelectedChatId;

export const reducer = (state: AppStateType, action: ActionType) => {
	if (action.type === "SET_NAV_OPEN")
		return { ...state, navOpen: action.payload };
	if (action.type === "SET_THEME") return { ...state, theme: action.payload };
	if (action.type === "SET_SELECTED_CHAT")
		return { ...state, selectedChatId: action.payload };
	if (action.type === "SET_SELECTED_MODEL")
		return { ...state, selectedModel: action.payload };
	if (action.type === "ADD_MESSAGE")
		return { ...state, messageList: [...state.messageList, action.payload] };
	if (action.type === "UPDATE_MESSAGE") {
		const newMessageList = state.messageList.map((msg) => {
			if (msg.id === action.payload.id) return action.payload;
			return msg;
		});
		return { ...state, messageList: newMessageList };
	}
	if (action.type === "SET_STREAMING_ID")
		return { ...state, streamingId: action.payload };
	if (action.type === "REMOVE_MESSAGE") {
		const newMessageList = state.messageList.filter(
			(msg) => msg.id !== action.payload
		);
		return { ...state, messageList: newMessageList };
	}
	return state;
};
