import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    quote:
      '"N2W has a super simple user interface and an excellent support team. 7 years since we implemented it and it\'s still the best product and value around."',
    author: "Danny Michael",
    position: "Global Head of IT at Gett",
    image: "https://c.animaapp.com/md37ei6zRykloX/img/image.png",
  };

  return (
    <section className="w-full py-2.5 bg-[#f8f4e8]">
      <div className="flex flex-row max-w-[1140px] mx-auto">
        <Card className="w-[564px] h-[423px] border-none rounded-none bg-white">
          <CardContent className="p-8 relative h-full">
            <h3 className="font-bold text-[13px] tracking-[0] leading-[13px] font-['Inter',Helvetica] text-black">
              TRUSTED BY
            </h3>

            <div className="absolute right-5 top-[5px] flex gap-[18px]">
              <div className="w-2 h-2 bg-black opacity-20 rounded-full" />
              <div className="w-2 h-2 bg-black opacity-20 rounded-full" />
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>

            <div className="mt-[154px]">
              <p className="font-normal text-lg tracking-[0] leading-[27px] font-['Inter',Helvetica] text-black">
                "N2W has a super simple user interface and an excellent support team. 7 years since we implemented it and it's still the best product and value around."
              </p>

              <div className="mt-[25px] text-lg tracking-[0] leading-[27px] font-['Inter',Helvetica] text-[#61605c]">
                Danny Michael
                <br />
                Global Head of IT at Gett
              </div>
            </div>
          </CardContent>
        </Card>

        <div
          className="w-[564px] h-[423px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${testimonial.image})` }}
        />
      </div>
    </section>
  );
};
