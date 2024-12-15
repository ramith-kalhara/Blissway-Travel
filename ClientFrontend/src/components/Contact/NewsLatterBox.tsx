"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11 flex flex-col"
    style={{ height: "610px" }}
    >
  <Image
    src="/images/contact/sri lanka.jpg" 
    alt="Newsletter Section Image"   
    layout="fill" 
    className="rounded-sm w-full h-auto object-cover"
  />
</div>


  );
};

export default NewsLatterBox;
