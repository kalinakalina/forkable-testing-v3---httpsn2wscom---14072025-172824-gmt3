import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Data for the stat cards
  const statCards = [
    {
      position: "col-span-2",
      label: "HIGHLY SECURE",
      value: "100%",
      description: "Peace of mind",
    },
    {
      position: "col-span-1",
      label: "SERIOUSLY FAST",
      value: "60s",
      description: "Backup interval",
    },
    {
      position: "col-span-1",
      label: "COST-EFFECTIVE",
      value: "92%",
      description: "Storage cost savings",
    },
  ];

  return (
    <section className="w-full bg-[#f8f4e8] py-2.5 flex justify-center">
      <div className="max-w-[1140px] mx-auto flex flex-row gap-0">
        <div className="w-[380px] flex justify-center">
          <img
            className="h-[438px] w-auto object-contain"
            alt="Cloud backup service illustration"
            src="https://c.animaapp.com/md37ei6zRykloX/img/image-1.png"
          />
        </div>

        <div className="w-[760px] grid grid-cols-2 gap-0">
          {statCards.map((card, index) => (
            <Card
              key={index}
              className={`rounded-none border-0 shadow-none ${card.position}`}
            >
              <CardContent className="p-8">
                <div className="font-bold text-[13px] leading-[13px] tracking-[0] text-black font-['Inter',Helvetica]">
                  {card.label}
                </div>
                <div className="mt-8 font-bold text-[70px] leading-[70px] tracking-[-2.00px] text-black font-['Inter',Helvetica]">
                  {card.value}
                </div>
                <div className="mt-[26px] font-normal text-lg leading-[27px] tracking-[-0.20px] text-[#61605c] font-['Inter',Helvetica]">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
