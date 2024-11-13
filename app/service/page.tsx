
import * as React from "react";
import Accordion from "../components/accordian";
import ContactSection from "../components/contactForm";
const Service = () => {
  return (

    <div className="flex mt-32  overflow-hidden flex-col justify-center">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start max-w-full w-[888px]">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-36  mt-0  px-6 md:px-16 max-w-7xl mx-auto">
              <div className="max-w-2xl mx-auto text-white mb-12">
                <h2 className="text-4xl md:text-6xl text-center font-semibold mb-4">
                  Services
                </h2>
                <p className="text-2xl text-center font-light xl:max-w-[610px]">
                  Offering tailored services to enhance your brand&apos;s creativity, impact and growth.
                </p>
              </div>
            </div>

            <div className="flex flex-col grow shrink min-w-[240px] w-[404px] max-md:max-w-full text-white">
              <div className="text-2xl leading-none text-[#C961DE] uppercase tracking-[3px] max-md:max-w-full">
                My Services
              </div>
              <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                <div className="text-3xl md:text-4xl font-extrabold text-white leading-10 text-[#C961DE] max-md:max-w-full">
                  Services <span className="text-[#C961DE]">Designed</span> to
                  Inspire and Elevate Your Brand
                </div>
                <div className="mt-6 text-2xl leading-8 text-white max-w-[300px]">
                  Services Designed to Inspire and Elevate Your Brand
                </div>
              </div>
            </div>
            <div className="flex flex-col grow shrink text-2xl font-bold leading-none text-center text-white min-w-[240px] tracking-[2px] w-[262px]">
              <div className="flex gap-8 items-center w-full">
                <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                  QA Testing
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/bb4f8d6da5eaecfd84a697663b4401ad8359e723f4b3f5c48221756e7933c626?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                />
              </div>
              <div className="flex gap-8 items-center mt-10 w-full whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/e6d73a81cc34e9fc264b15f64450d900a8fae2ac510140ff99db0f6c72f3f2d4?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                />
                <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                  Development
                </div>
              </div>
              <div className="flex gap-8 items-center mt-10 w-full whitespace-nowrap">
                <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                  Marketing
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/b663d3c6e8c5f47dc2903a267bbf119c6abae5e2c10925bec6ebe49c12c065cd?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.92] w-[60px]"
                />
              </div>
              <div className="flex gap-8 items-center mt-10 w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/d7c2befb82b4737a2232eb0a409b45429ea0c43a69a42f05a268f939f1c7de6e?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.02] w-[60px]"
                />
                <div className="gap-2.5 self-stretch px-2.5 py-4 my-auto bg-[#C961DE] rounded-[1000px] w-[238px]">
                  VA Services
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="py-6"><Accordion /></div>
        
        <div className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex relative z-10 flex-col justify-center px-2 py-32 mt-0 w-full max-w-[1131px] min-h-[557px] max-md:py-24 max-md:max-w-full">

            <div className="flex relative flex-wrap gap-10 justify-center items-center -mb-5 max-md:mb-2.5 max-md:max-w-full">
              <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[376px] max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="text-3xl md:text-4xl font-extrabold leading-tight text-white max-md:max-w-full">
                    Our <span className="text-[#C961DE]">Streamlined</span>{" "}
                    Approach
                  </div>
                  <div className="mt-8 text-xl md:text-2xl leading-8 text-stone-300 max-md:max-w-full">
                    Achieve outstanding results with a streamlined process
                    designed for clarity, efficiency, and quality. From initial
                    discovery to final optimization, we ensure each service is
                    delivered with precision, tailored to meet your unique
                    goals.
                  </div>
                </div>
              </div>
              <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[423px] max-md:max-w-full">
                <div className="flex gap-10 items-center max-md:max-w-full">
                  <div className="self-stretch my-auto text-7xl font-extrabold tracking-tighter leading-none text-[#C961DE] max-md:text-4xl">
                    1
                  </div>
                  <div className="self-stretch my-auto text-xl md:text-3xl font-bold leading-none text-stone-300">
                    Discovery and Planning
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 items-center self-stretch mt-8 w-full max-md:max-w-full">
                  <div className="self-stretch my-auto text-7xl font-extrabold tracking-tighter leading-none text-[#C961DE] max-md:text-4xl">
                    2
                  </div>
                  <div className="self-stretch my-auto text-xl md:text-3xl font-bold leading-none text-stone-300">
                    Execution and Development
                  </div>
                </div>
                <div className="flex gap-10 items-center mt-8 max-md:max-w-full">
                  <div className="self-stretch my-auto text-7xl font-extrabold tracking-tighter leading-none text-[#C961DE] max-md:text-4xl">
                    3
                  </div>
                  <div className="self-stretch my-auto text-xl md:text-3xl font-bold leading-none text-stone-300">
                    Review and Optimization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
export default Service