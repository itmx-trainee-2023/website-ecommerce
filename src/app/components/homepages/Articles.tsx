import React from 'react'
import Image from "next/image";
import art1 from "../../../../public/image/Homepage/Articles1.png";
import art2 from "../../../../public/image/Homepage/Articles2.png";
import art3 from "../../../../public/image/Homepage/Articles3.png";

function Articles() {
  return (
    <div className="bg-white mb-32">
          <div className="mx-auto max-w-7xl px-16 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none lg:grid-cols-3">
              <div className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art1} alt={""}></Image>
                </div>
                <div>
                  <h1 className="mt-4 font-medium  text-xl">
                    7 ways to decor your home
                  </h1>
                  <p></p>
                  <a
                    href="#"
                    className="absolute top-94 lg:top-96 lg:right-50 font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art2} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">
                    Kitchen organization
                  </h1>
                  <a
                    href="#"
                    className="absolute top-82 lg:top-96 lg:right-50  font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art3} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">Decor your bedroom</h1>
                  <a
                    href="#"
                    className="absolute top-82 lg:top-96 lg:right-50  font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Articles