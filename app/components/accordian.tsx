"use client"

import { useState } from "react";

interface AccordionProps {
    title: string;
    headerIcon?: string; // Optional prop for the icon image URL
  }
  
  const Accordion: React.FC<AccordionProps> = ({ title, headerIcon }) => {
    const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="w-full px-6  max-md:max-w-full">
      <div className="w-full max-w-[1170px] mx-auto">
        
        {/* Accordion Header */}
        <div
          className="flex flex-col text-2xl md:text-4xl font-bold tracking-tighter leading-none text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Top Divider Line */}
          <div className="w-full bg-[#C961DE] min-h-[1px]" />

          {/* Header Content */}
          <div className="flex flex-wrap gap-4 justify-between items-center py-4 w-full max-md:text-4xl">
            <div className="flex items-center gap-4 min-w-[240px]">
              <img
                loading="lazy"
                src={headerIcon}
                className="object-contain w-20 aspect-square"
                alt="icon"
              />
              <div>{title}</div>
            </div>
            <span className=" bg-[#C961DE] h-10 w-10 text-center justify-center items-center  rounded-full transform transition-transform">
              {isOpen ? "-" : "+"}
            </span>
          </div>

          {/* Bottom Divider Line */}
          <div className="w-full bg-[#C961DE] min-h-[1px]" />
        </div>

        {/* Accordion Content */}
        {isOpen && (
          <div className="flex flex-wrap gap-10 justify-center items-center mt-8 max-w-full w-[962px] mx-auto">
            <div className="flex flex-col grow pt-3 w-64 min-w-[240px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/0799282a76e7f2529eb1c2ad8b5b831b7dcefeb9a9100efbcd9360fbaf05f4f6?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                className="object-contain w-full aspect-square"
                alt="content image"
              />
            </div>
            <div className="flex flex-col min-w-[240px] w-[441px]">
              <div className="text-2xl md:text-4xl font-extrabold text-white">
                Working Process
              </div>
              <div className="mt-4 text-lg md:text-2xl text-white">
                Ensuring software{" "}
                <span className="text-[#C961DE]">quality</span> and reliability
                with comprehensive QA testing from{" "}
                <span className="text-[#C961DE]">start to finish.</span>
              </div>
              <div className="flex flex-col mt-6 text-lg md:text-2xl text-stone-300 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/c297df85588a402b30d1d6629cc4db9eeae165490f56cd3f3a1fa5ad09d38d57?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-8 aspect-square"
                    alt="sub-icon"
                  />
                  <span>Requirement Analysis</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/c297df85588a402b30d1d6629cc4db9eeae165490f56cd3f3a1fa5ad09d38d57?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-8 aspect-square"
                    alt="sub-icon"
                  />
                  <span>Test Case Design and Execution</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/c297df85588a402b30d1d6629cc4db9eeae165490f56cd3f3a1fa5ad09d38d57?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                    className="object-contain w-8 aspect-square"
                    alt="sub-icon"
                  />
                  <span>Bug Tracking and Reporting</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function AccordionGroup() {
  return (
    <div className="flex flex-col gap-4">
      <Accordion
        title="Development"
        headerIcon="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/eb2dba6b7289569df38db7d452b185f8a3b5ba305565ae22ed66a55c2a983c01?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
      />
      <Accordion
        title="Marketing"
        headerIcon="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/4122dad74c2522c7ebbf99562af37fbe2580609fed7a9b358d5067509a3001ef?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
      />
      <Accordion
        title="QA Testing"
        headerIcon="/qa-testing.png"
      />
    </div>
  );
}
