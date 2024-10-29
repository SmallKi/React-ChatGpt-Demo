import { useAppContext } from "@/store/AppContext";
import { PiLightbulbBold, PiLockBold } from "react-icons/pi";

const ModelSelect = () => {
	const {
		state: { selectedModel },
		dispatch,
	} = useAppContext();
	const models = [
		{
			id: "deepseek",
			name: "DeepSeek",
			icon: <PiLightbulbBold />,
			locked: false,
		},
		{
			id: "chatgpt",
			name: "ChatGPT",
			icon: <PiLockBold />,
			locked: false,
		},
	];
	// const [selected]
	return (
		<div className="bg-gray-200 rounded min-h-[48px] dark:bg-gray-700 px-3 py-2 flex gap-2">
			{models.map((model) => (
				<button
					key={model.id}
					className={`px-4  text-black dark:text-white flex gap-1 justify-center items-center p-2 rounded  text-sm font-medium  ${
						selectedModel === model.id
							? "bg-white dark:bg-gray-800"
							: "dark:bg-gray-700 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500"
					}`}
					onClick={() => {
						if (!model.locked)
							dispatch({ type: "SET_SELECTED_MODEL", payload: model.id });
					}}
				>
					<span className={`${selectedModel === model.id && "text-green-600"}`}>
						{model.icon}
					</span>
					<span className="transition-all">{model.name}</span>
				</button>
			))}
		</div>
	);
};

export default ModelSelect;
