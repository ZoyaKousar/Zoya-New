"use client";
import React, { useState } from "react";

const Testimonials = () => {
    const experiences = [
        {
            company: "Robert Fox",
            description: "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
            timeframe: "2024-08-06",
            profilePic: "/test.png",
            starImage: "/test-star.png",
            additionalImages: ["/test-upwork.png", "/test-fiverr.png"]
        },
        {
            company: "Robert Fox",
            description: "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
            timeframe: "2024-08-06",
            profilePic: "/test.png",
            starImage: "/test-star.png",
            additionalImages: ["/test-upwork.png", "/test-fiverr.png"]
        },
        {
            company: "Robert Fox",
            description: "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
            timeframe: "2024-08-06",
            profilePic: "/test.png",
            starImage: "/test-star.png",
            additionalImages: ["/test-upwork.png", "/test-fiverr.png"]
        },
        {
            company: "Robert Fox",
            description: "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
            timeframe: "2024-08-06",
            profilePic: "/test.png",
            starImage: "/test-star.png",
            additionalImages: ["/test-upwork.png", "/test-fiverr.png"]
        },
        {
            company: "Robert Fox",
            description: "Fantastic team to work with. Really stepped up and took care of everything we asked them to do for us! Would rehire her in the future!. Highly recommended!",
            timeframe: "2024-08-06",
            profilePic: "/test.png",
            starImage: "/test-star.png",
            additionalImages: ["/test-upwork.png", "/test-fiverr.png"]
        },
    
    
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < experiences.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div
            id="professional"
            className="relative flex flex-col items-center pr-16 pl-16 w-full bg-center min-h-[738px] rounded-[60px] max-md:px-5 py-10 md:py-24 max-md:max-w-full"
        >
            <div className="max-w-full text-5xl text-center leading-50px text-gray-50 w-[540px] max-md:max-w-full max-md:text-4xl">
                <span className="font-medium text-white">Testimonials</span>
                <p className="text-xl text-medium mt-6">See what my <span className="text-[#C961DE]">clients</span> have to say about working with me and the results I <span className="text-[#C961DE]">helped</span> them achieve.</p>
            </div>
            <div className="relative w-full max-w-7xl mx-auto mt-24 h-full">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full">
                    {experiences
                        .slice(currentIndex, currentIndex + itemsPerPage)
                        .map((exp, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col self-stretch py-7 h-full my-auto rounded-xl backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-full transition-all duration-500 ease-in-out"
                            >
                                {/* Profile picture */}
                                <div className="flex flex-row">
                                    <img
                                        src={exp.profilePic}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full ml-6"
                                    />
                                    <div>      <div className="self-start ml-6 text-xl text-white font-medium max-md:ml-2.5">
                                        {exp.company}
                                    </div>
                                        <div className="text-sm text-gray-400 ml-6 mt-2">{exp.timeframe}</div></div>
                                </div>

                                {/* Star rating image */}
                                <img
                                    src={exp.starImage}
                                    alt="Rating"
                                    className=" h-4 w-24 mt-3 ml-6"
                                />
                                <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                                    <div className="text-lg font-light">{exp.description}</div>
                                    {/* "Read More" Button */}
                                    <button className="mt-4 font-semibold text-[#C961DE] self-start">Read More</button>
                                </div>

                                {/* Additional images on the right */}
                                <div className="flex justify-end mt-4 pr-6 space-x-4">
                                    {exp.additionalImages.map((imgSrc, imgIdx) => (
                                        <img
                                            key={imgIdx}
                                            src={imgSrc}
                                            alt="Additional"
                                            className="h-6 rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>

                <div className="hidden md:flex absolute -bottom-20 left-1/2 transform -translate-x-1/2 gap-2 items-center z-0 px-4 py-2.5 rounded-xl border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
                    {[...Array(Math.ceil(experiences.length / itemsPerPage))].map((_, idx) => (
                        <div
                            key={idx}
                            className={`flex shrink-0 self-stretch my-auto w-9 h-2 rounded ${currentIndex / itemsPerPage === idx ? 'bg-white' : 'bg-white bg-opacity-40'
                                }`}
                        />
                    ))}
                </div>

                {currentIndex + itemsPerPage < experiences.length && (
                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute right-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#C961DE] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-right.png"
                            alt="Next"
                        />
                    </button>
                )}

                {currentIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute left-[-32px] top-1/2 transform -translate-y-1/2 z-50 bg-[#C961DE] text-white rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            loading="lazy"
                            src="/arrow-left.png"
                            alt="Previous"
                        />
                    </button>
                )}
            </div>

            <div className="hidden max-md:flex flex-wrap gap-8 justify-center items-center">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col self-stretch py-7 my-auto rounded-2xl backdrop-blur-[7.5px] bg-white bg-opacity-10 min-w-[240px] w-[298px] transition-all duration-500 ease-in-out"
                    >
                        {/* Profile picture */}
                        <div className="flex flex-row">
                                    <img
                                        src={exp.profilePic}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full ml-6"
                                    />
                                    <div>      <div className="self-start ml-6 text-xl text-white font-medium max-md:ml-2.5">
                                        {exp.company}
                                    </div>
                                        <div className="text-sm text-gray-400 ml-6 mt-2">{exp.timeframe}</div></div>
                                </div>

                                {/* Star rating image */}
                                <img
                                    src={exp.starImage}
                                    alt="Rating"
                                    className=" h-4 w-24 mt-3 ml-6"
                                />
                                <div className="flex flex-col px-6 mt-6 text-white leading-6 max-md:px-5">
                                    <div className="text-lg font-light">{exp.description}</div>
                                    {/* "Read More" Button */}
                                    <button className="mt-4 font-semibold text-[#C961DE] self-start">Read More</button>
                                     {/* Additional images on the right */}
                                <div className="flex justify-end mt-4 pr-6 space-x-4">
                                    {exp.additionalImages.map((imgSrc, imgIdx) => (
                                        <img
                                            key={imgIdx}
                                            src={imgSrc}
                                            alt="Additional"
                                            className="h-6 rounded-full"
                                        />
                                    ))}
                                </div>
                                </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
