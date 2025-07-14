import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Product links data
  const productLinks = [
    { text: "Product Overview" },
    { text: "AWS Backup" },
    { text: "Azure Backup" },
    { text: "Free Trial" },
    { text: "Get a Demo" },
    { text: "Pricing" },
  ];

  // Solutions links data
  const solutionsLinks = [
    { text: "Compliance" },
    { text: "Cost Savings" },
    { text: "Disaster Recovery" },
    { text: "Public Sector" },
    { text: "Ransomware" },
    { text: "Resellers & MSPs" },
  ];

  // Resources links data
  const resourcesLinks = [
    { text: "Blog" },
    { text: "Documentation" },
    { text: "Cost Savings\nCalculator", multiline: true },
    { text: "Tutorials" },
    { text: "TL;DR" },
  ];

  // Company links data
  const companyLinks = [
    { text: "About N2W" },
    { text: "Careers" },
    { text: "Contact" },
    { text: "Customer Stories" },
    { text: "Events" },
  ];

  // Support links data
  const supportLinks = [
    { text: "Knowledge Base" },
    { text: "Submit a Ticket" },
    { text: "Trial Install Guide" },
  ];

  // Legal links data
  const legalLinks = [{ text: "EULA" }];

  return (
    <footer className="w-full py-16 bg-transparent relative">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-3">
            <h2 className="font-['Inter',Helvetica] font-bold text-black text-5xl tracking-[-1.00px] leading-[43.2px]">
              RIDICULOUSLY
              <br />
              EASY BACKUP
              <br /> &amp; RECOVERY
            </h2>
          </div>

          {/* Certification badges */}
          <div className="col-span-5 col-start-7 flex flex-row items-start gap-4">
            <img
              className="w-[200px] h-[74px]"
              alt="Iso compliant badge"
              src="https://c.animaapp.com/md37ei6zRykloX/img/iso-compliant-badge.svg"
            />
            <img
              className="w-[292px] h-[120px]"
              alt="Aws partner network"
              src="https://c.animaapp.com/md37ei6zRykloX/img/aws-partner-network-badge-showing-our-competencies--public-secto.svg"
            />
          </div>

          {/* Footer links section */}
          <div className="col-span-12 mt-8">
            <div className="grid grid-cols-5 gap-8">
              {/* Product column */}
              <div>
                <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                  Product
                </h3>
                <ul className="space-y-3">
                  {productLinks.map((link, index) => (
                    <li key={`product-${index}`}>
                      <a
                        href="#"
                        className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions column */}
              <div>
                <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutionsLinks.map((link, index) => (
                    <li key={`solution-${index}`}>
                      <a
                        href="#"
                        className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources column */}
              <div>
                <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resourcesLinks.map((link, index) => (
                    <li key={`resource-${index}`}>
                      <a
                        href="#"
                        className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                      >
                        {link.multiline ? (
                          <span className="whitespace-pre-line">
                            {link.text}
                          </span>
                        ) : (
                          link.text
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company column */}
              <div>
                <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link, index) => (
                    <li key={`company-${index}`}>
                      <a
                        href="#"
                        className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support and Legal column */}
              <div>
                <div>
                  <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                    Support
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {supportLinks.map((link, index) => (
                      <li key={`support-${index}`}>
                        <a
                          href="#"
                          className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-['Inter',Helvetica] font-bold text-[#132036] text-[17px] tracking-[-0.20px] leading-[17px] mb-6">
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {legalLinks.map((link, index) => (
                      <li key={`legal-${index}`}>
                        <a
                          href="#"
                          className="font-['Inter',Helvetica] font-normal text-[#61605c] text-sm tracking-[0] leading-[21px]"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom section */}
          <div className="col-span-12 mt-12">
            <Separator className="mb-8" />
            <div className="flex flex-row justify-between items-center">
              <div>
                <img
                  className="w-[180px] h-[33px]"
                  alt="Link"
                  src="https://c.animaapp.com/md37ei6zRykloX/img/link-1.svg"
                />
                <p className="font-['Inter',Helvetica] font-normal text-[#565f70] text-sm tracking-[0.20px] leading-[14px] mt-4">
                  © N2W Software, Inc. All rights reserved.
                </p>
              </div>
              <div>
                <p className="font-['Inter',Helvetica] font-bold text-black text-[13px] tracking-[0] leading-[13px] mb-6">
                  FOLLOW US ON SOCIAL
                </p>
                <img
                  className="w-[153px] h-[22px]"
                  alt="Social media links"
                  src="https://c.animaapp.com/md37ei6zRykloX/img/list.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
