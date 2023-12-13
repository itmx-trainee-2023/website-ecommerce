import React from "react";
import styles from "../styles/component.module.css";
import Image from "next/image";

import img1 from "../../../public/image/ImagePlaceholder.png";
import img2 from "../../../public/image/ImagePlaceholder2.png";
import img3 from "../../../public/image/ImagePlaceholder3.png";

function Complete() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className={styles.text}>Complete!</h1>
      <ul className="steps steps-vertical lg:steps-horizontal mb-10">
        <li className="step step-primary">Shopping cart</li>
        <li className="step step-primary mr-3">Checkout details</li>
        <li className="step mr-2 step-primary">Order completes</li>
      </ul>
      <div className="card w-full md:w-1/2 bg-base-100 shadow-xl items-center">
        <div className="card-body items-center text-center">
          <p className="flex items-center text-xl md:text-2xl mb-2 text-Slate-600">
            Thank you!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </p>
          {/*svg https://heroicons.com/ */}

          <h2 className="text-gray-600 font-bold card-title">
            Your order has been received
          </h2>

          <div className="card-actions mt-4">
            <div className="flex space-x-14">
              <div className="indicator">
                <Image
                  src={img1}
                  alt={"Not Found Image"}
                  width={80}
                  height={50}
                />
                <span className="indicator-item badge badge-neutral">2</span>
              </div>

              <div className="indicator">
                <Image
                  src={img2}
                  alt={"Not Found Image"}
                  width={80}
                  height={50}
                />
                <span className="indicator-item badge badge-neutral">2</span>
              </div>

              <div className="indicator">
                <Image
                  src={img3}
                  alt={"Not Found Image"}
                  width={80}
                  height={50}
                />
                <span className="indicator-item badge badge-neutral">1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto mt-3 justify-center">
          <div className="flex items-center mt-3">
            <label className="mr-2">Order code:</label>
            <label className="text-color-green ml-auto font-bold">
              #0123_45678
            </label>
          </div>
          <div className="flex items-center mt-3">
            <label className="mr-2">Date:</label>
            <label className="text-color-green ml-auto font-bold">
              October 19, 2023
            </label>
          </div>
          <div className="flex items-center mt-3">
            <label className="mr-2">Total:</label>
            <label className="text-color-green ml-auto font-bold">
              $1,345.00
            </label>
          </div>
          <div className="flex items-center mt-3">
            <label className="mr-2">Payment method:</label>
            <label className="text-color-green ml-auto font-bold">
              Credit Card
            </label>
          </div>
        </div>
        <div className="mt-14">
          <button
            type="button"
            className="btn btn-neutral rounded-full border border-neutral px-5 py-2 "
          >
            Purchase history
          </button>
        </div>
      </div>
    </div>
  );
}

export default Complete;
