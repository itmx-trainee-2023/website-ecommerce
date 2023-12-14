import React from 'react'
import Image from "next/image";
import living from "../../../../public/image/Homepage/Living Room.png";
import bedrm from "../../../../public/image/Homepage/Bed Room.png";
import kitcn from "../../../../public/image/Homepage/Kitchen.png";


function Simply() {
    const callouts = [
        {
          name: "Desk and Office",
          description: "Work from home accessories",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
          imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
          href: "#",
        },
      ];
  return (
    <>
    <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="lg:font-semibold text-gray-900 lg:text-7xl lg:ml-8 lg:mt-8 ml-10 mt-8 text-4xl font-semibold ">
              Simply Unique
              <strong style={{ fontWeight: "bold", color: "gray" }}>
                /
              </strong>{" "}
            </h1>
            <h1 className="font-semibold text-gray-900 lg:text-7xl lg:ml-8 lg:mt-8 ml-10 text-4xl ">
              Simply Better
              <strong style={{ fontWeight: "bold", color: "gray" }}>
                .
              </strong>{" "}
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:p-24 p-10 lg:mt-0 -mt-4">
            <h1>
              <strong style={{ fontWeight: "bold", color: "black" }}>
                3legant t
              </strong>{" "}
              is a gift & decorations store based in HCMC, Vietnam. Est since
              2019.
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:mt-4 ">
        <div className="mx-auto max-w-screen-xl">
          <div className=" grid-cols-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className=" row-span-3 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div
                    className={
                      index === 0
                        ? "lg:w-full lg:m-0 lg:mt-0 -mt-1 m-8"
                        : "w-full md:w-1/2 "
                    }
                  >
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={living}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl  absolute lg:top-10 lg:left-20 top-8 left-8 text-black">
                        Living Room
                      </h1>
                      <a
                        href="#"
                        className="absolute lg:top-20 lg:left-20 top-16 left-8 font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div
                    className={
                      index === 0
                        ? "lg:w-full lg:m-0 lg:mt-0 -mt-8 m-8  "
                        : "w-full md:w-1/2 "
                    }
                  >
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={bedrm}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl absolute lg:top-48 lg:left-20 top-24 left-8 text-black">
                        Bedroom
                      </h1>
                      <a
                        href="#"
                        className="absolute lg:top-56 lg:left-20 top-32 left-8 font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row-span-2 col-span-1 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div
                    className={
                      index === 0
                        ? "lg:w-full lg:m-0 lg:mt-0 -mt-8 m-8 "
                        : "w-full md:w-1/2 "
                    }
                  >
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={kitcn}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl  absolute lg:top-48 lg:left-20 top-24 left-8 text-black">
                        Kitchen
                      </h1>
                      <a
                        href="#"
                        className="absolute lg:top-56 lg:left-20 top-32 left-8  font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Simply