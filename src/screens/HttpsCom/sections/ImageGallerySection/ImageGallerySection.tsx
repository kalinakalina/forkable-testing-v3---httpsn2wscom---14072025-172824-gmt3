import React from "react";

export const ImageGallerySection = (): JSX.Element => {
  // Data for repeating resource sections
  const resourceSections = [
    { position: "left-[-524px]" },
    { position: "left-[308px]" },
    { position: "left-[1230px]" },
  ];

  return (
    <section className="relative w-full h-[222px] overflow-hidden">
      <div className="relative w-full h-[72px] mt-20 overflow-hidden">
        <div className="max-w-[1898px] mx-auto relative">
          {/* First standalone text */}
          <div className="absolute w-[893px] h-[72px] -top-px left-[308px]">
            <div className="absolute w-[92px] h-[62px] top-1.5 left-0">
              <div className="h-[62px] overflow-hidden">
                <div className="w-[92px] h-[62px] overflow-hidden">
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
            </div>
            <div className="absolute w-[803px] h-[72px] top-0 left-[90px] [font-family:'Inter',Helvetica] font-bold text-black text-[80px] tracking-[-4.00px] leading-[72px] whitespace-nowrap">
              MORE RESOURCES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
