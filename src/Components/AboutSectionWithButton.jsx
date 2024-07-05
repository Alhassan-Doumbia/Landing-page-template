import React from "react";
import ButtonFilled from "./ButtonFilled";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
function AboutSectionWithButton({ children }) {
  return (
    <>
      <div
        className="flex flex-col md:flex-row w-full h-fit"
        id="content-Container"
      >
        <div
          id="illustration"
          className="w-full md:w-1/2 h-fit flex flex-col items-center justify-start"
        >
          {children}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl text-primary font-Lexand font-bold">
            Light, Fast & Powerful
          </h1>
          <ScrollAnimation animateIn="fadeIn">
            <p className="text-base md:text-lg text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              fuga laudantium consequatur! Quos libero, facere ipsa placeat
              deserunt ipsam repellat. Ab enim suscipit at eos quaerat quisquam
              error fuga eum? Eum blanditiis cum, beatae quaerat vel ad soluta
              animi aliquam reprehenderit cupiditate dolore alias eligendi quis
              ipsam. Nulla ipsa sint dolorem repellendus, facere perspiciatis.
              Tempore blanditiis enim nihil culpa quisquam!
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export default AboutSectionWithButton;
