import React from "react";

export const HeroSection = (): JSX.Element => {
  // Define the repeating icon and text content for better maintainability
  const heroContent = [
    {
      text: "RIDICULOUSLY EASY",
      id: "easy",
    },
    {
      text: "SERIOUSLY FAST",
      id: "fast",
    },
  ];

  return (
    <section className="w-full bg-[#f8f4e8] py-20 overflow-hidden">
      <div className="max-w-[1698px] mx-auto flex flex-row items-center justify-center gap-[100px] overflow-hidden">
        {heroContent.map((content) => (
          <div key={content.id} className="flex items-center">
            <div className="relative h-[62px] w-[92px]">
              <div className="h-[62px] w-[92px] overflow-hidden">
                <div className="relative h-[62px]">
                  <img
                    className="absolute w-[46px] h-[46px] top-0 left-[46px]"
                    alt="Vector"
                    src="https://c.animaapp.com/md37ei6zRykloX/img/vector-4.svg"
                  />
                  <img
                    className="absolute w-[46px] h-[46px] top-4 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/md37ei6zRykloX/img/vector-3.svg"
                  />
                </div>
              </div>
            </div>
            <h2 className="font-bold text-black text-[80px] tracking-[-4.00px] leading-[72px] whitespace-nowrap font-['Inter',Helvetica]">
              {content.text}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
