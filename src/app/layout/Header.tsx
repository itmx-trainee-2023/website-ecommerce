"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import close from "../../../public/image/Homepage/close.png";
import vecter from "../../../public/image/Homepage/vecter.png";
import heart from "../../../public/image/Homepage/Heart.png";
import cart from "../../../public/image/Homepage/Cart.png";
import igb from "../../../public/image/Homepage/ig-b.png";
import fbb from "../../../public/image/Homepage/fb-b.png";
import ytb from "../../../public/image/Homepage/yt-b.png";
import search from "../../../public/image/Homepage/search-nav.png";

export default function Header() {
  const pathname = usePathname();
  const isPage = pathname === "/";
  const isSignInPage = pathname === "/signin";
  const isSignUpPage = pathname === "/signup";

  if (isSignInPage || isSignUpPage || isPage) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      <div className=" navbar bg-base-100 shadow flex">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn bg-white border-none drawer-button ml-8"
                >
                  <Image src={vecter} alt={""}></Image>
                </label>
              </div>
              <div className="drawer-side" style={{ zIndex: 9999 }}>
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu p-4 w-11/12 min-h-full bg-white text-base-content">
                  <div className="flex justify-between items-center p-2">
                    <h1 className="text-lg font-semibold">3legant.</h1>
                    <button>
                      <Image src={close} alt={""}></Image>
                    </button>
                  </div>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-full flex justify-center max-w-2xl pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                      {/* Add your icon component or image here */}
                      <Image src={search} alt="Search Icon" />
                    </div>
                  </div>

                  <li className="mt-2">
                    <a>Home</a>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <details>
                      <summary>Shop</summary>
                      <ul>
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <details>
                      <summary>Product</summary>
                      <ul>
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li className="mt-auto ">
                    <div className="mt-auto flex justify-between items-center">
                      <a>Cart</a>

                      <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button">
                          <div className="indicator ">
                            <Image src={cart} alt={""}></Image>
                            <span className="badge badge-sm indicator-item bg-black text-white">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className=" border-t border-gray-300" />
                  <li>
                    <div className=" flex justify-between items-center">
                      <a>Wishlist</a>

                      <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button">
                          <div className="indicator ">
                            <Image src={heart} alt={""}></Image>
                            <span className="badge badge-sm indicator-item bg-black text-white">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className=" border-t border-gray-300" />
                  <button className=" mt-5 btn btn-md sm:btn-sm md:btn-md lg:btn-lg bg-black text-white">
                    Sign In
                  </button>
                  <div className="grid grid-cols-3 w-32 m-5 ml-1">
                    <button>
                      <Image className="mr-auto" src={igb} alt={""}></Image>
                    </button>
                    <button>
                      <Image className="mr-auto" src={fbb} alt={""}></Image>
                    </button>
                    <button>
                      <Image className="mr-auto" src={ytb} alt={""}></Image>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <a className=" font-semibold text-xl ml-0 lg:float-left lg:ml-36 sm:ml-32 ">
            3legant.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  ml-32">
          <ul className="menu menu-horizontal px-1">
            <li >
              <Link href={"/homepage"}>Home</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/product"}>Product</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr- lg:flex  lg:mr-36">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end hidden lg:flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <Link href={"/cart"}>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator ">
                  <Image src={cart} alt={""}></Image>
                  <span className="badge badge-sm indicator-item bg-black text-white">
                    8
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}