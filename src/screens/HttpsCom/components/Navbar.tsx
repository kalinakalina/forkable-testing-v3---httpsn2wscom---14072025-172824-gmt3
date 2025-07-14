import React from "react";
import { Button } from "../../../components/ui/button";

export const Navbar = (): JSX.Element => {
  // Navigation menu items data
  const navigationItems = [
    { label: "PRODUCT", width: "w-[73px]" },
    { label: "PRICING", width: "w-[63px]" },
    { label: "SOLUTIONS", width: "w-[85px]" },
    { label: "RESOURCES", width: "w-[94px]" },
    { label: "COMPANY", width: "w-[77px]" },
    { label: "CUSTOMERS", width: "w-[95px]" },
  ];

  return (
    <nav className="w-full h-[100px] border-b border-solid border-[#0000001a] flex items-center justify-between px-[289px]">
      <div className="flex items-center">
        <img
          className="w-[180px] h-[33px]"
          alt="N2W Logo"
          src="https://c.animaapp.com/md37ei6zRykloX/img/link-1.svg"
        />
        <div className="flex ml-[60px]">
          {navigationItems.map((item, index) => (
            <div
              key={`nav-item-${index}`}
              className={`${item.width} h-[13px] mx-[15px] font-['Inter',Helvetica] font-bold text-[13px] tracking-[0] leading-[13px] text-black cursor-pointer`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="h-[38px] font-['Inter',Helvetica] font-bold text-[13px] tracking-[0] leading-[13px] text-black mr-[15px]"
        >
          LOGIN
        </Button>
        <Button className="h-[38px] bg-black text-white font-['Inter',Helvetica] font-bold text-[13px] tracking-[0] leading-[13px] rounded-md">
          GET STARTED
        </Button>
      </div>
    </nav>
  );
};
