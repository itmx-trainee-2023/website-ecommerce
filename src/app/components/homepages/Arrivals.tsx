import React from "react";
import Image from "next/image";

const Arrivals = (props: any) => {
  console.log("props", props);
  return (
    <div className="md:ml-8 md:w-1/4 sm:m-auto  ">
      <div className=" w-40 m-3 lg:w-64 bg-neutral-100 lg:p-10 p-8">
        <Image
         className="-ml-4"
         src={props.img.src} 
         alt={""}
         width={48}
         height={48}
         />
        <h1 className="-ml-4 my-3  text-gray-900  lg:text-xl lg:font-semibold font-extrabold text-sm">
          {props.title}
        </h1>
        <p className="-ml-4 text-gray-500 text-sm">{props.details}</p>
      </div>
    </div>
  );
};

export default Arrivals;
