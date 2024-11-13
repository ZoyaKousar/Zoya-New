"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonScrollToSection from "./buttonScroll";

export default function Footer() {
    const pathname = usePathname();

    const isActiveLink = (path: string) => pathname === path ? "text-[#C961DE]" : "text-white";

    return (
        <div className="flex flex-col items-center justify-between px-16 py-6 w-full min-h-[289px] rounded-tl-3xl rounded-tr-3xl bg-[#2F2F8A] bg-opacity-10 border border-solid border-white border-opacity-10 backdrop-blur-md max-md:px-5 max-md:max-w-full">

            {/* Center Section - Menu */}
            <div className="flex flex-col items-center mt-6 w-full">
                <div className="flex text-sm justify-center gap-10 text-base tracking-tight text-gray-50 mb-6 leading-50px">
                    <Link href="/" className={`cursor-pointer text-sm md:text-lg ${isActiveLink("/")}`}>
                        Home
                    </Link>
                    <Link href="/service" className={`cursor-pointer text-sm md:text-lg ${isActiveLink("/service")}`}>
                        Services
                    </Link>
                    <ButtonScrollToSection
                        content="Work Experience"
                        classes="cursor-pointer text-sm md:text-lg"
                        destination="work-experience"
                        key="Work-Experience-button"
                    />
                    <ButtonScrollToSection
                        content="Bliss with Zoya"
                        classes="cursor-pointer text-sm md:text-lg"
                        destination="bliss"
                        key="Bliss-button"
                    />
                </div>
                {/* Logo Section */}
                <div className="flex justify-center gap-8 mt-4">
                    <a href="https://www.upwork.com/freelancers/~01823bc1bb1258ae0a?mp_source=share" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-upwork.png"
                            alt="Upwork"
                            className="h-10 object-contain"
                        />
                    </a>
                    <a href="https://www.fiverr.com/zoyakousar?up_rollout=true" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-fiverr.png"
                            alt="Fiverr"
                            className="h-10 object-contain"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/zoyaadnan" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/footer-linkedin.png"
                            alt="LinkedIn"
                            className="h-10 object-contain"
                        />
                    </a>
                </div>

            </div>

            {/* Divider */}
            <div className="w-full border-t border-white border-opacity-20"></div>

            {/* Bottom Section - Copyright */}
            <div className="w-full text-center text-sm text-white">
                © 2024 Zoya. All Rights Reserved.
            </div>
        </div>
    );
}
