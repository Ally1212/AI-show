import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex mx-10 bg-white justify-between">
      {/* 左侧 */}
      <div className="flex items-center">
        <Image
          src="/公司logo.jpg"
          alt="Logo"
          width={200}
          height={60}
          unoptimized
        />
        <div className="ml-3 font-bold text-lg">联系我们：</div>
      </div>
      {/* 右侧 */}
      <div className="flex items-center ml-3">
        <div className="">王总-微信：</div>
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden h-12 w-12 mr-2">
            <Image
              src="/王总.jpg"
              alt="王总微信"
              width={250}
              height={250}
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;