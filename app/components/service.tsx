import React from "react";
import Marquee from "react-fast-marquee";
import { v4 as uuidv4 } from "uuid";

const ServicesSection = () => {
  const services = [
    {
      image: "/va.png",
      title: "Tech Savvy VA",
      line1: "Core Major Pro",
      line2: "Customer Intel",
    },
    {
      image: "/google-ad.png",
      title: "Google Ads Manager",
      line1: "Lively",
      line2: "Microverse",
    },
    {
      image: "/shopify.png",
      title: "Shopify Product Manager",
      line1: "CF Tech",
      line2: "ecommerce solutions",
    },
    {
      image: "/digital-marketing.png",
      title: "Digital Marketing Manager",
      line1: "Kaliber Global",
      line2: "Marketplace",
    },
    {
      image: "/icon.png",
      title: "Technical Writer",
      line1: "The QA Lead",
      line2: "Overhead Power Line Editor",
    },
    {
      image: "/designining.png",
      title: "Designing",
      line1: "Core Major Pro",
      line2: "Customer Intel",
    },
    {
      image: "/product.png",
      title: "Product Management",
      line1: "Lively",
      line2: "Microverse",
    },
    {
      image: "/web.png",
      title: "Webflow Management",
      line1: "CF Tech",
      line2: "ecommerce solutions",
    },
  ];

  // Duplicate services array to ensure continuous scrolling
  const duplicatedServices = [...services, ...services];

  return (
    <div className="py-12 md:py-16 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Wrapper with overflow-hidden */}
      <div className="overflow-hidden">
        {/* Auto-scrolling row */}
        <Marquee gradient={false} speed={50}>
          {duplicatedServices.map((service) => (
            <div
              key={uuidv4()}
              className="flex-shrink-0 min-w-[150px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[260px] min-h-[180px] sm:min-h-[200px] md:min-h-[240px] bg-[#1C1C65] bg-opacity-30 rounded-lg p-3 md:p-4 shadow-lg flex flex-col items-center justify-center transform transition-transform hover:scale-105 backdrop-blur-sm mx-2 md:mx-4 my-4 md:my-0"
            >
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-center text-[#ecf0f1] mb-1 md:mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center text-xs sm:text-sm">
                {service.line1}
              </p>
              <p className="text-gray-400 text-center text-xs sm:text-sm">
                {service.line2}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ServicesSection;
