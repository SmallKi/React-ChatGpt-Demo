export type AppStateType = {
	navOpen: boolean;
	theme: "light" | "dark";
	selectedChatId: string;
	selectedModel: string;
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

export type ActionType =
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
	return state;
};
