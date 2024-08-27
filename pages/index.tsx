import Footer from "./components/Footer";
import Component from "./components/AIAgentsPage";
import Image from "next/image";
export default function Home() {
  return (
    <div className="text-black px-[calc(50%-720px)]">
      <div className="flex items-center space-x-3 bg-white pb-[70px]">
        <Image
          src="/公司logo.jpg"
          alt="新质向阳 Logo"
          width={200}
          height={140}
          unoptimized
        />
      </div>
      <Component />
      <div className="flex flex-col items-center justify-center bg-white w-full pb-3">
        <div className="text-sm text-gray-800 py-8  bg-white ">
          联系我们：长按下方二维码识别
        </div>
        <Image
          src="/王总.jpg"
          alt="王总微信"
          width={200}
          height={200}
          unoptimized
        />
      </div>
      <div className="h-[120px] flex flex-col text-sm text-[9px] justify-center items-center bg-white pt-[30px]">
        <div className="text-gray-500">北京新质向阳科技有限公司</div>
        <div className="text-gray-500">© 2022-2024 XZXY,AI.</div>
      </div>
    </div>
  );
}
