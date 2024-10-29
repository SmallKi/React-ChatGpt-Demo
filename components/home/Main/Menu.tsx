"use client";
import Button from "@/components/common/Button";
import { useAppContext } from "@/store/AppContext";
import { LuPanelLeftOpen } from "react-icons/lu";

const Menu = () => {
	const {
		state: { navOpen },
		dispatch,
	} = useAppContext();
	function handleNavOpen(): void {
		dispatch({ type: "SET_NAV_OPEN", payload: true });
	}
	return (
		<Button
			icon={LuPanelLeftOpen}
			onClick={handleNavOpen}
			className={`${navOpen ? "hidden" : ""}`}
		/>
	);
};

export default Menu;
