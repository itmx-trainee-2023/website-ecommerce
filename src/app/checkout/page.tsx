"use client";
import React, { useState } from "react";
import styles from "../styles/component.module.css";
import Image from "next/image";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { TagIcon } from "@heroicons/react/20/solid";

import img1 from "../../../public/image/ImagePlaceholder.png";
import img2 from "../../../public/image/ImagePlaceholder2.png";
import img3 from "../../../public/image/ImagePlaceholder3.png";
import Link from "next/link";

function CheckOut() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="text-center mx-auto max-w-screen-xl ">
      <h1 className={styles.text}>Cart</h1>
      <ul className="steps steps-vertical lg:steps-horizontal ">
        <li className="step step-primary">Shopping cart</li>
        <li className="step step-primary mr-3">Checkout details</li>
        <li className="step mr-2">Order completes</li>
      </ul>
      <div className="flex flex-col md:flex-row">
        <div className="mx-flex mt-10 flex justify-center md:w1/2 w-full">
          <div className="">
            <div className="border p-4 rounded-lg">
              <h2 className="text-left text-2xl font-bold mb-4">
                Contact Information
              </h2>
              <div className="mt-8 flex">
                <div className="mr-4">
                  <label className="block text-left mb-2 text-gray-600">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="border rounded py-2 px-3 w-30 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border rounded py-2 px-3 w-30 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="border p-4 rounded-lg mt-4">
              <h2 className="text-left text-2xl font-bold mb-4">
                Shipping Address
              </h2>
              <div className="mt-8">
                <div className="mr-4">
                  <label className="block text-left mb-2 text-gray-600">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    COUNTRY *
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Country
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    TOWN / CITY *
                  </label>
                  <input
                    type="text"
                    placeholder="Town / City"
                    className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="mr-4">
                  <label className="block text-left mb-2 text-gray-600">
                    STATE
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="border rounded py-2 px-3 w-30 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-left mb-2 text-gray-600">
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="border rounded py-2 px-3 w-30 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="form-control flex items-start mt-3">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox " />
                  <span className="label-text ml-3">
                    Use a different billing address (optional)
                  </span>
                </label>
              </div>
            </div>
            <div>
              <button type="button" className="btn mt-4 w-full  btn-neutral">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto  mt-11">
          <div className="border p-4 rounded-lg">
            <div>
              <span className="font-bold text-lg">Order summary</span>
            </div>
            <div className="flex items-center  mb-4 ">
              <Image
                src={img1}
                alt={"Not Found Image"}
                width={80}
                height={50}
              />
              <div className="ml-2 flex flex-col mt-2">
                <span>Try Table</span>
                <span className="bg-black">color: Black</span>
                <div className="border p-2 rounded-lg h-9 w-22 ">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-l"
                  >
                    <MinusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                  <span className="bg-gray-100 px-1 py-1">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-r"
                  >
                    <PlusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="ml-auto mb-12 font-bold">
                <span>$38.00</span>
              </div>
            </div>
            <div className="border-b-2 border-Slate-200 mt-3"></div>
            <div className="flex items-center mb-4 mt-3">
              <Image
                src={img2}
                alt={"Not Found Image"}
                width={80}
                height={50}
              />
              <div className="ml-2 flex flex-col mt-2">
                <span>Try Table</span>
                <span className="bg-black">color: Black</span>
                <div className="border p-2 rounded-lg h-9 w-22">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-l"
                  >
                    <MinusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                  <span className="bg-gray-100 px-1 py-1">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-r"
                  >
                    <PlusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="ml-auto mb-12 font-bold">
                <span>$38.00</span>
              </div>
            </div>
            <div className="border-b-2 border-Slate-200 mt-3"></div>
            <div className="flex items-center mt-3 ">
              <Image
                src={img3}
                alt={"Not Found Image"}
                width={80}
                height={50}
              />
              <div className="ml-2 flex flex-col mt-2">
                <span>Try Table</span>
                <span className="bg-black">color: Black</span>
                <div className="border p-2 rounded-lg h-9 w-22">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-l"
                  >
                    <MinusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                  <span className="bg-gray-100 px-1 py-1">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-300 px-1 py-1 rounded-r"
                  >
                    <PlusIcon className="h-3 w-3 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="ml-auto mb-12 font-bold">
                <span>$38.00</span>
              </div>
            </div>
            <div className="border-b-2 border-Slate-200 mt-3"></div>
            <div className="flex items-center mt-6">
              <input
                type="text"
                placeholder="Coupon Code"
                className="input input-bordered  w-full max-w-xs    w-36 "
              />
              <button
                type="submit"
                className="justify-right text-hover:text-purple ml-3 btn btn-neutral"
              >
                Apply
              </button>
            </div>
            <div className="mt-5">
              <div className="mt-10 let-100 ml-2 flex flex-col mt-2">
                <div className=" flex items-center">
                  <span className="mb-2">
                    <TagIcon className="h-6 w-6 text-Slate-950 text-opacity-50" />
                  </span>
                  <span>JenkateMW</span>
                  <span className="text-color-green ml-auto">
                    -$25.00 [Remove]
                  </span>
                </div>
                <div className="border-b-2 border-Slate-200 mt-3"></div>
                <div className=" flex items-center mt-3">
                  <span>Shipping</span>
                  <span className="text-color-green ml-auto">Free</span>
                </div>
                <div className="border-b-2 border-Slate-200 mt-3"></div>
                <div className=" flex items-center mt-3">
                  <span>Subtotal</span>
                  <span className="text-color-green ml-auto">$99.00</span>
                </div>
                <div className="border-b-2 border-Slate-200 mt-3"></div>
                <div className=" flex items-center mt-3">
                  <span className="font-bold">Total</span>
                  <span className="text-color-green ml-auto font-bold">
                    $234.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
