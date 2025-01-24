import { ModeToggle } from "@/components/ModeToggle";
import React from "react";

const Header = () => {
  return (
    <div className="container-wrapper w-full flex items-center justify-center">
      <div className="container flex flex-row justify-between items-center gap-1 p-4 ">
        <div className="sm:w-md lg:w-24 font-bold">
          Text
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div>nav</div>
          <div>nav</div>
          <div>nav</div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Header;
