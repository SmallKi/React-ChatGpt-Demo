import { ComponentPropsWithRef, FC } from "react";
import { IconType } from "react-icons";

type ButtonProps = ComponentPropsWithRef<"button"> & {
	icon?: IconType | FC;
	variant?: "default" | "outline" | "text" | "primary";
};

const Button: FC<ButtonProps> = ({
	children,
	className,
	icon: Icon,
	variant = "default",
	...props
}) => {
	return (
		<button
			className={`rounded px-3 py-1.5 items-center inline-flex min-w-[38px] min-h-[38px] 
        ${
					variant === "default"
						? `bg-gray-50 text-black hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-50`
						: variant === "outline"
						? `border border-gray-300 dark:border-gray-600 text-black dark:text-gray-300 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700`
						: variant === "primary"
						? "bg-green-600 hover:bg-green-500 text-white"
						: `text-black dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 `
				}
        ${className}
      `}
			{...props}
		>
			{Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
			{children}
		</button>
	);
};

export default Button;
