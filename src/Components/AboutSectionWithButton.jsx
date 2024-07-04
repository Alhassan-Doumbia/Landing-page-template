import React from "react";
import ButtonFilled from "./ButtonFilled";

function AboutSectionWithButton({ children }) {
  return (
    <>
      <div className="flex w-full h-fit" id="content-Container">
        <div
          id="illustration"
          className="w-[50%] h-fit flex flex-col items-center justify-start"
        >
          {children}
        </div>
        <div className="w-[50%]  flex flex-col justify-center gap-6">
          <h1 className=" text-[35px] text-primary font-Lexand font-bold">
            Light, Fast & Powerful
          </h1>
          <p className="text-[18px] text-secondary ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fuga laudantium consequatur! Quos libero, facere ipsa placeat
            deserunt ipsam repellat. Ab enim suscipit at eos quaerat quisquam
            error fuga eum? Eum blanditiis cum, beatae quaerat vel ad soluta
            animi aliquam reprehenderit cupiditate dolore alias eligendi quis
            ipsam. Nulla ipsa sint dolorem repellendus, facere perspiciatis.
            Tempore blanditiis enim nihil culpa quisquam!
          </p>
          <ButtonFilled label="Purchase Now" />
        </div>
      </div>
    </>
  );
}

export default AboutSectionWithButton;
