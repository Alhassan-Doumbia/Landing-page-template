import React from "react";
import ButtonFilled from "../Components/ButtonFilled";

function ContactView() {
  return (
    <>
      <section className="w-full min-h-[600px] flex flex-col items-center justify-center gap-8 bg-background px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-Lexand font-bold capitalize">
          A price to suit everyone
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-secondary max-w-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          fuga laudantium consequatur! Quos libero, facere ipsa placeat deserunt
          ipsam repellat. Ab enim suscipit at eos quaerat quisquam error fuga
          eum?
        </p>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-primary font-Lexand font-bold capitalize">
            40$
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl font-semibold capitalize">
            UI design kit
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 mt-7">
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-xs sm:max-w-sm md:max-w-md text-center">
            See, One price, Simple
          </p>
          <ButtonFilled label="Purchase Now" />
        </div>
      </section>
    </>
  );
}

export default ContactView;
