import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container flex flex-col justify-center sm:rounded-xl mx-auto bg-white sm:w-[400px] sm:h-[460px] rounded-none w-full h-[100vh] break-keep sm:p-12 p-8 ">
        <div className="flex flex-col justify-center gap-4 bg-white w-full sm:h-auto h-[100vh] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 21 21"
          >
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
              />
            </g>
          </svg>
          <p className="font-extrabold text-5xl text-[var(--Charcoal-Grey)] my-3">
            {" "}
            Thanks for subscribing!
          </p>
          <h6>
            {" "}
            A confirmation email has been sent to <b>ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your
            subscription.
          </h6>
        </div>

        <div className="h-14">
          <button className="w-full rounded-md bg-[var(--Dark-Slate-Grey)] align-bottom hover:button-gradient text-white sm:mt-5 py-2 px-4">
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
