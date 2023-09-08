import { useState } from "react";
import { designer } from "../designers";
import { gallery } from "../imageGallery";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDesignerClick = (designerId) => {
    const index = designerId - 1;
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col  w-100 h-auto bg-red-50 pt-5 pb-6 space-y-6">
      <div className="h-96"></div>
      <div>
        <Popover>
          <PopoverHandler>
            <div className="grid grid-cols-3 gap-4 pt-8 pl-8 pr-8 pb-8">
              {" "}
              {designer.map((item) => (
                <div key={item.id} onClick={() => handleDesignerClick(item.id)}>
                  <img
                    className="h-96 w-96 rounded-lg hover:scale-110 cursor-pointer"
                    src={item.image}
                    alt="Designer Image"
                  />
                  <h3 className="text-center pt-4 text-xl text-neutral-500  rounded-full">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </PopoverHandler>
          <PopoverContent className="z-[999] flex w-[28rem] overflow-hidden p-0">
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
              <a href="#" className="inline-block">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-1 capitalize"
                >
                  Contact Designer
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
              </a>
            </div>
            <img
              src={designer[currentIndex].image}
              alt="Designer image"
              className="h-full w-1/2 object-cover"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-row ">Advert placement</div>
    </div>
  );
}
