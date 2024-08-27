import React from "react";
import Image from "next/image";

export default function Component() {
  return (
    <div className=" flex justify-center items-center h-20 px-4 md:px-6">
      <div className="flex items-center space-x-3">
        <Image
          src="/公司logo.jpg"
          alt="新质向阳 Logo"
          width={500}
          height={300}
          unoptimized
        />
      </div>
    </div>
  );
}