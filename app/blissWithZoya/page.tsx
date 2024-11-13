import * as React from "react";
import ContactSection from "../components/contactForm";
import LifestyleComponent from "../components/zoyaLife";
const BlissWithZoya = () => {
    return (
        <div className="flex mt-32  overflow-hidden flex-col justify-center">
            <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col justify-center items-center px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 items-start max-w-full w-[888px]">
                        <div className="flex flex-col xl:flex-row gap-10 xl:gap-36  mt-0  px-6 md:px-16 max-w-7xl mx-auto">
                            <div className="max-w-2xl mx-auto text-white mb-12">
                                <h2 className="text-4xl md:text-6xl text-center font-semibold mb-4">
                                    Bliss With Zoya
                                </h2>
                                <p className="text-2xl text-center font-light xl:max-w-[610px]">
                                    Discover Zoya&apos;s <span className="text-[#C961DE]">Journey</span> of creativity and style, showcasing captivating visuals and <span className="text-[#C961DE]">inspired</span> storytelling.                </p>
                            </div>
                        </div>

                       <LifestyleComponent/>
                    </div>
                </div>
                <ContactSection />
            </div>
        </div>
    );
}
export default BlissWithZoya