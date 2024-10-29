export interface Chat {
	id: string;
	title: string;
	updateTime: Date;
}

export interface Message {
	id: string;
	role: "user" | "assistant";
	content: string;
}
