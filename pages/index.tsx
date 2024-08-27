import Footer from "./components/Footer";
import Component from "./components/AIAgentsPage";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-black px-[calc(50%-720px)]">
      <div className="flex items-center space-x-3 bg-white">
        <Image
          src="/公司logo.jpg"
          alt="新质向阳 Logo"
          width={300}
          height={180}
          unoptimized
        />
      </div>
      <Component />
      <div className="flex flex-col items-center justify-center bg-white w-full">
        <div className="text-sm text-gray-800 py-2  bg-white ">
          联系我们
        </div>
        <Image
          src="/王总.jpg"
          alt="王总微信"
          width={150}
          height={150}
          unoptimized
        />
      </div>


    </div>
  );
}
