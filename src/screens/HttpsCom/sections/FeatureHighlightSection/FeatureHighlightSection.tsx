import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const FeatureHighlightSection = (): JSX.Element => {
  // Data for the CTA buttons
  const ctaButtons = [
    {
      id: "demo",
      title: "Get a demo",
      bgColor: "bg-[#ffe083]",
      iconSrc:
        "https://c.animaapp.com/md37ei6zRykloX/img/n2w-icon-circle-svg-3.svg",
    },
    {
      id: "free",
      title: "Try it free",
      bgColor: "bg-[#fdbc97]",
      iconSrc:
        "https://c.animaapp.com/md37ei6zRykloX/img/n2w-icon-circle-svg-2.svg",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f8f4e8] relative">
      <div className="max-w-[1140px] mx-auto">
        <Separator className="w-full opacity-20" />

        <div className="mt-10">
          <h3 className="font-bold text-[13px] tracking-[0] leading-[13px] font-['Inter',Helvetica] text-black">
            DON&#39;T WAIT FOR A DISASTER
          </h3>
        </div>

        <div className="mt-10">
          <p className="font-normal text-xl tracking-[0] leading-[23px] text-[#61605c] font-['Inter',Helvetica]">
            With N2W, your data is safe, your recovery is fast,
            <br />
            and your peace of mind is guaranteed. It&apos;s backup
            <br />
            you can rely on—no superhero cape required.
          </p>
        </div>

        <Separator className="w-full mt-10 opacity-20" />

        <h2 className="mt-6 font-semibold text-[100px] tracking-[0] leading-[90px] text-black font-['Inter',Helvetica]">
          Protect your cloud
          <br />
          assets now
        </h2>

        <div className="mt-10 space-y-6">
          {ctaButtons.map((button) => (
            <div
              key={button.id}
              className={`flex items-center justify-between w-full h-28 ${button.bgColor} rounded-[100px]`}
            >
              <div className="flex items-center">
                <img
                  className="w-[72px] h-[72px] ml-5"
                  alt={`${button.title} icon`}
                  src={button.iconSrc}
                />
                <h3 className="ml-5 font-semibold text-4xl tracking-[-2.00px] leading-[38px] text-black font-['Inter',Helvetica]">
                  {button.title}
                </h3>
              </div>

              <div className="mr-5">
                <Button
                  variant="outline"
                  className="w-[296px] h-[72px] rounded-[100px] border border-solid border-[#20202026] bg-transparent"
                >
                  <span className="font-bold text-[13px] tracking-[0] leading-[13px] text-black font-['Inter',Helvetica]">
                    GET STARTED
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
