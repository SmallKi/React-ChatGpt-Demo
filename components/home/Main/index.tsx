import Menu from "./Menu";
import Welcome from "./Welcome";

const Main = () => {
	return (
		<main className="bg-white flex-1 text-gray-900 dark:bg-gray-800 dark:text-gray-100 flex">
			<Menu></Menu>
			<Welcome></Welcome>
		</main>
	);
};

export default Main;
