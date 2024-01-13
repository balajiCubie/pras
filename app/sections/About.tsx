import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Coding The Future : From 2017"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Mastering the Digital Landscape: Armed with a Master's in Computer Science and 6 years of rich experience, my professional journey has evolved me into a dynamic full-stack developer, an innovative automation and AI engineer, and a skilled DevOps expert" />

                        <AnimatedBody
                            delay={0.1}
                            text="My passion lies in harnessing the latest technological trends to build impactful, efficient solutions. Each project I undertake is a blend of technical prowess and creative problem-solving, driven by my desire to stay at the cutting edge of technology. "
                        />

                        <AnimatedBody
                            delay={0.2}
                            text=" Currently, I am engaged in several exciting projects, showcasing my ability to navigate and integrate complex systems. Eager for new challenges and collaborations, I am always ready to explore the next technological frontier."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
