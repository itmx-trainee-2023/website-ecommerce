"use client";
import React from "react";
import Image from "next/image";
import delivery from "../../../public/image/Homepage/fast delivery.png";
import money from "../../../public/image/Homepage/money.png";
import lock from "../../../public/image/Homepage/lock 01.png";
import call from "../../../public/image/Homepage/call.png";
import lower from "../../../public/image/Homepage/new lower.png";
import { useState } from "react";
import Banner from "../components/homepages/Banner";
import Simply from "../components/homepages/Simply";
import Arrivals from "../components/homepages/Arrivals";
import Articles from "../components/homepages/Articles";



function HomePage() {
  const [step, setStep] = useState(1);
  console.log("delivery",delivery)
  return (
    <div>
      
      <Banner/>
      <Simply/>
      <div className="mx-auto max-w-screen-xl lg:mt-2 mt-1">
        <div className="flex flex-col md:flex-row">
          <div className="w-full ">
            <h1 className="justify-between font-semibold text-gray-900 text-4xl lg:ml-10 lg:mt-8 ml-10 ">
              New
            </h1>
            <h1 className="justify-between font-semibold text-gray-900 text-4xl lg:ml-10 lg:mt-2 ml-10 ">
              Arrivals
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-2 lg:ml-24  ">
        <div className="sm:flex-row lg:flex-row grid grid-cols-2 md:flex lg:flex  mb-8 lg:m-0 m-4">
          <Arrivals img={delivery} title={"Free Shipping"} details={"Order above $200"}></Arrivals>
          <Arrivals img={money} title={"Money-back"} details={"30 days guarantee"}></Arrivals>
          <Arrivals img={lock} title={"Secure Payments"} details={"Secured by Stripe"}></Arrivals>
          <Arrivals img={call} title={"24/7 Support"} details={"Phone and Email support"}></Arrivals>
          
         
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mb-8 max-h-full ">
        <div className="flex flex-col md:flex-row mt-8">
          <div className="w-full lg:-ml-32">
            <Image className="" src={lower} alt={""} width={790} />
          </div>
          <div className="relative bg-neutral-100 -ml-10 -mr-28 md:w-11/12">
            <div className=" p-16">
              <p className="lg:mt-24 lg:mb-4 -mt-4 font-bold text-base text-blue-600 ">
                SALE UP TO 35% OFF
              </p>
              <h1 className="lg:mt-0 mt-3 font-semibold text-4xl">
                HUNDREDS of
              </h1>
              <h1 className="mb-5 font-semibold text-4xl">New lower prices!</h1>
              <p className="lg:mr-40 lg:mt-1 lg:text-lg mr-8">
                It’s more affordable than ever to give every room in your home a
                stylish makeover
              </p>
              <a
                href="#"
                className="absolute lg:top-96 top-92 font-semibold text-black border-b border-black"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Shop Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-2 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full relative">
            <h1 className="justify-between font-semibold text-gray-900 text-4xl ml-8 mt-8">
              Articles
            </h1>
            <a
              href="#"
              className="absolute top-10 right-16 font-semibold text-black border-b border-black"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              More Articles<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <Articles/>
        
      </div>

      


    </div>
  );
}

export default HomePage;
