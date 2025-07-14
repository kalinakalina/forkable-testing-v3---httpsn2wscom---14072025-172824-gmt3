import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarWrapperSection = (): JSX.Element => {
  const resourceCards = [
    {
      id: "aws",
      bgColor: "bg-[#fdbc97]",
      bgImage:
        "bg-[url(https://c.animaapp.com/md37ei6zRykloX/img/background-1.png)]",
      icon: (
        <div className="relative w-[63px] h-[63px] bg-[url(https://c.animaapp.com/md37ei6zRykloX/img/vector-10.svg)] bg-[100%_100%]">
          <img
            className="absolute w-4 h-[22px] top-[21px] left-6"
            alt="Vector"
            src="https://c.animaapp.com/md37ei6zRykloX/img/vector-12.svg"
          />
        </div>
      ),
      title: "Complete guide to AWS Backup",
      description:
        "Read our in-depth guide to AWS Backup features, including pros, cons, and FAQs.",
      buttonText: "READ MORE",
    },
    {
      id: "cross-cloud",
      bgColor: "bg-[#ffe083]",
      icon: (
        <img
          className="w-16 h-16"
          alt="Icon circle docs svg"
          src="https://c.animaapp.com/md37ei6zRykloX/img/icon-circle-docs-svg.svg"
        />
      ),
      title: "Master cross-cloud resilience",
      description:
        "Get the cross-cloud essentials guide to deploy multi-cloud effectively.",
      buttonText: "DOWNLOAD",
    },
    {
      id: "azure",
      bgColor: "bg-[#c8e2ff]",
      icon: (
        <div className="relative w-[63px] h-[63px] bg-[url(https://c.animaapp.com/md37ei6zRykloX/img/vector-10.svg)] bg-[100%_100%]">
          <img
            className="absolute w-[21px] h-[15px] top-6 left-[21px]"
            alt="Vector"
            src="https://c.animaapp.com/md37ei6zRykloX/img/vector-11.svg"
          />
        </div>
      ),
      title: "Ultimate guide to Azure Backup",
      description:
        "Learn how to make your backup and DR workflows efficient and cost effective.",
      buttonText: "READ MORE",
    },
  ];

  return (
    <section className="w-full max-w-[1140px] mx-auto py-2.5">
      <div className="grid grid-cols-3 gap-[10px]">
        {resourceCards.map((card) => (
          <Card
            key={card.id}
            className={`h-[344px] ${card.bgColor} ${card.bgImage ? `bg-cover bg-center ${card.bgImage}` : ""} border-none rounded-none`}
          >
            <CardContent className="p-0">
              <div className="p-[30px] h-full flex flex-col">
                <div className="w-16 h-16">{card.icon}</div>

                <div className="mt-[56px]">
                  <h3 className="font-semibold text-2xl tracking-[-0.50px] leading-7 text-black font-['Inter',Helvetica] mb-4">
                    {card.title.includes("Backup") ? (
                      <>
                        {card.title.split("Backup")[0]}
                        <br />
                        Backup
                      </>
                    ) : (
                      <>
                        {card.title.split(" ")[0]} {card.title.split(" ")[1]}
                        <br />
                        {card.title.split(" ").slice(2).join(" ")}
                      </>
                    )}
                  </h3>

                  <p className="font-['Inter',Helvetica] font-normal text-[#61605c] text-base tracking-[-0.20px] leading-[23px]">
                    {card.description.includes("guide") ? (
                      <>
                        {card.description.split("guide")[0]}guide
                        <br />
                        {card.description.split("guide")[1].trim()}
                      </>
                    ) : (
                      <>
                        {card.description.split("workflows")[0]}workflows
                        <br />
                        {card.description.split("workflows")[1].trim()}
                      </>
                    )}
                  </p>
                </div>

                <div className="mt-auto">
                  <Button className="h-[34px] rounded-md bg-black text-white font-['Inter',Helvetica] font-bold text-[13px] leading-3 px-[17px] py-2.5">
                    {card.buttonText}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
