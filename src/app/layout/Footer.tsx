'use client';
import React from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import ig from "../../../public/image/Homepage/instagram.png";
import yt from "../../../public/image/Homepage/youtube.png";
import fb from "../../../public/image/Homepage/facebook.png";
import rectangle from "../../../public/image/Homepage/Rectangle.png";


export default function Footer() {
  const pathname = usePathname();

  const isPage = pathname === '/';
  const isSignInPage = pathname === '/signin';
  const isSignUpPage = pathname === '/signup';

  if (isPage||isSignInPage||isSignUpPage) {
    return null;
  }


  return (
    <>
    <footer className="footer footer-center p-10 bg-zinc-900 text-base-content">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4  lg:gap-24">
          <a href="#"><h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            3legant
            <strong style={{ fontWeight: "bold", color: "gray" }}>
              .
            </strong>{" "}
          </h1></a>
          <div className=" lg:w-4/5 border-b border-gray lg:mt-4 w-8 mt-0 lg:mb-0 mb-2 lg:hidden"></div>
          <Image
            className="hidden lg:block lg:-ml-14"
            src={rectangle}
            alt={""}
          />
          <p className="text-white  lg:-ml-14 lg:mr-80">
            Gift & Decoration Store
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-8 md:ml-auto">
          <Link className="link link-hover text-white" href={"/homepage"}>Home</Link>
          <Link className="link link-hover text-white" href={"/shop"}>Shop</Link>
          <Link className="link link-hover text-white" href={"/product"}>Product</Link>
            <Link href="/blog1" className="text-white">
              Blog
            </Link>
            
            <a className="link link-hover text-white">Contact Us</a>
          </div>
        </nav>

        <div className=" lg:w-4/5 border-b border-gray lg:mt-4 w-4/5 mt-0 lg:mb-0 mb-6"></div>

        <div className="lg:w-4/5 -mt-8 lg:flex hidden">
          <div className="lg:grid lg:grid-flow-col  flex flex-col  gap-4 md:gap-8 lg:gap-80 ">
            <p className="text-white ">
              Copyright © 2023 3legant. All right reserved
            </p>
            <div className="flex gap-8 justify-center md:ml-auto lg:-ml-80 ">
              <a className="link link-hover text-white">Privacy Policy</a>
              <a className="link link-hover text-white">Terms of Use</a>
            </div>
            <div className="lg:float-left lg:ml-16 flex justify-center ">
              <nav className="grid grid-flow-col lg:gap-4 w-28 gap-2">
                <a className="text-white link link-hover">
                  <Image className="w-full" src={ig} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={fb} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={yt} alt={""} />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="lg:w-4/5 -mt-8 lg:hidden flex">
          <div className="lg:grid lg:grid-flow-col  flex flex-col  gap-4 md:gap-8 lg:gap-80 ">
          <div className="lg:float-left lg:ml-16 flex justify-center ">
              <nav className="grid grid-flow-col lg:gap-4 w-28 gap-2">
                <a className="text-white link link-hover">
                  <Image className="w-full" src={ig} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={fb} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={yt} alt={""} />
                </a>
              </nav>
            </div>
            <div className="flex gap-8 justify-center md:ml-auto lg:-ml-80 ">
              <a className="link link-hover text-white">Privacy Policy</a>
              <a className="link link-hover text-white">Terms of Use</a>
            </div>
            
            <p className="text-white ">
              Copyright © 2023 3legant. All right reserved
            </p>
          </div>
        </div>
      </footer>
   
    </>
  );
}