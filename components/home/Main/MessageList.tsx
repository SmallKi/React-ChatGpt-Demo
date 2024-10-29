import { useAppContext } from "@/store/AppContext";
import { FC } from "react";
import { BiSolidUser } from "react-icons/bi";
import { PiOpenAiLogo } from "react-icons/pi";
import Markdown from "./Markdown";
const MessageList: FC = () => {
	const {
		state: { messageList: messages },
	} = useAppContext();
	// const messages: Message[] = [
	// 	{ id: "1", role: "user", content: "你好！" },
	// 	{
	// 		id: "2",
	// 		role: "assistant",
	// 		content:
	// 			"你好！很高兴见到你！有什么我可以帮助你的吗？无论是关于学习、工作还是生活上的问题，我都会尽力提供帮助。",
	// 	},
	// 	{ id: "3", role: "user", content: "今天天气怎么样？" },
	// 	{
	// 		id: "4",
	// 		role: "assistant",
	// 		content:
	// 			"今天天气晴，非常适合外出活动。你可以考虑去散步、跑步，或者与朋友一起享受户外活动。",
	// 	},
	// 	{ id: "5", role: "user", content: "你会做饭吗？" },
	// 	{
	// 		id: "6",
	// 		role: "assistant",
	// 		content:
	// 			"我自己并不能做饭，但我可以为你提供各种食谱和烹饪技巧。这里有一个简单的食谱：\n\n### 西红柿炒鸡蛋\n\n**材料**:\n- 鸡蛋\n- 西红柿\n- 盐\n- 油\n\n**步骤**:\n1. 打散鸡蛋，加入盐。\n2. 热锅凉油，倒入鸡蛋炒熟。\n3. 加入切好的西红柿，继续翻炒至熟。\n4. 调味后即可享用！",
	// 	},
	// 	{ id: "7", role: "user", content: "推荐一本好书吧。" },
	// 	{
	// 		id: "8",
	// 		role: "assistant",
	// 		content:
	// 			"我推荐《百年孤独》。这是加西亚·马尔克斯的一部经典作品，讲述了布恩迪亚家族的故事，融合了魔幻现实主义的元素，非常值得一读。",
	// 	},
	// 	{ id: "9", role: "user", content: "你喜欢音乐吗？" },
	// 	{
	// 		id: "10",
	// 		role: "assistant",
	// 		content:
	// 			"我对音乐很感兴趣，尤其是古典音乐。古典乐有着深厚的历史和丰富的情感，作曲家们通过音符传达了许多深刻的思想和情感。你有什么喜欢的音乐类型吗？",
	// 	},
	// 	{ id: "11", role: "user", content: "有没有什么好看的电影？" },
	// 	{
	// 		id: "12",
	// 		role: "assistant",
	// 		content:
	// 			"我推荐你去看看《盗梦空间》。这部电影不仅有惊险刺激的情节，还有深刻的哲学思考，探讨了梦与现实的界限，非常引人入胜。",
	// 	},
	// 	{ id: "13", role: "user", content: "你会说其他语言吗？" },
	// 	{
	// 		id: "14",
	// 		role: "assistant",
	// 		content:
	// 			"是的，我能够理解和使用多种语言，包括英语、中文、西班牙语等。如果你希望用其他语言交流，欢迎告诉我！",
	// 	},
	// 	{ id: "15", role: "user", content: "今天有什么新闻？" },
	// 	{
	// 		id: "16",
	// 		role: "assistant",
	// 		content:
	// 			"今天的新闻涵盖了多个重要话题，包括全球气候变化的讨论、经济发展的趋势以及科技领域的最新进展。关于气候变化，你可以关注以下几个方面：\n\n1. **政策变化**\n2. **科技创新**\n3. **公众意识**\n\n例如，气候变化的数学模型可以表示为：\n\n$$\nDelta T = k cdot Delta CO_2\n$$\n\n其中，$$Delta T$$ 是温度变化，$$k$$ 是气候敏感度。",
	// 	},
	// 	{
	// 		id: "17",
	// 		role: "user",
	// 		content: "能给我一个简单的 JavaScript 代码示例吗？",
	// 	},
	// 	{
	// 		id: "18",
	// 		role: "assistant",
	// 		content:
	// 			"当然可以！下面是一个简单的 JavaScript 函数，用于计算数组的总和：\n\n```javascript\nfunction sumArray(arr) {\n    return arr.reduce((acc, curr) => acc + curr, 0);\n}\n\nconst numbers = [1, 2, 3, 4, 5];\nconsole.log(sumArray(numbers)); // 输出 15\n```",
	// 	},
	// ];

	return (
		<div className="mb-[120px] max-w-4xl mx-auto w-full flex flex-col overflow-y-auto">
			<ul className="px-3">
				{messages.map((message) => {
					const isUser = message.role === "user";
					return (
						<li
							key={message.id}
							className={`gap-3 flex items-base p-3 rounded ${
								isUser
									? "bg-transparent text-black dark:text-gray-300"
									: "bg-gray-200 dark:bg-gray-600 dark:text-gray-300"
							}`}
						>
							<span className={`text-2xl ${isUser ? "" : "text-green-500"}`}>
								{isUser ? <BiSolidUser /> : <PiOpenAiLogo />}
							</span>
							{isUser ? (
								<div>{message.content}</div>
							) : (
								<Markdown className={"!text-black dark:!text-gray-300"}>
									{message.content}
								</Markdown>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MessageList;
