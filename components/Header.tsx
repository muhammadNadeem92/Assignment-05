import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="h-[135.01px] w-[1741.06] bg-[#A29875]"><h1 className="text-[75px] ml-9 mt-5 text-[#FFFFFF] w-[439px] h-[94px]">MANZZARI</h1></div>
      <div className="flex items-center justify-center mt-[117px] mb-[134px] mr-[107.49px] ">
        <div>
          <h1 className="text-[40px] font-bold h-[189px] w-[496px] ml-[107.49px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
          <p className="font-medium text-[29.24px] text-[#787054] w-[798.9px] h-36 ml-[107.49px] leading-[48.1px]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="text-[25.8px] font-medium leading-[32.25px] bg-[#A29875] text-[#FFFFFF] rounded-[8.6px] p-[8.6px] ml-[107.49px] mt-8 w-[247.67px] h-[49.2px] gap-[10px]">Explore Now</button>
        </div>
        <div>
          <Image
            src={"./images/figma.svg"}
            alt="hero_image"
            width={380.1}
            height={525.43}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
