"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import signin from "../../../public/image/signup.png";

const SignUp = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row">
        <div className="w-full lg:flex lg:w-1/2 hidden ">
          <Image src={signin} alt={""} width={570} height={2} />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-neutral-500 ">
                        Already have an account?
                      </p>
                    </td>
                    <td>
                      <Link href="/signin" className="text-emerald-500 ">
                        Sign in
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input shadow w-full max-w-xs m-2"
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="input shadow w-full max-w-xs m-2"
                  />

                  <input
                    type="text"
                    placeholder="Email address"
                    className="input shadow w-full max-w-xs m-2"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="input shadow w-full max-w-xs m-2"
                  />
                </div>
                <div>
                  <table>
                    <tbody>
                      <tr className="">
                        <td>
                          <input
                            type="checkbox"
                            className="checkbox border-grey-100 "
                          />
                        </td>
                        <td>
                          <p className="text-center text-sm text-gray-500">
                            {" "}
                            I agree with{" "}
                            <strong
                              style={{ fontWeight: "bold", color: "black" }}
                            >
                              Privacy Policy
                            </strong>{" "}
                            and{" "}
                            <strong
                              style={{ fontWeight: "bold", color: "black" }}
                            >
                              Terms of Use
                            </strong>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <Link href={"/homepage"}>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-black shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
