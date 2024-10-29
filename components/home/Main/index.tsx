import ChatInput from "./ChatInput";
import Menu from "./Menu";
import MessageList from "./MessageList";

const Main = () => {
	return (
		<main className="relative overflow-hidden bg-white flex-1 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex">
			<Menu></Menu>
			{/* <Welcome></Welcome> */}
			<MessageList />
			<ChatInput></ChatInput>
		</main>
	);
};

export default Main;
