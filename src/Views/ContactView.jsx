import React from "react";
import ButtonFilled from "../Components/ButtonFilled";

function ContactView() {
  return (
    <>
      <section className="w-full min-h-[600px] h-fit  flex flex-col items-center justify-center gap-8 bg-background px-[50px]">
        <h1 className=" text-[35px] text-primary font-Lexand font-bold capitalize">
          A price to suit everyone
        </h1>
        <p className="text-[18px] text-secondary max-w-[600px] w-fit h-fit text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fuga laudantium consequatur! Quos libero, facere ipsa placeat deserunt
          ipsam repellat. Ab enim suscipit at eos quaerat quisquam error fuga
          eum?
        </p>
        <div className="flex  flex-col items-center justify-center">
          <h1 className=" text-[35px] text-primary font-Lexand font-bold capitalize">
            40$
          </h1>
          <p className="mt-2 text-[18px] font-semibold capitalize">UI design kit </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-7">
        <p className="text-[18px] text-secondary w-[400px] h-fit text-center ">
            See, One price, Simple
        </p>
        <ButtonFilled label="Purchase Now"/>
        </div>
      
      </section>
    </>
  );
}

export default ContactView;
