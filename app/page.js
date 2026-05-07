import Image from "next/image";
import LandingHero from "./component/Header";
import ProblemVision from "./component/Problemvision";
import Ecosystem from "./component/Ecosysten";  
import ExecutionLaunch from "./component/ExecutionLaunch";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <>
      <LandingHero />
      <ProblemVision />
      <Ecosystem />
      <ExecutionLaunch />
      <Footer />
    </>
  );
}
