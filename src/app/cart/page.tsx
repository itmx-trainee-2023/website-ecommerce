"use client";
import React, { useState } from "react";
import styles from "../styles/component.module.css";
import Image from "next/image";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { TagIcon } from "@heroicons/react/20/solid";

import img1 from "../../../public/image/ImagePlaceholder.png";
import img2 from "../../../public/image/ImagePlaceholder2.png";
import img3 from "../../../public/image/ImagePlaceholder3.png";
import img4 from "../../../public/image/ticket-percent.png";
import { CheckIcon } from "@heroicons/react/20/solid";

function CART() {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decreaseQuantity1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };
  const increaseQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const decreaseQuantity2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  return (
    <div className="text-center mx-auto  items-center justify-center">
      <h1 className={styles.text}>Cart</h1>
      <div className=" h-[66px] lg:justify-center items-start gap-8 inline-flex w-full justify-start">
        <div className="w-full lg:w-64 pb-[26px] lg:border-b-2 border-emerald-400 flex-col justify-start items-start gap-6 lg:flex border-b-2 hidden">
          <div className="self-stretch justify-start items-center gap-[17px] inline-flex w-full">
            <div className="p-2 bg-emerald-400 rounded-[40px] flex-col justify-center items-center gap-2.5 lg:flex hidden">
              <div className="w-6 h-6 relative" />
            </div>
            <div className="px-[5px] py-2  rounded-[40px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div
                className={`${
                  step === 1
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2  lg:border-b-2 lg:border-black py-1  px-3 bg-Slate-950 rounded-full text-white font-normal border-b-2 border-black "
                    : "lg:rounded-full lg:bg-success lg:text-white lg:px-3 lg:py-3   rounded-full bg-success text-white px-1 py-1 lg:flex flex"
                }`}
              >
                {step === 1 ? (
                  "1"
                ) : (
                  <CheckIcon className="lg:h-5 lg:w-5 h-5 w-5" />
                )}
              </div>
            </div>
            <div
              className={`${
                step === 1
                  ? "lg:mb-2  lg:w-40 mb-2 w-28  "
                  : "lg:mb-2  lg:w-40 lg:text-success   w-40  text-success lg:flex "
              }`}
            >
              Shopping cart
            </div>
          </div>
        </div>
        <div className="w-full lg:w-64 pb-[26px] lg:border-b-2 border-emerald-400 flex-col justify-start items-start gap-6 flex border-b-2 lg:hidden">
          <div className="self-stretch justify-start items-center gap-[17px] inline-flex w-full">
            <div className="p-2 bg-emerald-400 rounded-[40px] flex-col justify-center items-center gap-2.5 lg:flex hidden">
              <div className="w-6 h-6 relative" />
            </div>
            <div className="px-[5px] py-2  rounded-[40px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div
                className={`${
                  step === 1
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2  lg:border-b-2 lg:border-black py-1  px-3 bg-Slate-950 rounded-full text-white font-normal border-b-2 border-black "
                    : step === 2
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2  lg:border-b-2 lg:border-black py-1  px-3 bg-Slate-950 rounded-full text-white font-normal border-b-2 border-black "
                    : step === 3
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2  lg:border-b-2 lg:border-black py-1  px-3 bg-Slate-950 rounded-full text-white font-normal border-b-2 border-black"
                    : ""
                }`}
              >
                {step === 1 ? "1" : step === 2 ? "2" : step === 3 ? "3" : ""}
              </div>
            </div>
            <div
              className={`${
                step === 1
                  ? "lg:mb-2  lg:w-40 mb-2 w-28  "
                  : step === 2
                  ? "lg:mb-2  lg:w-40 mb-2 w-32 "
                  : step === 3
                  ? "lg:w-40 mb-2 w-32"
                  : ""
              }`}
            >
              {step === 1
                ? "Shopping cart"
                : step === 2
                ? "Checkout details"
                : step === 3
                ? "Order complete"
                : "Shopping cart"}
            </div>
          </div>
        </div>
        <div className=" justify-end items-center gap-[17px] flex w-full lg:hidden ">
          <div className="px-[15px]   rounded-[40px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div
              className={`${
                step === 2
                  ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2   py-1  px-3 bg-Slate-400 rounded-full text-white font-normal "
                  : step === 3
                  ? "lg:rounded-full lg:bg-success lg:text-white lg:px-3 lg:py-3   rounded-full bg-success text-white px-1 py-1 hidden "
                  : "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2   py-1  px-3 bg-Slate-400 rounded-full text-white font-normal"
              }`}
            >
              {step === 2 ? "3" : "2"}
            </div>
          </div>
        </div>
        <div className="w-64 pb-[26px] border-b-2 border-Slate-900 flex-col justify-start items-start gap-6 lg:flex hidden">
          <div className="self-stretch justify-start items-center gap-[17px] inline-flex w-full">
            <div className="px-[15px] py-2  rounded-[40px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div
                className={`${
                  step === 2
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2   py-1  px-3 bg-Slate-950 rounded-full text-white font-normal "
                    : step === 3
                    ? "lg:rounded-full lg:bg-success lg:text-white lg:px-3 lg:py-3   rounded-full bg-success text-white px-1 py-1 "
                    : "lg:rounded-full lg:bg-Slate-500 lg:text-white lg:px-4 lg:py-2   py-1  px-3 bg-Slate-500 rounded-full text-white font-normal "
                }`}
              >
                {step === 2 ? (
                  "2"
                ) : step === 3 ? (
                  <CheckIcon className="lg:h-5 lg:w-5 h-5 w-5" />
                ) : (
                  "2"
                )}
              </div>
            </div>
            <div
              className={`${
                step === 2
                  ? "lg:mb-2  lg:w-40 mb-2 w-30  "
                  : step === 3
                  ? "lg:mb-2  lg:w-40 lg:text-success   py-1  px-3 w-40  text-success"
                  : "mb-2 ml-1  md:w-40 text-Slate-500 lg:mb-2 lg:ml-1   lg:w-40 lg:text-Slate-500"
              }`}
            >
              Checkout details
            </div>
          </div>
        </div>
        <div className="w-64 pb-[26px] flex-col justify-start items-start gap-6  border-Slate-900 border-b-2 lg:flex hidden">
          <div className="self-stretch justify-start items-center gap-[17px] inline-flex">
            <div className="px-[15px] py-2  rounded-[40px] flex-col justify-center items-center gap-2.5 inline-flex">
              <div
                className={`${
                  step === 3
                    ? "lg:rounded-full lg:bg-Slate-950 lg:text-white lg:px-4 lg:py-2  py-1  px-3 bg-Slate-950 rounded-full text-white font-normal  "
                    : "lg:rounded-full lg:bg-Slate-500 lg:text-white lg:px-4 lg:py-2   py-1  px-3 bg-Slate-500 rounded-full text-white font-normal  "
                }`}
              >
                3
              </div>
            </div>
            <div
              className={`${
                step === 3
                  ? "lg:mb-2  lg:w-40  ml-1  w-30  "
                  : "lg:mb-2  lg:w-40 ml-1   w-30  "
              }`}
            >
              Order complete
            </div>
          </div>
        </div>
      </div>

      {step === 1 && (
        <>
          <div className="lg:flex flex-col lg:flex-row flex lg:pl-32 w-full lg:pr-10">
            <div className=" lg:mt-10 lg:mr-4 w-full mt-10 mr-4 ">
              <div className="w-full lg:border-b-2 lg:border-Slate-950  border-b-2 border-Slate-950">
                <div className="lg:flex  flex  justify-around ">
                  <div className=" lg:px-4 lg:py-2 lg:text-center w-full px-4 py-2 text-left ">
                    Product
                  </div>
                  <div className="w-full px-2 py-2 ml-12 text-center lg:flex hidden   lg:px-4 lg:py-2 lg:ml-4 lg:text-center ">
                    Quantity
                  </div>
                  <div className="w-full px-2 py-2 text-center ml-4 lg:flex hidden  lg:px-4 lg:py-2 lg:text-center ">
                    Price
                  </div>
                  <div className="w-full px-2 py-2 ml-2 text-center lg:flex hidden  lg:px-4 lg:py-2 lg:ml-4 lg:text-center">
                    Subtotal
                  </div>
                </div>
                <div className="w-full border-b-2 border-Slate-300  lg:w-full lg:border-b-2 lg:border-Slate-300"></div>

                <div className="lg:flex lg:items-center items-center flex lg:border-b-2 lg:border-Slate-200 border-b-2 border-Slate-200 w-full">
                  <div className="w-1/2 px-1 py-2">
                    <div className="lg:flex lg:items-center items-center flex">
                      <Image
                        src={img1}
                        alt={"Not Found Image"}
                        width={50}
                        height={30}
                        className="lg:flex-shrink-0 lg:flex-grow-0 flex-shrink-0 flex-grow-0 "
                      />
                      <div className=" flex flex-col mt-2 lg:ml-2 lg:flex lg:flex-col lg:mt-2 mr-28 ">
                        <div className="lg:text-sm text-sm ">Try Table</div>
                        <span className="bg-black text-xs text-black lg:text-xs lg:text-black">
                          color: Black
                        </span>
                        <button className="btn btn-sm btn-ghost lg:btn lg:btn-sm lg:btn-ghost lg:flex hidden">
                          X Remove
                        </button>
                        <div className="border p-2 w-22 h-8  justify-center lg:border lg:p-2 lg:rounded-lg  flex lg:justify-end lg:w-24  lg:hidden">
                          <button
                            onClick={decreaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-l md:w-1/2 lg:bg-gray-300 lg:px-1 lg:py-2 lg:rounded-l lg:w-1/2"
                          >
                            <MinusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                          <span className="bg-gray-100 px-1 ">{quantity}</span>
                          <button
                            onClick={increaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-r md:w-1/2"
                          >
                            <PlusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-1 py-1 text-center md:rounded-lg  lg:px-1 lg:py-2 lg:text-center lg:rounded-lg  lg:ml-10 ">
                    <div className=" flex flex-col  lg:ml-2  lg:flex-col lg:mt-2 mr-28 lg:hidden ">
                      <span className=" text-sm text-left ml-4">1961</span>
                      <button className="btn btn-sm btn-ghost lg:btn lg:btn-sm lg:btn-ghost w-14">
                        X
                      </button>
                    </div>
                    <div className="border p-2 md:rounded-lg w-full  justify-center lg:border lg:p-2 lg:rounded-lg  lg:flex lg:justify-end lg:w-24  hidden">
                      <button
                        onClick={decreaseQuantity}
                        className="bg-gray-300 px-1 py-2 md:rounded-l md:w-1/2 lg:bg-gray-300 lg:px-1 lg:py-2 lg:rounded-l lg:w-1/2"
                      >
                        <MinusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                      <span className="bg-gray-100 px-1 py-2">{quantity}</span>
                      <button
                        onClick={increaseQuantity}
                        className="bg-gray-300 px-1 py-2 md:rounded-r md:w-1/2"
                      >
                        <PlusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 py-2 text-center lg:flex hidden lg:mr-5">
                    1961
                  </div>
                  <div className="w-full px-4 py-2 text-center lg:flex hidden ">
                    1961
                  </div>
                </div>

                <div className="flex items-center border-b-2 border-Slate-200">
                  <div className="w-1/2 px-1 py-2">
                    <div className="flex items-center">
                      <Image
                        src={img2}
                        alt={"Not Found Image"}
                        width={50}
                        height={30}
                        className="flex-shrink-0 flex-grow-0"
                      />
                      <div className="ml-2 flex flex-col mt-2 mr-28">
                        <span className="text-sm">Try Table</span>
                        <span className="bg-black text-xs text-black">
                          color: Red
                        </span>
                        <button className="btn btn-sm btn-ghost lg:flex hidden">
                          X Remove
                        </button>
                        <div className="border p-2 w-22 h-8  justify-center lg:border lg:p-2 lg:rounded-lg  flex lg:justify-end lg:w-24  lg:hidden">
                          <button
                            onClick={decreaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-l md:w-1/2 lg:bg-gray-300 lg:px-1 lg:py-2 lg:rounded-l lg:w-1/2"
                          >
                            <MinusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                          <span className="bg-gray-100 px-1 ">{quantity}</span>
                          <button
                            onClick={increaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-r md:w-1/2"
                          >
                            <PlusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-1 py-1 text-center md:rounded-lg ml-auto md:ml-10">
                    <div className=" flex flex-col  lg:ml-2  lg:flex-col lg:mt-2 mr-28 lg:hidden ">
                      <span className=" text-sm text-left ml-4">1961</span>
                      <button className="btn btn-sm btn-ghost lg:btn lg:btn-sm lg:btn-ghost w-14">
                        X
                      </button>
                    </div>
                    <div className="border p-2 md:rounded-lg w-full  justify-center md:justify-end md:w-24 lg:flex hidden">
                      <button
                        onClick={decreaseQuantity1}
                        className="bg-gray-300 px-1 py-2 md:rounded-l md:w-1/2"
                      >
                        <MinusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                      <span className="bg-gray-100 px-1 py-2">{quantity1}</span>
                      <button
                        onClick={increaseQuantity1}
                        className="bg-gray-300 px-1 py-2 md:rounded-r md:w-1/2"
                      >
                        <PlusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 py-2 text-center hidden lg:flex">
                    1961
                  </div>
                  <div className="w-full px-4 py-2 text-center hidden lg:flex">
                    1961
                  </div>
                </div>
                <div className="flex items-center border-b-2 border-Slate-200">
                  <div className="w-1/2 px-1 py-2">
                    <div className="flex items-center">
                      <Image
                        src={img3}
                        alt={"Not Found Image"}
                        width={50}
                        height={30}
                        className="flex-shrink-0 flex-grow-0"
                      />
                      <div className="ml-2 flex flex-col mt-2 w-full mr-28">
                        <span className="text-sm">Try Table</span>
                        <span className="bg-black text-xs text-black">
                          color: Gold
                        </span>
                        <button className="btn btn-sm btn-ghost lg:flex hidden">
                          X Remove
                        </button>
                        <div className="border p-2 w-22 h-8  justify-center lg:border lg:p-2 lg:rounded-lg  flex lg:justify-end lg:w-24  lg:hidden">
                          <button
                            onClick={decreaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-l md:w-1/2 lg:bg-gray-300 lg:px-1 lg:py-2 lg:rounded-l lg:w-1/2"
                          >
                            <MinusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                          <span className="bg-gray-100 px-1 ">{quantity}</span>
                          <button
                            onClick={increaseQuantity}
                            className="bg-gray-300 px-1  md:rounded-r md:w-1/2"
                          >
                            <PlusIcon className="h-3 w-3 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-1 py-1 text-center md:rounded-lg ml-auto md:ml-10">
                    <div className=" flex flex-col  lg:ml-2  lg:flex-col lg:mt-2 mr-28 lg:hidden">
                      <span className=" text-sm text-left ml-4">1961</span>
                      <button className="btn btn-sm btn-ghost lg:btn lg:btn-sm lg:btn-ghost w-14 ">
                        X
                      </button>
                    </div>
                    <div className="border p-2 md:rounded-lg w-full lg:flex justify-center md:justify-end md:w-24 hidden">
                      <button
                        onClick={decreaseQuantity2}
                        className="bg-gray-300 px-1 py-2 md:rounded-l md:w-1/2"
                      >
                        <MinusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                      <span className="bg-gray-100 px-1 py-2">{quantity2}</span>
                      <button
                        onClick={increaseQuantity2}
                        className="bg-gray-300 px-1 py-2 md:rounded-r md:w-1/2"
                      >
                        <PlusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-4 py-2 text-center lg:flex hidden">
                    1961
                  </div>
                  <div className="w-full px-4 py-2 text-center lg:flex hidden">
                    1961
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full mx-auto mt-8 md:ml-2 ">
                <div className=" mt-12 let-100 flex flex-col ">
                  <span className="font-bold text-left w-full">
                    Have a coupon?
                  </span>
                  <span className="text-left mt-3">
                    Add your code for an instant cart discount
                  </span>
                  <div className="border p-1 rounded-lg flex items-center w-full md:w-96 mt-4">
                    <span className="mb-2">
                      <Image
                        src={img4}
                        alt={""}
                        width={20}
                        height={20}
                        className="h-6 w-6 text-Slate-400 text-opacity-50 "
                      />
                    </span>
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="input-ghost w-full "
                    />
                    <button
                      type="submit"
                      className="justify-right text-hover:text-purple ml-auto w-30 "
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full md:ml-auto mt-11 border p-4 rounded-lg md:order-last  ">
              <div className="text-left">
                <span className="font-bold text-lg ">Cart summary</span>
              </div>
              <div className="form-control my-4 border p-4 rounded-lg w-full">
                <label className="label cursor-pointer flex items-center w-full">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black "
                  />
                  <span className="label-text ml-2 ">Free shipping</span>
                  <span className="label-text ml-auto">$0.00</span>
                </label>
              </div>
              <div className="form-control my-4 border p-4 rounded-lg w-full">
                <label className="label cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black"
                  />
                  <span className="label-text ml-2">Express shipping</span>
                  <span className="label-text ml-auto">$0.00</span>
                </label>
              </div>
              <div className="form-control my-4 border p-4 rounded-lg w-full  ">
                <label className="label cursor-pointer flex items-center w-full">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-black"
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
              <button
                className="btn mt-4 w-full btn-neutral "
                type="submit"
                onClick={() => setStep(2)}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col lg:flex-row lg:w-[1120px] mx-auto py-20 justify-start items-start gap-16 w-full">
            <div className="flex-col  justify-start items-start gap-6 inline-flex w-full">
              <div className="h-[372px] px-6 py-10 rounded border border-zinc-500 flex-col justify-start items-start gap-6 flex w-full">
                <div className="text-black text-xl font-bold  leading-7 ">
                  Contact Infomation
                </div>
                <div className=" justify-between items-start inline-flex w-full">
                  <div className=" flex-col justify-start items-start gap-3 inline-flex w-full">
                    <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                      FIRST Name
                    </div>
                    <div className="self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex w-full">
                        <input
                          type="text"
                          placeholder="First name"
                          className="input input-bordered border-Slate-950  w-full max-w-xs"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                      LAST Name
                    </div>
                    <div className="self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex w-full">
                      <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          placeholder="Last name"
                          className="input input-bordered border-Slate-950  w-full max-w-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                  <div className="text-zinc-500 text-xs font-bold  uppercase leading-3 ">
                    Phone Number
                  </div>
                  <div className=" w-full self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                      <input
                        type="text"
                        placeholder="Phone number"
                        className="input input-bordered border-Slate-950  w-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                  <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                    Email address
                  </div>
                  <div className="self-stretch h-10 px-4 bg-white rounded-md justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="input input-bordered border-Slate-950  w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[510px] w-full px-6 py-10 rounded border border-zinc-500 flex-col justify-start items-start gap-6 flex">
                <div className="text-neutral-900 text-xl font-bold  leading-7">
                  Shipping Address
                </div>
                <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                  <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                    Street Address *
                  </div>
                  <div className="self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="input input-bordered border-Slate-950  w-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                  <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                    Country *
                  </div>
                  <div className="w-full self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex">
                    <div className="w-full grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                      <select className="select select-bordered w-full border border-Slate-900 text-Slate-400">
                        <option disabled selected>
                          Country
                        </option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                      </select>
                      <div className="w-6 h-6 relative" />
                    </div>
                  </div>
                </div>
                <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                  <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                    Town / City *
                  </div>
                  <div className="self-stretch h-10 px-4 bg-white rounded-md w-full justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                      <input
                        type="text"
                        placeholder="Town/city"
                        className="input input-bordered border-Slate-950  w-full "
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-start inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                      State
                    </div>
                    <div className="self-stretch h-10 px-4 bg-white rounded-md  justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex w-full">
                        <input
                          type="text"
                          placeholder="State"
                          className="input input-bordered border-Slate-950  w-full "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                      Zip Code
                    </div>
                    <div className="self-stretch h-10 px-4 bg-white rounded-md w-full justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          placeholder="Zip code"
                          className="input input-bordered border-Slate-950  w-full "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" className="checkbox" />
                      <span className="label-text ml-5">
                        Use a different billing address (optional)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-[468px] w-full px-6 py-10 rounded border border-zinc-500 flex-col justify-start items-start gap-6 flex">
                <div className="text-neutral-900 text-xl font-bold  leading-7">
                  Payment method
                </div>
                <div className="flex-col justify-start items-start gap-6 flex w-full">
                  <div className="pb-8 w-full border-b border-zinc-500 flex-col justify-start items-start gap-6 flex">
                    <div className="w-full px-4 py-[13px] bg-gray-100 rounded border border-neutral-900 justify-start items-center gap-[395px] inline-flex">
                      <div className="grow shrink basis-0 h-[26px] justify-between items-center flex w-full">
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-Slate-500"
                            />
                            <span className="label-text ml-5">
                              Pay by Card Credit
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 py-[5px] bg-white rounded border border-zinc-500 justify-start items-center gap-[395px] inline-flex">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-Slate-500"
                          />
                          <span className="label-text ml-5">Paypal</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="h-16 flex-col justify-start items-start gap-3 flex w-full">
                    <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                      Card Number
                    </div>
                    <div className="self-stretch h-10 px-4 bg-white rounded-md w-full justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                        <input
                          type="text"
                          placeholder="123 123 123"
                          className="input input-bordered border-Slate-950  w-full "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full justify-between items-start inline-flex">
                    <div className="w-[285.50px] flex-col justify-start items-start gap-3 inline-flex">
                      <div className="text-zinc-500 text-xs font-bold  uppercase leading-3">
                        Expiration date
                      </div>
                      <div className="self-stretch h-10 px-4 bg-white rounded-md w-full justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="input input-bordered border-Slate-950  w-full "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[285.50px] flex-col justify-start items-start gap-3 inline-flex">
                      <div className="text-zinc-500 text-xs font-bold font-['Inter'] uppercase leading-3">
                        CVC
                      </div>
                      <div className="self-stretch h-10 px-4 bg-white rounded-md w-full justify-start items-center gap-2 inline-flex">
                        <div className="grow shrink basis-0 h-[26px] justify-start items-center gap-2 flex">
                          <input
                            type="text"
                            placeholder="CVC code"
                            className="input input-bordered border-Slate-950  w-full "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:flex hidden w-full px-10 py-3 btn btn-neutral  rounded-lg justify-center items-center gap-2 ">
                <button
                  className="text-center w-full text-white text-base font-medium  leading-7"
                  onClick={() => setStep(3)}
                >
                  Place Order
                </button>
              </div>
            </div>
            <div className="w-full flex px-6 py-4 bg-white rounded-md  flex-col justify-end items-start gap-4 ">
              <div className="border p-4 rounded-lg w-full">
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
                    <button className="btn btn-sm btn-ghost w-full">
                      X Remove
                    </button>
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
                        onClick={decreaseQuantity1}
                        className="bg-gray-300 px-1 py-1 rounded-l"
                      >
                        <MinusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                      <span className="bg-gray-100 px-1 py-1">{quantity1}</span>
                      <button
                        onClick={increaseQuantity1}
                        className="bg-gray-300 px-1 py-1 rounded-r"
                      >
                        <PlusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                    </div>
                    <button className="btn btn-sm btn-ghost w-full">
                      X Remove
                    </button>
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
                        onClick={decreaseQuantity2}
                        className="bg-gray-300 px-1 py-1 rounded-l"
                      >
                        <MinusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                      <span className="bg-gray-100 px-1 py-1">{quantity2}</span>
                      <button
                        onClick={increaseQuantity2}
                        className="bg-gray-300 px-1 py-1 rounded-r"
                      >
                        <PlusIcon className="h-3 w-3 text-gray-700" />
                      </button>
                    </div>
                    <button className="btn btn-sm btn-ghost w-full">
                      X Remove
                    </button>
                  </div>
                  <div className="ml-auto mb-12 font-bold">
                    <span>$38.00</span>
                  </div>
                </div>
                <div className="border-b-2 border-Slate-200 mt-3"></div>
                <div className="flex items-center mt-6 w-full">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="input input-bordered border-Slate-950  w-full "
                  />
                  <button
                    type="submit"
                    className="justify-right text-hover:text-purple ml-3 btn btn-neutral "
                  >
                    Apply
                  </button>
                </div>
                <div className="mt-5">
                  <div className="mt-10 let-100 ml-2 flex flex-col ">
                    <div className=" flex items-center">
                      <span className="mb-2">
                        <TagIcon className="h-6 w-6 text-Slate-950 text-opacity-50" />
                      </span>
                      <span>JenkateMW</span>
                      <span className=" text-success ml-auto">
                        -$25.00 [Remove]
                      </span>
                    </div>
                    <div className="border-b-2 border-Slate-200 mt-3"></div>
                    <div className=" flex items-center mt-3">
                      <span>Shipping</span>
                      <span className=" ml-auto">Free</span>
                    </div>
                    <div className="border-b-2 border-Slate-200 mt-3"></div>
                    <div className=" flex items-center mt-3">
                      <span>Subtotal</span>
                      <span className=" ml-auto">$99.00</span>
                    </div>
                    <div className="border-b-2 border-Slate-200 mt-3"></div>
                    <div className=" flex items-center mt-3">
                      <span className="font-bold">Total</span>
                      <span className=" ml-auto font-bold">$234.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:hidden flex  w-full px-10 py-3 btn btn-neutral  rounded-lg justify-center items-center gap-2 ">
                <button
                  className="text-center w-full text-white text-base font-medium  leading-7"
                  onClick={() => setStep(3)}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen mt-10">
        {step === 3 && (
          <>
            <div className="lg:w-[570]  h-[730px] px-[95px] py-20 bg-Slate-50 rounded-lg shadow flex-col justify-start items-center gap-10 inline-flex">
              <div className="h-[138px] flex-col justify-start items-center gap-4 flex ">
                <div className="w-full text-center text-zinc-500 text-[28px] font-medium font-['Poppins'] leading-[34px]">
                  Thank you! 🎉
                </div>
                <div className="w-[492px] text-center text-zinc-800 text-[40px] font-medium font-['Poppins'] leading-[44px]">
                  Your order has been received
                </div>
              </div>
              <div className="w-full justify-center items-start gap-10 inline-flex">
                <div className="w-24 h-28 relative">
                  <div className="w-20 h-24 left-0 top-[16px] absolute flex-col justify-center items-center inline-flex">
                    <Image
                      src={img1}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                  </div>
                  <div className="w-8 px-[11px] py-1 left-[64px] top-0 absolute bg-neutral-900 rounded-[80px] justify-center items-center inline-flex">
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                      2
                    </div>
                  </div>
                </div>
                <div className="w-24 h-28 relative">
                  <div className="w-20 h-24 left-0 top-[16px] absolute flex-col justify-center items-center inline-flex">
                    <Image
                      src={img2}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                  </div>
                  <div className="w-8 px-[11px] py-1 left-[64px] top-0 absolute bg-neutral-900 rounded-[80px] justify-center items-center inline-flex">
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                      2
                    </div>
                  </div>
                </div>
                <div className="w-24 h-28 relative">
                  <div className="w-20 h-24 left-0 top-[16px] absolute flex-col justify-center items-center inline-flex">
                    <Image
                      src={img3}
                      alt={"Not Found Image"}
                      width={80}
                      height={50}
                    />
                  </div>
                  <div className="w-8 py-1 left-[64px] top-0 absolute bg-neutral-900 rounded-[80px] justify-center items-center inline-flex">
                    <div className="text-center text-white text-base font-semibold font-['Inter'] leading-normal">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[548px] justify-center items-center gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="justify-center items-center gap-3 inline-flex">
                    <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                      Order code:
                    </div>
                  </div>
                  <div className="justify-center items-center gap-3 inline-flex">
                    <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                      Date:
                    </div>
                  </div>
                  <div className="justify-center items-center gap-3 inline-flex">
                    <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                      Total:
                    </div>
                  </div>
                  <div className="justify-center items-center gap-3 inline-flex">
                    <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                      Payment method:
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    #0123_45678
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    October 19, 2023
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    $1,345.00
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    Credit Card
                  </div>
                </div>
              </div>
              <div className="px-10 py-3 bg-neutral-900 rounded-[80px] justify-center items-center gap-2 inline-flex">
                <button
                  className="text-center text-white text-base font-medium font-['Inter'] leading-7"
                  onClick={() => setStep(1)}
                >
                  Purchase history
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CART;
