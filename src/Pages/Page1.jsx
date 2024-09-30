import React, { useState } from "react";
import Image from "../../public/image.png";
import bgImage from "../../public/bgImage.png";
import navIcon from "../../public/navicon.png";
import daimond from "../../public/daimond.png";
import mouse from "../../public/mouse.png";

const content = [
  {
    text: "Crystal Agate Phone Grip - 18.99$",
  },
  {
    text: "Crystal Agate Phone Grip - 20.47$",
  },
  {
    text: "Crystal Agate Phone Grip - 28.34$",
  },
  {
    text: "Crystal Agate Phone Grip - 18.45$",
  },
  {
    text: "Crystal Agate Phone Grip - 32.16$",
  },
];

function Page1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="h-screen relative flex items-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar className={"absolute top-6"} />

      {/* left  */}

      <div className="w-2/3  pl-14 space-y-5 z-10">
        <span>
          <p className="text-5xl">Welcome to</p>
          <p className="text-6xl tracking-wide font-bold">
            Pop Rock Crystal Shop!
          </p>
        </span>
        <p className="w-1/2 text-sm text-black">
          Here you will find unique phone accessories, crystals, jewelry and
          more. Free shipping inside the U.S. and our phone grips come with a
          limited warranty. Enjoy!
        </p>
        <div className="space-x-3 text-[#317189]">
          <button className=" w-[180px] h-[56px] rounded-lg text-2xl font-semibold relative p-1">
            <div className="absolute inset-0 bg-gradient-to-r  from-[#75CCEB] to-[#6FB4FF] rounded-2xl" />
            <div className="h-full w-full bg-white rounded-2xl relative group transition duration-200 hover:bg-transparent flex items-center justify-center hover:text-black">
              Buy now
            </div>
          </button>
          <button className="text-xl font-semibold">About us</button>
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 z-10 flex flex-col items-center  justify-center space-y-6">
        <div className="h-1/2 w-[70%] bg-white text-black shadow-2xl rounded-xl relative flex items-center justify-center">
          <span className="absolute top-16 left-0 px-2 py-1 bg-[#8A93E5] rounded-ee-lg rounded-se-lg">
            New lot
          </span>
          <Carousel currentIndex={currentIndex} />
        </div>
        <CarouselButton
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          currentIndex={currentIndex}
        />
      </div>
      {/* svg */}
      <div className="absolute bottom-0 w-full">
        <svg
          height="604"
          viewBox="0 0 1440 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M760 435.452C544.368 463.007 234.943 374.829 0 498.829V604H1440V0.5C1440 0.5 1296.64 13.2995 1171 90.5C1025.94 179.629 975.632 407.896 760 435.452Z"
            fill="white"
          />
        </svg>
      </div>

      {/* scroll down */}
      <div className="text-[#317189] absolute bottom-10 left-1/2 -translate-x-1/2 gap-2 flex ">
        <img className="h-4 animate-bounce" src={mouse} alt="" />
        <span className="text-xs font-bold">scroll down</span>
      </div>
    </div>
  );
}

export default Page1;

function Carousel({ currentIndex }) {
  return (
    <>
      <div className="w-2/3 h-[400px]  relative flex justify-center items-center">
        {content.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={` flex justify-center items-center`}>
              <img className="h-[230px]" src={`${Image}`} alt="img" />
            </div>
            <p className="text-center font-semibold leading-7">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CarouselButton({ prevSlide, nextSlide, currentIndex }) {
  return (
    <div className="pl-7 hidden lg:flex justify-start items-center lg:gap-4">
      <button onClick={prevSlide} className="p-[2px] relative h-10 w-10">
        <div className="absolute inset-0 bg-gradient-to-r  from-[#75CCEB] to-[#6FB4FF]  rounded-full" />
        <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
          &lt;
        </div>
      </button>

      {content.map((item, index) => (
        <div
          style={{
            color: currentIndex === index ? "#6FB4FF" : "black",
          }}
          key={index}
          className={"text-4xl"}
        >
          &#x2022;
        </div>
      ))}

      <button onClick={nextSlide} className="p-[2px] relative h-10 w-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        <div className="h-full w-full bg-black rounded-full relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
          &gt;
        </div>
      </button>
    </div>
  );
}

function Navbar({ className }) {
  return (
    <nav
      className={`w-full flex  items-center justify-between px-16 ${className} text-white`}
    >
      <div className="flex items-center gap-3 font-semibold">
        <span>
          <img className="h-12" src={daimond} alt="img" />
        </span>
        <span>Pop Rock Crystal</span>
      </div>
      <div className="flex gap-16">
        <ul className="flex items-center space-x-7 font-semibold  ">
          {["Home", "Shop", "About Us", "Help"].map((item) => (
            <li className="hover:underline cursor-pointer" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <span>
          <img className="h-6" src={navIcon} alt="img" />
        </span>
      </div>
    </nav>
  );
}
