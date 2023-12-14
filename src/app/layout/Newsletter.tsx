'use client';
import React from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import footer from "../../../public/Img/Homepage/Footer.png";
import email from "../../../public/Img/Homepage/email.png";
export default function Newsletter() {
  const pathname = usePathname();

  const isHomePage = pathname === '/homepage';
  const isBlogPostPage = pathname === '/blogpost';

  if (!isHomePage && !isBlogPostPage) {
    return null;
  }
  return (
    <>
   <div className=" relative isolate overflow-hidden lg:bg-zinc-900 bg-slate-100  py-48 lg:py-48 lg:mt-0 -mt-12">
        <Image
          src={footer}
          alt=""
          className="absolute inset-0 -z-10   w-full object-cover object-right md:object-center lg:flex hidden"
        ></Image>
        <div className="flex justify-center  ">
          <h1 className=" font-medium  lg:text-5xl text-3xl  absolute top-28 text-black">
            Join Our Newsletter
          </h1>
          <p className="  lg:text-xl text-base  absolute lg:top-44 top-40 text-black">
            Sign up for deals, new products and promotions
          </p>
          <div className="mt-6 flex lg:w-2/6 gap-x-4 absolute top-52 border-b-2 border-gray-300">
            <Image
              className=" mt-2 -mr-4"
              src={email}
              alt={""}
              width={20}
              height={20}
              style={{ objectFit: "cover", width: "5%", height: "5%" }}
            />
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-500 "
              placeholder="Email address"
            />
            <button
              type="submit"
              className="flex-none rounded-md px-3.5 py-2.5 text-sm  font-normal  text-gray-500  "
            >
              Signup
            </button>
          </div>
        </div>
      </div>
   
    </>
  );
}