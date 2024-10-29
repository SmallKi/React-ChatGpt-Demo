import Button from "@/components/common/Button";
import { HiRefresh } from "react-icons/hi";
import TextArea from "react-textarea-autosize";
const ChatInput = () => {
	return (
		<div className="p-5 gap-3 flex flex-col justify-center items-center absolute bottom-0 w-full  bg-gradient-to-t dark:from-slate-900 dark:to-[rgba(0, 0, 0)] from-slate-200 from-[10%] to-[rgba(255,255,255,0)] from-[13.4%]]">
			<div>
				<Button icon={HiRefresh}>刷新</Button>
			</div>
			<TextArea
				className="outline-none bg-transparent resize-none border border-slate-700 rounded p-2 "
				defaultValue={123}
				placeholder="哈哈"
			></TextArea>
		</div>
	);
};

export default ChatInput;
