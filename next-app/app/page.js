import React from "react";

const page = () => {
  return (
    <div className="container flex mx-auto rounded-xl bg-white w-3/6 h-3/4">
      <div className="mx-10 my-12 box-border w-1/2">
        <h1 className="font-extrabold text-[var(--Charcoal-Grey)] my-4 text-4xl">
          {" "}
          Stay updated!
        </h1>
        <p>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="my-5">
          <div className="list-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
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
            <p> Product discovery and building what matters</p>
          </div>
          <div className="list-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
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
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="list-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
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
            <p> And much more!</p>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold">Email address</p>
          <input className="border-2 rounded-md border-gray-400 w-full py-1 px-3 my-2" type="text" name="email" />
          <button className="rounded-md w-full bg-orange-500 mt-5 px-4 py-3 text-sm">Subscribe to monthly newsletter</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default page;
