import React from "react";
import { Navbar } from "./components/Navbar";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { MainContentSection } from "./sections/MainContentSection";
import { SidebarSection } from "./sections/SidebarSection";
import { SidebarWrapperSection } from "./sections/SidebarWrapperSection";

export const HttpsCom = (): JSX.Element => {
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
    <div
      className="bg-white flex flex-col items-center w-full min-h-screen"
      data-model-id="212:7192"
    >
      <div className="bg-white border border-solid border-[#0000001a] w-full max-w-[1898px] relative">
        <Navbar />
        <div className="w-full bg-white overflow-y-auto">
          <div className="w-full">
            <MainContentSection />
            <HeroSection />
            <SidebarSection />
            <ContentWrapperSection />
            <FeatureHighlightSection />
            <ImageGallerySection />
            <SidebarWrapperSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
