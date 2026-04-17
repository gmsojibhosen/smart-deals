import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto text-center py-10">
      <h1 className="font-bold text-7xl mt-10">
        Deal your <span className="text-primary">Products</span> <br /> in a
        <span className="text-primary">Smart</span> way !
      </h1>
      <div className="join w-full flex items-center justify-center mt-5">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item">Join</button>
      </div>
      <div className="mt-5">
        <button className=" btn btn-primary mr-2">Watch All Products</button>
        <button className="btn">Post an Product </button>
      </div>
    </div>
  );
};

export default Banner;
