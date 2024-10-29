"use client";

import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	useContext,
	useMemo,
	useReducer,
} from "react";
import { ActionType, AppStateType, reducer } from "./reducers/AppReducer";

type AppContextType = {
	state: AppStateType;
	dispatch: Dispatch<ActionType>;
};

const appContext = createContext<AppContextType>(null!);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const Provider = appContext.Provider;
	const [state, dispatch] = useReducer(reducer, {
		navOpen: true,
		theme: "light",
		selectedChatId: "",
		selectedModel: "deepseek",
	});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const s = useMemo(() => {
		return {
			state,
			dispatch,
		};
	}, [state]);

	return <Provider value={s}>{children}</Provider>;
};

export default AppProvider;

const useAppContext = () => {
	return useContext(appContext);
};

export { useAppContext };
