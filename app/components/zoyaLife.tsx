"use client";
import React, { useState } from "react";

type ButtonData = {
  [key: string]: {
    images: string[];
  };
};

const buttonData: ButtonData = {
  Travelling: {
    images: [
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/393ef3d5d918d1c1f67a29783ee298bc2e272db0b6f7308e87a468b01cb82b1c",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/45f22d1105e41cb07051e7967f99bb41dd05f979974ec4d8fda631daee41eb6d",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/7b91ce3e2ca92c37721d5f69309d8e22d5dc50e32b31711ccb75b83e49472579",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/33a3a29a92a4bc59a7951ed710738c8e23400fd0823db92847bfe2cf0ab88542",
    ],
  },
  "Content Writing": {
    images: [
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/7b91ce3e2ca92c37721d5f69309d8e22d5dc50e32b31711ccb75b83e49472579",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/33a3a29a92a4bc59a7951ed710738c8e23400fd0823db92847bfe2cf0ab88542",
    ],
  },
  "Case Studies": {
    images: [
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/sample_image_1",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/sample_image_2",
    ],
  },
  News: {
    images: [
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/sample_image_3",
      "https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/sample_image_4",
    ],
  },
};

const LifestyleComponent = () => {
  const [activeButton, setActiveButton] = useState<keyof typeof buttonData>(
    "Travelling"
  );

  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-12 max-md:px-5">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full text-center w-[1400px]">
          <div className="self-center text-2xl font-semibold text-stone-300">
            Things I Love To Do
          </div>
          <div className="mt-4 w-full text-5xl font-bold leading-tight text-white max-md:max-w-full max-md:text-4xl">
            <span className="text-fuchsia-500">My</span> Lifestyle
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-5 justify-center items-center mt-8 text-lg font-medium leading-tight max-md:max-w-full">
          {Object.keys(buttonData).map((button) => (
            <div
              key={button}
              className={`gap-2.5 self-stretch px-5 py-3.5 my-auto rounded-[50px] transition-all cursor-pointer ${
                activeButton === button
                  ? "text-white bg-gradient-primary bg-gradient-primary-hover"
                  : "text-gradient-primary border"
              }`}
              onClick={() => setActiveButton(button as keyof typeof buttonData)}
            >
              {button}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Images Section */}
      <div className="py-px mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
{/* First Column */}
<div className="flex flex-col w-1/2 gap-5 max-md:w-full">
  {buttonData[activeButton].images[0] && (
    <img
      loading="lazy"
      src={buttonData[activeButton].images[0]}
      className="object-cover w-full rounded-lg h-[60%] max-md:h-auto"
      alt={`Image 1 for ${activeButton}`}
    />
  )}
  {buttonData[activeButton].images[1] && (
    <img
      loading="lazy"
      src={buttonData[activeButton].images[1]}
      className="object-cover w-full rounded-lg h-[30%] max-md:h-auto"
      alt={`Image 2 for ${activeButton}`}
    />
  )}
</div>

{/* Second Column */}
<div className="flex flex-col w-1/2 gap-5 max-md:w-full">
  {buttonData[activeButton].images[2] && (
    <img
      loading="lazy"
      src={buttonData[activeButton].images[2]}
      className="object-cover w-full rounded-lg h-[30%] max-md:h-auto"
      alt={`Image 3 for ${activeButton}`}
    />
  )}
  {buttonData[activeButton].images[3] && (
    <img
      loading="lazy"
      src={buttonData[activeButton].images[3]}
      className="object-cover w-full rounded-lg h-[60%] max-md:h-auto"
      alt={`Image 4 for ${activeButton}`}
    />
  )}
</div>


        </div>
      </div>

      {/* Show More Button */}
      <button className="text-white w-[200px] items-center justify-center mx-auto mt-8 px-6 py-3 rounded-[50px] bg-gradient-primary bg-gradient-primary-hover transition-all">
        Show More
      </button>
    </div>
  );
};

export default LifestyleComponent;
