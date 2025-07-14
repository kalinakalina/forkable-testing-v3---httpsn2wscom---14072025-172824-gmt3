import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Partner logos section data
  const partners = [
    {
      position: 1,
      content: (
        <div className="relative w-[191px] h-[19px] top-[57px] left-11">
          <div className="h-[19px]">
            <div className="relative w-[191px] h-[19px]">
              <img
                className="absolute w-[186px] h-[17px] top-px left-0.5"
                alt="Vector"
                src="https://c.animaapp.com/md37ei6zRykloX/img/vector-2.svg"
              />
            </div>
          </div>
        </div>
      ),
      hasCaseStudy: false,
    },
    {
      position: 2,
      content: (
        <img
          className="absolute w-[45px] h-[31px] top-[49px] left-[117px]"
          alt="Db logo svg"
          src="https://c.animaapp.com/md37ei6zRykloX/img/db-logo-svg.svg"
        />
      ),
      hasCaseStudy: true,
    },
    {
      position: 3,
      content: (
        <div className="relative w-[84px] h-6 top-[53px] left-[98px]">
          <div className="h-6">
            <div className="relative w-[84px] h-6">
              <img
                className="absolute w-[84px] h-[23px] top-0 left-0"
                alt="Vector"
                src="https://c.animaapp.com/md37ei6zRykloX/img/vector-1.svg"
              />
            </div>
          </div>
        </div>
      ),
      hasCaseStudy: false,
    },
    {
      position: 4,
      content: (
        <img
          className="w-full h-full"
          alt="Border"
          src="https://c.animaapp.com/md37ei6zRykloX/img/border.svg"
        />
      ),
      hasCaseStudy: false,
    },
    {
      position: 5,
      content: (
        <img
          className="w-full h-full"
          alt="Vertical border"
          src="https://c.animaapp.com/md37ei6zRykloX/img/verticalborder-2.svg"
        />
      ),
      hasCaseStudy: false,
    },
    {
      position: 6,
      content: (
        <img
          className="w-full h-full"
          alt="Vertical border"
          src="https://c.animaapp.com/md37ei6zRykloX/img/verticalborder.svg"
        />
      ),
      hasCaseStudy: false,
    },
    {
      position: 7,
      content: (
        <img
          className="absolute w-[180px] h-[17px] top-[58px] left-[50px]"
          alt="Skechers logo"
          src="https://c.animaapp.com/md37ei6zRykloX/img/skechers-logo.svg"
        />
      ),
      hasCaseStudy: true,
    },
    {
      position: 8,
      content: (
        <img
          className="w-full h-full"
          alt="Vertical border"
          src="https://c.animaapp.com/md37ei6zRykloX/img/verticalborder-1.svg"
        />
      ),
      hasCaseStudy: false,
    },
  ];

  // Feature sections data
  const features = [
    {
      title: "Seriously fast disaster recovery",
      description: (
        <>
          Picture this—your production environment is down and
          <br />
          your inbox is exploding. <span className="italic">Fear not!</span> Our
          near-instant recovery
          <br />
          gets you back online fast. Just click, restore, and go.
        </>
      ),
      imageSrc: "https://c.animaapp.com/md37ei6zRykloX/img/container-3.svg",
    },
    {
      title: (
        <>
          Highly secure
          <br />
          environment
        </>
      ),
      description: (
        <>
          Keep everything in your cloud environment. Think
          <br />
          vibranium-level security with full control, total sovereignty,
          <br />
          and audit-proof reporting.
        </>
      ),
      imageSrc: "https://c.animaapp.com/md37ei6zRykloX/img/container-2.svg",
    },
    {
      title: (
        <>
          Save 92% on long-
          <br />
          term storage
        </>
      ),
      description: (
        <>
          Cut backup costs by up to 92% by archiving smartly into
          <br />
          the tier of your choosing (not the one they give you). No
          <br />
          sneaky fees, no surprises, and no sacrifices.
        </>
      ),
      imageSrc: "https://c.animaapp.com/md37ei6zRykloX/img/container-1.svg",
    },
  ];

  // Cloud provider options
  const cloudOptions = [
    {
      name: "AWS",
      iconSrc:
        "https://c.animaapp.com/md37ei6zRykloX/img/n2w-icon-circle-svg.svg",
    },
    {
      name: "Azure",
      iconSrc:
        "https://c.animaapp.com/md37ei6zRykloX/img/n2w-icon-circle-svg-1.svg",
    },
  ];

  return (
    <section className="w-full relative">
      {/* Hero Section */}
      <div className="w-full bg-[#f8f4e8]">
        <div className="relative h-[679px] max-w-[1698px] mx-auto">
          <div className="absolute w-full h-[679px] top-0 left-0 overflow-hidden">
            <div className="relative h-[955px] top-[-138px] [background:url(https://c.animaapp.com/md37ei6zRykloX/img/n2w-animation-hero-bg-04-hq-comp-mp4.png)_50%_50%_/_cover]" />
          </div>

          <div className="absolute w-[662px] h-[337px] top-[95px] left-[289px] [font-family:'Inter',Helvetica] font-semibold text-black text-[100px] tracking-[-6.00px] leading-[90px]">
            Ridiculously
            <br />
            easy backup
            <br />
            &amp; recovery
          </div>

          <div className="absolute w-[457px] h-[77px] top-[428px] left-[289px] [font-family:'Inter',Helvetica] font-normal text-[#61605c] text-xl tracking-[-0.30px] leading-[26.4px]">
            You want recovery that&apos;s instant, security that&apos;s
            <br />
            unbreakable, and costs that won&apos;t make your CFO
            <br />
            cry. (That&apos;s where we come in.)
          </div>

          <Button className="absolute h-[38px] top-[535px] left-[289px] rounded-md bg-black text-white font-bold text-[15px]">
            SPIN IT UP FOR FREE
          </Button>

          <img
            className="absolute w-[399px] h-[268px] top-[363px] left-[1040px]"
            alt="Container"
            src="https://c.animaapp.com/md37ei6zRykloX/img/container.svg"
          />
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-[1698px] mx-auto relative pt-24">
        <h2 className="text-center text-xl text-black font-normal [font-family:'Inter',Helvetica] tracking-[-0.20px] leading-[26.4px] mb-8">
          Join 1,000+ growing organizations
        </h2>

        <div className="grid grid-cols-4 grid-rows-2 max-w-[1140px] mx-auto">
          {partners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className={`relative h-[130px] border-[#20202026] ${
                index % 4 !== 3 ? "border-r border-r-solid" : ""
              } ${index < 4 ? "border-b border-b-solid" : ""}`}
            >
              {partner.content}
              {partner.hasCaseStudy && (
                <div className="absolute w-[86px] h-[25px] bottom-[10px] right-[29px] bg-[#e7f4ff] rounded-[28px]">
                  <div className="absolute w-[68px] h-[13px] top-[5px] left-2 [font-family:'Inter',Helvetica] font-semibold text-[#0085ff] text-[13px] text-center tracking-[-0.30px] leading-[13px] whitespace-nowrap">
                    Case study
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Sections */}
      <div className="max-w-[1698px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="mt-20 mb-20 max-w-[1140px] mx-auto"
          >
            <div className="flex justify-between items-start mb-10">
              <h2 className="w-[511px] [font-family:'Inter',Helvetica] font-semibold text-black text-[54px] tracking-[-3.24px] leading-[54px]">
                {feature.title}
              </h2>
              <div className="w-[480px]">
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#61605c] text-[17px] tracking-[0] leading-[23px] mb-5">
                  {feature.description}
                </p>
                <button className="[font-family:'Inter',Helvetica] font-semibold text-[#202020] text-[17px] tracking-[0] leading-[23px]">
                  Learn more →
                </button>
              </div>
            </div>
            <img
              className="w-full h-auto"
              alt="Feature illustration"
              src={feature.imageSrc}
            />
          </div>
        ))}
      </div>

      {/* Cloud Options Section */}
      <div className="w-full h-[588px] [background:url(https://c.animaapp.com/md37ei6zRykloX/img/background-1.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(253,188,151,1)_0%,rgba(253,188,151,1)_100%)]">
        <div className="max-w-[1698px] mx-auto pt-[90px]">
          <div className="flex justify-between items-start max-w-[1140px] mx-auto mb-12">
            <h2 className="w-[486px] [font-family:'Inter',Helvetica] font-semibold text-black text-[54px] tracking-[-3.24px] leading-[54px]">
              Choose your own
              <br />
              adventure
            </h2>
            <p className="w-[446px] [font-family:'Inter',Helvetica] font-normal text-[#61605c] text-xl tracking-[0] leading-[23px]">
              Whether you&apos;re team AWS or Azure, N2W
              <br />
              seamlessly (and cloud-natively) integrates with
              <br />
              both. Think: backup for the multiverse.
            </p>
          </div>

          <div className="flex flex-col gap-5 max-w-[1140px] mx-auto">
            {cloudOptions.map((option, index) => (
              <Card
                key={`cloud-${index}`}
                className="h-[114px] bg-[#0000000a] rounded-[100px] border border-solid border-[#20202026] flex items-center px-5"
              >
                <img
                  className="w-[72px] h-[72px]"
                  alt={`${option.name} icon`}
                  src={option.iconSrc}
                />
                <span className="ml-5 [font-family:'Inter',Helvetica] font-semibold text-black text-4xl tracking-[-2.00px] leading-[38px]">
                  {option.name}
                </span>
                <div className="ml-auto">
                  <Button
                    variant="outline"
                    className="w-[295px] h-[72px] rounded-[100px] border border-solid border-[#20202026] [font-family:'Inter',Helvetica] font-bold text-black text-[13px]"
                  >
                    GET STARTED
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
