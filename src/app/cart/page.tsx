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

function CART() {
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
        <li className="step mr-3">Checkout details</li>
        <li className="step mr-2">Order completes</li>
      </ul>
      <div className="flex flex-col md:flex-row">
        <div className="mx-flex mt-10 flex justify-center md:w1/2 w-full">
          <table className="table-auto">
            <thead className="border-b-2 border-Slate-950">
              <tr>
                <th className="px-4 py-2 text-center">Product</th>
                <th className="px-4 py-2 text-center">Quantity</th>
                <th className="px-4 py-2 text-center">Price</th>
                <th className="px-4 py-2 ml-4 mr-4 text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-Slate-200">
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <Image
                      src={img1}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                    <div className="ml-2 flex flex-col mt-2">
                      <span>Try Table</span>
                      <span className="bg-black">color: Black</span>
                      <button className="btn btn-sm btn-ghost">X Remove</button>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center rounded-lg">
                  <div className="border p-2 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-l "
                    >
                      <MinusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                    <span className="bg-gray-100 px-3 py-2">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-r"
                    >
                      <PlusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">1961</td>
                <td className="px-4 py-2 text-center">1961</td>
              </tr>

              <tr className="border-b-2 border-Slate-200">
                <td className="px-4 py-2 text-center">
                  <div className="flex items-center">
                    <Image
                      src={img2}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                    <div className="ml-2 flex flex-col mt-2">
                      <span>Try Table</span>
                      <span className="bg-black">color: Red</span>
                      <button className="btn btn-sm btn-ghost">X Remove</button>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="border p-2 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-l "
                    >
                      <MinusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                    <span className="bg-gray-100 px-3 py-2">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-r"
                    >
                      <PlusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">1975</td>
                <td className="px-4 py-2 text-center">1975</td>
              </tr>
              <tr className="border-b-2 border-Slate-200">
                <td className="px-4 py-2 text-center">
                  <div className="flex items-center">
                    <Image
                      src={img3}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                    <div className="ml-2 flex flex-col mt-2">
                      <span>Try Table</span>
                      <span className="bg-black">color: Gold</span>
                      <button className="btn btn-sm btn-ghost">X Remove</button>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 text-center ">
                  <div className="border p-2 rounded-lg">
                    <button
                      onClick={decreaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-l "
                    >
                      <MinusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                    <span className="bg-gray-100 px-3 py-2">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="bg-gray-300 px-3 py-2 rounded-r"
                    >
                      <PlusIcon className="h-5 w-5 text-gray-700" />
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">1975</td>
                <td className="px-4 py-2 text-center">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/2 mx-auto border p-4 rounded-lg mt-11">
          <div>
            <span className="font-bold text-lg">Cart summary</span>
          </div>
          <div className="form-control my-4 border p-4 rounded-lg">
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
              <span className="label-text ml-2">Free shipping</span>
              <span className="label-text ml-auto">$0.00</span>
            </label>
          </div>
          <div className="form-control my-4 border p-4 rounded-lg">
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
              <span className="label-text ml-2">Express shipping</span>
              <span className="label-text ml-auto">$0.00</span>
            </label>
          </div>
          <div className="form-control my-4 border p-4 rounded-lg">
            <label className="label cursor-pointer flex items-center">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
              <span className="label-text ml-2">Pick Up</span>
              <span className="label-text ml-auto">$0.00</span>
            </label>
          </div>
          <div className="border-b-2 border-Slate-200 flex justify-between py-2">
            <span className="text-left">Subtotal</span>
            <span className="text-right">$1234.00</span>
          </div>
          <div className="border-b-2 border-Slate-200 flex justify-between py-2">
            <span className="text-left font-bold">Total</span>
            <span className="text-right font-bold">$1345.00</span>
          </div>
          <Link href="/checkout" passHref>
            <button className="btn mt-4 w-full btn-neutral" type="submit">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <div className="w-60 mt-24 ml-24">
        <div className="mt-10 let-100 ml-2 flex flex-col mt-2">
          <span className="font-bold text-left">Have a coupon?</span>
          <span className="text-left">
            Add your code for an instant cart discount
          </span>
          <div className="border p-1 rounded-lg flex items-center">
            <span className="mb-2">
              <TagIcon className="h-6 w-6 text-Slate-400 text-opacity-50" />
            </span>
            <input
              type="text"
              placeholder="Coupon Code"
              className="input-ghost w-36 "
            />
            <button
              type="submit"
              className="justify-right text-hover:text-purple"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CART;
