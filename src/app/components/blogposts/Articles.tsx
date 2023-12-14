import React from 'react'
import Image from "next/image";
import blogp5 from "../../../../public/image/Homepage/blog-p-5.png";
import blogp6 from "../../../../public/image/Homepage/blog-p-6.png";
import blogp7 from "../../../../public/image/Homepage/blog-p-7.png";


function Articles() {
  return (
    <div className="bg-white mb-20">
    <div className="mx-auto max-w-7xl px-14 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between relative">
          <div className="flex items-center gap-x-4 text-xs">
            <Image src={blogp5} alt={""}></Image>
          </div>
          <div>
            <h1 className="mt-4 font-medium  text-xl">
              Modern texas home is beautiful and completely kid-friendly
            </h1>
            <p className="mt-2 text-xs text-gray-500">October 16, 2023</p>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between relative">
          <div className="flex items-center gap-x-4 text-xs">
            <Image src={blogp6} alt={""}></Image>
          </div>
          <div>
            <h1 className=" font-medium  text-xl">
              Modern texas home is beautiful and completely kid-friendly
            </h1>
            <p className="mt-2 text-xs text-gray-500">October 16, 2023</p>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between relative">
          <div className="flex items-center gap-x-4 text-xs">
            <Image src={blogp7} alt={""}></Image>
          </div>
          <div>
            <h1 className=" font-medium  text-xl">
              Modern texas home is beautiful and completely kid-friendly
            </h1>
            <p className="mt-2 text-xs text-gray-500">October 16, 2023</p>
          </div>
        </article>
        <a
          href="#"
          className="w-32 font-semibold text-black border-b border-black lg:hidden flex lg:mb-0 mb-8"
        >
          <span className="inset-0" aria-hidden="true" />
          More Articles<span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Articles