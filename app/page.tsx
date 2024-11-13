import React from 'react'
import ServicesSection from './components/service'
import Testimonials from './components/testimonials'
import ContactSection from './components/contactForm'
import Link from 'next/link'


const Homepage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-full max-md:max-w-full">
                {/* HERO SECTION */}
                <section className="mt-32 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:p-16 md:min-h-[609px] lg:min-h-[670px] xl:min-h-[730px] max-w-7xl mx-auto">
                    <div className="md:w-1/2 justify-center items-top">
                        <h2 className="text-3xl md:text-6xl text-white font-bold mb-10">A Full stack Digital manager</h2>
                        <p className="text-base md:text-lg mb-10 text-white" style={{ opacity: 0.8 }}>
                            Integrated project management, quality assurance, web development and digital marketing solutions to build or improve your brand as well as activate results.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link
                                href="https://calendly.com/zoyakou"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-700 text-center w-[200px] text-white px-6 py-3 rounded-[50px] hover:bg-fuchsia-500">
                                Hire me
                            </Link>
                            <button className="text-white w-[200px] px-6 py-3 rounded-[50px] bg-gradient-primary bg-gradient-primary-hover transition-all">
                                Download CV
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-end items-center self-center">
                        <img
                            src="/zoya-hero.png"
                            alt="Description"
                            className="h-[350px] md:h-[450px] rounded-lg"
                        />
                    </div>
                </section>

                {/* Professional Experience SEction */}
                <div className="flex flex-col justify-center items-center py-20 max-md:px-5">
                    <div className="flex flex-wrap gap-6 md:gap-32 justify-center items-center max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/c292b03f0d604e98e26fca730e1d07021596f826e97eac336e83cf66c728a91e?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                            className="object-contain w-[100px] md:w-[160px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/05eb286349b808063635571ad2e87141e65dc7ed00680834b60c82b6ee175838?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                            className="object-contain  w-[100px] md:w-[160px]"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/2802fb2a02bbfb16dca91ffd52c311c108d9955416817760d8971e3e29ab45f1?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                            className="object-contain  w-[100px] md:w-[160px]"
                        />
                    </div>
                </div>

                {/* ABout Me Sectiom */}
                <section className="flex items-center p-4 justify-center md:min-h-[609px] lg:min-h-[670px] xl:min-h-[730px]">
                    <div className="relative">
                        <img
                            src="/zoya-about.png"
                            alt="Centered Image"
                            className="w-full max-w-md xl:max-w-xl rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg">
                            <img
                                src="/zoyaAB-1.png"
                                alt="Centered Image"
                                className="h-[80px] md:h-[120px]"
                            />
                            <h2 className="text-xl md:text-3xl text-white font-bold mb-2">About me</h2>
                            <p className="text-md md:text-lg text-white text-center max-w-xs">
                                I&apos;ve discovered my passion for the T-trio: the joys of Tea, the thrill of Traveling, and the Tech that transforms. I&apos;m Zoya, a Tech-savvy virtual assistant with a the ease of simplifying the most complicated tasks. From QA automation and technical writing to website and mobile app development, I specialize in creating efficient solutions that work for you.....read more
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <div className="flex flex-col justify-center items-center px-6 py-6 md:px-16 md:py-16 text-fuchsia-500">
                    <div className="flex flex-wrap justify-center items-center px-2.5 w-full max-md:max-w-full">
                        <div className="flex flex-col justify-center items-start self-stretch px-12 py-8 my-auto border rounded-tl-md rounded-bl-md border-blue-800 border-solid min-h-[176px] min-w-[240px] w-[380px] max-md:px-5">
                            <div className="flex flex-col max-w-full w-[198px]">
                                <div className="text-4xl font-extrabold leading-tight">9+</div>
                                <div className="mt-3.5 text-2xl font-medium leading-none">
                                    Years of experience
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start self-stretch px-12 py-11 my-auto text-white  bg-indigo-900 border border-blue-800 border-solid min-h-[176px] min-w-[240px] w-[380px] max-md:px-5">
                            <div className="flex flex-col max-w-full w-[214px]">
                                <div className="text-4xl font-extrabold leading-tight">50+</div>
                                <div className="mt-3.5 text-2xl font-medium leading-none">
                                    Projects Completed
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start self-stretch px-12 py-11 my-auto rounded-none  rounded-tr-md rounded-br-md border border-blue-800 border-solid min-h-[176px] min-w-[240px] w-[380px] max-md:px-5">
                            <div className="flex flex-col max-w-full w-[222px]">
                                <div className="text-4xl font-extrabold leading-tight">10+</div>
                                <div className="mt-3.5 text-2xl font-medium leading-none">
                                    Successful Clients
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Work */}
                <div className="flex flex-col px-6 md:px-16 py-6 md:py-16">
                    <div className="flex flex-col justify-center items-center py-12 mt-4 max-md:max-w-full">
                        <div className="flex flex-col p-px max-w-full w-[1149px]">
                            <div className="flex z-10 flex-col text-4xl font-bold leading-tight text-center text-white md:min-h-[507px] max-md:max-w-full">
                                <div className="max-md:max-w-full">
                                    <span className="">My </span>
                                    <span className="text-fuchsia-500">Recent</span>
                                    <span className=""> work</span>
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/8651c90106b6080675be9fb37f7f80797d8ffdf2886a52966c55b92e79f36e3c?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                                    className="object-contain mt-16 w-full aspect-[3.48] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center px-6 md:px-16 py-6 md:py-16 text-2xl tracking-wide leading-8 text-center text-white max-md:px-5">
                    <div className="flex flex-col max-w-full w-[1320px]">
                        <div className="self-center max-md:max-w-full">
                            <span className="text-3xl md:text-4xl font-bold">
                                I&apos;m currently looking to join a cross-functional team
                            </span>
                            <br />
                            <span className="text-xl md:text-3xl font-medium leading-[56px]">
                                that values improving people&apos;bs lives through accessible design{" "}
                            </span>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/4bbac2e9fd8543319fbc188f9510a76b/a7bc31346f3abf7b8c7df9c6b1305c573e848dc9153df4467f0e4b0a55537361?apiKey=4bbac2e9fd8543319fbc188f9510a76b&"
                            className="object-contain z-10 mt-8 mb-0 w-full aspect-[1.88] max-md:mb-2.5 max-md:max-w-full"
                        />
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 md:mb-8">
                    <span className="text-fuchsia-500">My</span> Services
                </h2>
                <ServicesSection />

                {/* Call-to-action */}
                <p className="text-center text-sm sm:text-base md:text-lg font-medium text-[#C2C2C2] mt-6 sm:mt-8 md:mt-10 mb-4 sm:mb-6">
                    Let&apos;s schedule a call to get the best quotation for your project!
                </p>
                <div className="flex justify-center">
                    <Link
                        href="https://calendly.com/zoyakou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm sm:text-base w-[200px] text-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-primary bg-gradient-primary-hover transition-all"
                    >
                        Schedule Meeting
                    </Link>
                </div>
                <Testimonials />
                <ContactSection />

            </div>
        </div >
    )
}

export default Homepage


















