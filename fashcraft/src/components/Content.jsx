import React from "react";

export default function Content() {
  return (
    <div className="flex flex-col  w-100 h-auto text-center border border-orange-600 pt-5 pb-6 space-y-6">
      <div className="w-52 h-52 border border-blue-600 bottom-0 ">
        <div className=" w-24 h-40 border border-yellow-600 bottom-0"></div>
      </div>
      <div className=" flex relative w-screen h-96 border border-red-600 bottom-0 bg-transparent "></div>
      <div className="w-52 h-52 border border-yellow-600 bottom-0"></div>
      <div className="w-52 h-52 border border-yellow-600 bottom-0"></div>
    </div>
  );
}
