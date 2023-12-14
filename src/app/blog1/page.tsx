"use client";
import React from "react";
import Image from "next/image";
import headerblog from "../../../public/img/headerblog.png";
import grid3x3 from "../../../public/img/grid3x3.png";
import grid2x2 from "../../../public/img/grid2x2.png";
import ver1x2 from "../../../public/img/ver1x2.png";
import hor1x2 from "../../../public/img/hor1x2.png";
import { blog } from "../blog1/dataBlog1";
import { useState } from "react";

const Blog01 = () => {
  const [datas, setData] = useState(blog);
  return (
    <div>
      <div className="relative isolate overflow-hidden sm:py-10">
        <div className="flex justify-center">
          <div className="carouse w-4/5 sm:w-2/3 md:w-2/3 lg:w-4/5">
            <div className="relative isolate overflow-hidden py-24 sm:py-48">
              <Image
                src={headerblog}
                alt=""
                className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center "
              ></Image>
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="font-bold lg:text-5xl text-xl absolute top-1/4 text-black text-center ">
                  Our Blog
                </h1>
                <h1 className="lg:text-2xl text-sm absolute top-1/2 text-black text-center ">
                  Home ideas and design inspiration
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Filter Section */}
      <div className="relative">
        <div className="flex pt-10 ml-40">
          <a className="link link-hover mr-10">All Blog</a>
          <a className="link link-hover">Featured</a>
          <div className="lg:flex pb-10 pl-[650px] hidden">
            <div className="dropdown">
              <div tabIndex={0} className="flex font-bold ml-64 ">
                Sort by
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-10">
                  <li>
                    <a>Option 1</a>
                  </li>
                  <li>
                    <a>Option 2</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="border p-1 rounded ml-5">
                <Image src={grid3x3} alt="" width={20} />
              </div>
              <div className="border p-1 rounded ml-1">
                <Image src={grid2x2} alt="" width={20} />
              </div>
              <div className="border p-1 rounded ml-1">
                <Image src={ver1x2} alt="" width={20} />
              </div>
              <div className="border p-1 rounded ml-1">
                <Image src={hor1x2} alt="" width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:px-0 px-14">
            {blog.map((data, index) => (
              <div
                key={index}
                className="flex max-w-xl flex-col items-start justify-between relative"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <Image
                    src={data.img}
                    alt={`Blog ${index + 1}`}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="font-bold mt-2">
                  {data.name}
                  <br />
                  <span>{data.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show more button */}
      <div className="pt-10 flex justify-center items-center">
        <button className="btn btn-outline rounded-full w-60">Show more</button>
      </div>
    </div>
  );
};

export default Blog01;
