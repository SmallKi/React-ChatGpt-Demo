import ModelSelect from "./ModelSelect";
import TagList from "./TagList";

const Welcome = () => {
	return (
		<div className="relative flex-1 flex flex-col h-full">
			{/* <div className="flex-1 h-full"> */}
			<div className="mb-[100px] overflow-y-auto w-full flex flex-col items-center px-4 py-20 justify-start h-full">
				<ModelSelect />
				<h1 className="font-bold text-3xl mt-20 text-gray-900 transition-all dark:text-white">
					Chatgpt 模仿Demo示例
				</h1>
				<TagList></TagList>
			</div>
		</div>
		// </div>
	);
};

export default Welcome;
