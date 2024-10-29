"use client";
import Main from "@/components/home/Main";
import Navigation from "@/components/home/Navigation";
import { useAppContext } from "@/store/AppContext";

const Home = () => {
  const {
    state: { theme },
  } = useAppContext();
  return (
    <div className={`flex w-[100vw] h-[100vh] ${theme}`}>
      <Navigation></Navigation>
      <Main></Main>
    </div>
  );
};
export default Home;
