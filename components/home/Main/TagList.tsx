import tagData from "@/data/tags.json";
import { useMemo, useState } from "react";
import Tag from "./Tag";

const TagList = () => {
	const [showAll, setShowAll] = useState(false);
	const showTags = useMemo(() => {
		if (showAll) return tagData;
		return tagData.slice(0, 5);
	}, [showAll]);
	return (
		<>
			<div className="w-full flex flex-wrap px-3 gap-3 justify-center mt-10">
				{showTags.map((item) => {
					return <Tag key={item.name}>{item.name}</Tag>;
				})}
			</div>
			{!showAll && (
				<>
					<hr className="mt-5 border border-b-[1px] border-dotted w-full dark:border-gray-600" />
					<button
						onClick={() => setShowAll(true)}
						className="p-1 flex mt-2 px-2 rounded text-center font-bold text-xl hover:bg-gray-300 dark:hover:bg-gray-600"
					>
						...
					</button>
				</>
			)}
		</>
	);
};

export default TagList;
