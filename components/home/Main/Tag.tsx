import { FC, PropsWithChildren } from "react";

const Tag: FC<PropsWithChildren & { onClick?: () => void }> = ({
	children,
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className="dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 hover:cursor-pointer flex justify-center items-center p-1 px-3 rounded bg-gray-200 text-gray-900 dark:text-gray-50"
		>
			{children}
		</div>
	);
};

export default Tag;
