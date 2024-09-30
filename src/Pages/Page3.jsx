import React from "react";
import Image from "/bgImage.png";
import Content from "/image.png";

function Page3() {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`border-l-red-900 overflow-x-hidden text-black relative flex items-center justify-end pt-6`}
    >
      <button className="rounded-lg text-lg font-semibold absolute top-12 left-1/2 -translate-x-1/2 p-0.5 z-10">
        <div className="absolute inset-0 bg-gradient-to-r  from-[#75CCEB] to-[#6FB4FF] rounded-xl " />
        <div className="px-4 py-1 bg-white rounded-xl relative flex items-center justify-center ">
          View all
        </div>
      </button>

      <div className="absolute top-0 left-0 ">
        <svg
          // width="1400"
          height="900"
          viewBox="0 0 1530 900"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M780.5 719.289C996.132 691.392 1205.06 380.14 1525 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="w-full h-[900px] z-10 flex justify-end items-center ">
        {/* left */}
        <div className=" w-1/2 space-y-5 text-end text-[#31546D]">
          <div className="">
            <p className="text-3xl">BEST PRICE </p>
            <p className="text-6xl font-bold">Agate Phone Grip</p>
          </div>
          <div className="flex justify-end items-center ">
            <p className="text-[#41A0B7] font-semibold line-through">44.50$</p>
            <p className="text-5xl font-bold text-[#E35B3E]">19.50$</p>
          </div>
          <div className="flex justify-end">
            <p className="w-[55%] tracking-wide text-[#31546D]">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
          </div>
          <button className="rounded-lg text-2xl font-semibold relative ">
            <div className="h-full w-full bg-gradient-to-r  from-[#75CCEB] to-[#6FB4FF] rounded-2xl flex items-center justify-center text-white hover:text-black px-6 py-2">
              Buy now
            </div>
          </button>
        </div>
        {/* right */}
        <div className="relative h-[707px] flex items-end">
          <svg
            width="707"
            height="542"
            viewBox="0 0 707 542"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              opacity="0.2"
              d="M744 170C744 226.291 731.225 281.847 706.638 332.484C682.051 383.122 646.293 427.519 602.058 462.331C557.823 497.143 506.264 521.462 451.266 533.457C396.268 545.451 339.265 544.808 284.552 531.576C229.839 518.343 178.842 492.866 135.404 457.065C91.9652 421.263 57.2181 376.07 33.7801 324.891C10.3421 273.712 -1.17558 217.881 0.0947366 161.605C1.36505 105.329 15.3903 50.0745 41.1137 0.00506592L372 170H744Z"
              fill="white"
            />
          </svg>

          <div className="w-[35vw] h-[35vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl bg-white/50">
            <div className="w-[25vw] h-[25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl bg-white flex items-center justify-center">
              <img className="h-2/3" src={Content} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
