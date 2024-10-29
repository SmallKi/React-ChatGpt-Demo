import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export const metadata: Metadata = {
  title: "I'm chatgpt",
};

export default Page;
