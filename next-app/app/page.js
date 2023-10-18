"use client";

import React, { useState } from "react";
import Image from "next/image";
import mainImage from "../public/illustration-sign-up-desktop.svg";

function page() {
  const [email, setEmail] = useState([]);

  function fetchEmail(e) {
    setEmail(e.target.value);
  }
  
  localStorage.setItem("email", email);
  
  return (
    <div className="md:container flex sm:flex-row sm:m-auto flex-col-reverse box-border sm:rounded-xl m-0 bg-white sm:w-[100%] md:w-[728px] sm:h-[500px] w-full h-[100vh] rounded-none">
      <div className="md:mx-10 md:my-12  sm:w-[50%] break-keep sm:mx-5 sm:my-5 m-5">
        <h1 className="font-extrabold text-[var(--Charcoal-Grey)] mb-4 mt-2 text-4xl">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="my-5">
          <div className="list-div">
            <div>
              <svg
                className="w-[21px]"
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
            </div>
            <div>
              <p> Product discovery and building what matters</p>
            </div>
          </div>
          <div className="list-div">
            <div>
              <svg
                className="w-[21px]"
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
            </div>
            <div>
              <p>Measuring to ensure updates are a success</p>
            </div>
          </div>
          <div className="list-div">
            <div>
              <svg
                className="w-[21px]"
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
            </div>
            <div>
              <p> And much more!</p>
            </div>
          </div>
        </div>
        <form className="w-full" method="get" action="/subscribe">
          <p className="font-semibold">Email address</p>
          <input
            className="border-2 rounded-md border-gray-400 w-full py-1 px-3 my-2"
            id="email"
            type="email"
            onChange={fetchEmail}
            placeholder="Enter your email"
            required="required"
            pattern=".+@gmail\.com"
          />

              <button
                id="submit"
                className="rounded-md w-full bg-[var(--Dark-Slate-Grey)] hover:button-gradient text-white sm:mt-5 mt-3 px-4 py-3 text-sm"
              >
                Subscribe to monthly newsletter
              </button>
        </form>
      </div>
      <div className="sm:w-[50%] sm:h-fit sm:my-4 sm:mr-4">
        <Image src={mainImage} priority={true} alt="" />
      </div>
    </div>
  );
}

export default page;
