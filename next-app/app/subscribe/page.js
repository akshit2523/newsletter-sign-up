import React from "react"

const Subscribe = () => {
    return(
        <div className="container flex flex-col gap-4 mx-auto rounded-xl bg-white p-12 w-2/6 h-4/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
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
            <p className="font-extrabold text-5xl text-[var(--Charcoal-Grey)] my-3"> Thanks for subscribing!</p>
            <h6> A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</h6>
            <button className="w-full rounded-md bg-[var(--Dark-Slate-Grey)] text-white mt-5 py-2 px-4">Dismiss message</button>
        </div>
    )
}

export default Subscribe;