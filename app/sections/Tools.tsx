import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAdobeaftereffects, SiAdobefonts,
    SiAdobeillustrator,
    SiAdobephotoshop, SiAstro, SiCinema4D, SiCplusplus, SiFigma, SiFramer, SiGit,
    SiGithub,
    SiFlask,
    SiExpress,
    SiTensorflow,
    SiNodedotjs,
    SiMongodb,
    SiOpencv,
    SiSelenium,
    SiKubernetes,
    SiDocker,
    SiGooglecloud,
    SiPowerbi,
    SiAmazonaws,
    SiTerraform,
    SiZapier,
    SiJenkins,
    SiPowerautomate,
    SiOpenai,
    SiBlender,
    SiWordpress,
    SiGooglechrome, SiGooglefonts,
    SiIntellijidea, SiJavascript, SiKotlin, SiLua,
    SiNeovim, SiNextdotjs, SiReact, SiRust, SiTypescript, SiWebstorm, SiZig
} from "react-icons/si";

import { GiPegasus } from "react-icons/gi";
import { DiDjango } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import { LuBot } from "react-icons/lu";
import { IoLogoGitlab } from "react-icons/io5";
import { FaGit } from "react-icons/fa";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"MY EXPERTISE'S"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Full Stack" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <DiDjango size={50}/>
                                <SiFlask size={50}/>
                                <SiReact size={50}/>
                                <SiNodedotjs size={50}/>
                                <SiExpress size={50}/>
                                <SiMongodb size={50}/>
                                <SiWordpress size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="AI / ML" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiTensorflow size={50}/>
                                <SiOpencv size={50}/>
                                <SiAmazonaws size={50}/>
                                <SiGooglecloud size={50}/>
                                <SiPowerbi size={50}/>
                                <SiOpenai size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Automation" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiSelenium size={50}/>
                                <LuBot size={50}/>
                                <SiPowerautomate size={50}/>
                                <TbApi size={50}/>
                                <SiZapier size={50}/>
                                
                                

                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="DevOps" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <FaGit size={50}/>
                                <IoLogoGitlab size={50}/>
                                <SiDocker size={50}/>
                                <SiKubernetes size={50}/>
                                <SiTerraform size={50}/>
                                
                                

                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiAdobeaftereffects size={50}/>
                                <FaFigma size={50}/>
                                <SiBlender size={50}/>
                                <GiPegasus size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Tools;
