import React from "react";

function AboutCards({
  title = "title goes there",
  children = " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-fit max-w-[400px]">
        <svg
          fill="#101B48"
          width="50px"
          height="50px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1751 0v1920H169V0h1582Zm-115 112H290v9h-1v1678h1v20h1346V112Zm-234 235v321H514V347h888Z"
            fill-rule="evenodd"
          />
        </svg>
        <h3 className="text-[20px] font-semibold font-Lexand text-primary capitalize ">
          {title}
        </h3>
        <p className="text-[16px] text-secondary break-normal ">
          {children}
          fuga laudantium consequatur! Quos libero, facere ipsa placeat deserunt
        </p>
      </div>
    </>
  );
}

export default AboutCards;
