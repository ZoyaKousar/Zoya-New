"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const getNavLinkClass = (link:string) =>
    `cursor-pointer px-4 xl:px-10 py-3 rounded-full transition-colors ${activeLink === link
      ? "bg-white text-[#2F2F8A]"
      : "hover:bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    }`;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between lg:justify-center items-center px-6 py-6 bg-[#2F2F8A] bg-opacity-60 shadow-md max-w-8xl mx-auto">
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <Link href="/">
            <img src="/zoya-logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-xl">
          <Link href="/" onClick={() => setActiveLink("/")}>
            <div className={getNavLinkClass("/")}>Home</div>
          </Link>
          <Link href="/service" onClick={() => setActiveLink("/service")}>
            <div className={getNavLinkClass("/service")}>Services</div>
          </Link>
          <Link href="/work-experience" onClick={() => setActiveLink("/work-experience")}>
            <div className={getNavLinkClass("/work-experience")}>Work Experience</div>
          </Link>
          <Link href="/" >
            <div > <img
              loading="lazy"
              src="/zoya-logo.png"
              className="object-contain h-12"
              alt="Logo"
            /></div>
          </Link>
          <Link href="/about" onClick={() => setActiveLink("/about")}>
            <div className={getNavLinkClass("/about")}>About Me</div>
          </Link>
          <Link href="/blissWithZoya" onClick={() => setActiveLink("/bliss")}>
            <div className={getNavLinkClass("/blissWithZoya")}>Bliss with Zoya</div>
          </Link>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            hashSpy={true}
            onClick={() => setActiveLink("#contact")}
            className={getNavLinkClass("#contact")}
          >
            Contact
          </ScrollLink>
        </div>

        {/* Mobile Menu Icon */}
     {/* Mobile Menu Icon */}
     <button onClick={toggleSidebar} className="lg:hidden p-2">
          <img
            src={isSidebarOpen ? "/cross-icon.svg" : "/main-menu.png"}
            alt={isSidebarOpen ? "Close Menu" : "Open Menu"}
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed  inset-0 bg-[#2F2F8A] bg-opacity-50 z-40" onClick={closeSidebar}>
          <div
            className="fixed right-0 top-0 h-full bg-[#2F2F8A] text-white w-64 p-8 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-6 mt-[90px]">
              <li onClick={closeSidebar}>
                <Link href="/" className={getNavLinkClass("/")}>Home</Link>
              </li>
              <li onClick={closeSidebar}>
                <Link href="/service" className={getNavLinkClass("/service")}>Services</Link>
              </li>
              <li onClick={closeSidebar}>
                <Link href="/work-experience" className={getNavLinkClass("/work-experience")}>Work Experience</Link>
              </li>
              <li onClick={closeSidebar}>
                <Link href="/about" className={getNavLinkClass("/about")}>About Me</Link>
              </li>
              <li onClick={closeSidebar}>
                <Link href="/blissWithZoya" className={getNavLinkClass("/blissWithZoya")}>Bliss with Zoya</Link>
              </li>
              <li onClick={closeSidebar}>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  hashSpy={true}
                  className={getNavLinkClass("#contact")}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
