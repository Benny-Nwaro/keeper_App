import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { slides } from "../assets/images/Gallery";
import { designer } from "../designers";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleDesignerClick = (designerId) => {
    const index = designerId - 1;
    setCurrentIndex(index);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="text-center bg-slate-900">
        <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-full h-full shadow-2xl rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div>
            <h1 className="flex absolute top-[20%] justify-center py-2 px-96 text-8xl font-extrabold text-slate-400">
              {" "}
              Explore your Fashion Desires
            </h1>
          </div>
          {/* Left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-center text-6xl mt-20 animate-pulse font-semibold text-blue-800 font-['Open_Sans']">
        Checkout our Designers
      </h1>

      <div className="flex flex-col  w-100 h-autopt-5 pb-6 space-y-6 ">
        <div>
          <Popover>
            <PopoverHandler>
              <div className="flex flex-row max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-7xl space-x-4">
                {" "}
                {designer.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleDesignerClick(item.id)}
                  >
                    <img
                      className="h-80 mr-5 object-cover ml-2 mt-5 w-80 rounded-lg hover:scale-110 cursor-pointer hover:pacity-5 shadow-2xl o"
                      src={item.image}
                      alt="Designer Image"
                    />
                    <h3 className="pt-4 pl-20 text-xl text-neutral-500 ">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </PopoverHandler>
            <PopoverContent className="z-[999] flex w-[28rem] overflow-hidden p-0 bg-white">
              <div className="p-4">
                <Typography color="blue-gray" className="mb-2 font-medium">
                  {designer[currentIndex].name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="mb-4 font-normal"
                >
                  {designer[currentIndex].note}
                </Typography>

                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-1 capitalize border-white"
                >
                  <NavLink to="auth/register">Contact Designer</NavLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
              <img
                src={designer[currentIndex].image}
                alt="Designer image"
                className="h-full w-1/2 object-cover"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
