'use client';
import React from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import ticket from "../../../public/image/Homepage/ticket-percent.png";
import close from "../../../public/image/Homepage/close.png";

export default function Advertise() {
  const pathname = usePathname();

  const isHomePage = pathname === '/homepage';

  if (!isHomePage) {
    return null;
  }


  return (
    <>
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 shadow">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 bg ">
          <Image className="" src={ticket} alt={""} />
          <p className="text-sm leading-6 text-gray-900 lg:-ml-2 ">
            <strong className="font-semibold">
              30% off storewide — Limited time!{" "}
            </strong>
          </p>
          <a
            href="#"
            className="font-semibold text-blue-500 border-b border-blue-500 lg:flex hidden"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Shop Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <Image className="" src={close} alt={""} />
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
   
    </>
  );
}