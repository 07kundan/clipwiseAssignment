import React from "react";
import Image from "../../public/image.png";

function Page2() {
  return (
    <div className=" bg-white flex flex-col justify-between px-12 py-6">
      <h1 className=" text-center text-4xl text-[#31546D] font-bold">
        All Product
      </h1>
      <div className=" py-6 space-x-12 text-black ">
        <span className="font-medium">
          Filter:
          <select
            value="All Product"
            className="ml-0.5 border-none bg-white font-semibold"
            name="product"
            id="product-select"
          >
            <option value="All Product">All Product</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
          </select>
        </span>
        <span className="font-medium">
          Sort:
          <select
            // value=""
            className="bg-white border-none ml-1 font-semibold"
            name="sort-options"
            id="sort-options"
          >
            <option value="best-selling" selected>
              Best Selling
            </option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </span>
      </div>
      <div className="flex flex-wrap justify-between items-end h-[854px]">
        {Array(8)
          .fill()
          .map((_, index) => (
            <div key={index} className="">
              <Card />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Page2;

function Card() {
  return (
    <div className="bg-[#ffffff] h-[400px] w-[315px] flex flex-col justify-evenly rounded-2xl border-2 border-[#F2F2F2] hover:scale-105 shadow-md hover:shadow-xl transition-all">
      <div
        className={`h-[198px]`}
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img className="" src={`${Image}`} alt="img" /> */}
      </div>
      <div className=" space-y-6 flex flex-col justify-center items-center">
        <div className="text-center">
          <p>Crystal Agate Phone Grip1</p>
          <p>8.99$</p>
        </div>
        <button className=" text-2xl font-semibold relative p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#75CCEB] to-[#6FB4FF] rounded-xl" />
          <div className="h-full w-full py-2 px-8 bg-black rounded-xl relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center">
            Buy now
          </div>
        </button>
      </div>
    </div>
  );
}
