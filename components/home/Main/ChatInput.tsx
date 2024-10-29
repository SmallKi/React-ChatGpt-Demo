import Button from "@/components/common/Button";
import { BsFillSendFill } from "react-icons/bs";
import { HiRefresh } from "react-icons/hi";
import { RiThunderstormsLine } from "react-icons/ri";
import TextArea from "react-textarea-autosize";
const ChatInput = () => {
	return (
		<div className="p-5 gap-1 flex flex-col justify-center items-center absolute bottom-0 w-full  bg-gradient-to-t dark:from-slate-900 dark:to-[rgba(0, 0, 0)] from-slate-200 from-[10%] to-[rgba(255,255,255,0)] from-[13.4%]]">
			<div>
				<Button icon={HiRefresh} variant="primary">
					重新生成
				</Button>
			</div>
			<div className="w-full items-end gap-3 text-base bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-100 rounded p-2 m-2 shadow-md relative overflow-hidden flex justify-between">
				<span className="text-green-500">
					<RiThunderstormsLine />
				</span>
				<TextArea
					placeholder="输入一条消息..."
					className="flex-1 max-h-[300px]  outline-none bg-transparent resize-none "
				></TextArea>
				<button className="dark:hover:text-gray-300 px-2 inset-y-0 right-0 text-gray-500 hover:text-gray-700">
					<BsFillSendFill />
				</button>
			</div>
		</div>
	);
};

export default ChatInput;
