import React, { FC } from "react";
import Overlay from "./overlay";
import OverlayFromRight from "./OverlayFromRight";

type BanerProps = {
  children?: React.ReactNode;
  img: string;
  overlay?: string;
};
const Banner: FC<BanerProps> = ({ children, img, overlay }) => {
  return (
    <div className="relative  ">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={img} alt="" />

        {overlay == "right" ? <OverlayFromRight /> : <Overlay />}
      </div>

      <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[336px] px-4 sm:px-6 lg:px-8 flex flex-col items-start space-y-4  justify-center py-4">
        {children}
      </div>
    </div>
  );
};

export default Banner;
