"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

type Props = {};

export default function Page({ params }: { params: { slug: string } }) {
  const [count, setCount] = useState(1);

  const handelIncrement = () => {
    setCount(count + 1);
  };

  const handelDeductment = () => {
    if (count > 1) setCount(count - 1);
  };

  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 10,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // ลดเวลาทุกๆ 1 วินาที
      setCountdown((prevCountdown) => {
        const newCountdown = { ...prevCountdown };

        // ตรวจสอบเพื่อลดเวลาแต่ละหน่วย
        if (newCountdown.seconds > 0) {
          newCountdown.seconds -= 1;
        } else if (newCountdown.minutes > 0) {
          newCountdown.seconds = 59;
          newCountdown.minutes -= 1;
        } else if (newCountdown.hours > 0) {
          newCountdown.seconds = 59;
          newCountdown.minutes = 59;
          newCountdown.hours -= 1;
        } else if (newCountdown.days > 0) {
          newCountdown.seconds = 59;
          newCountdown.minutes = 59;
          newCountdown.hours = 23;
          newCountdown.days -= 1;
        }

        return newCountdown;
      });
    }, 1000);

    // clear ค่า interval เมื่อ component unmount
    return () => clearInterval(intervalId);
  }, []);


  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "get",
        url: `https://dummyjson.com/products/${params.slug}`,
      }).then(function (response) {
        let result = [];
        result = response.data;
        // console.log(result);
        setData(result);
      });
    };

    fetchData();
  }, []);



  return (
    <>
      <div className="mx-auto max-w-screen-xl">
        <div className="text-sm breadcrumbs mb-5 mt-4">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Living Rooms</a>
            </li>
            <li>Product</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 lg:px-0 px-16">
            <div className="carousel lg:w-full w-80 flex ">
              <div id="slide1" className="carousel-item relative w-full ">
                <Image src={data?.images} alt={""} width={600} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle lg:mr-10 ">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <Image src={data?.images} alt={""} width={600} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle lg:mr-10">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <Image src={data?.images} alt={""} width={600} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle lg:mr-10">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <Image src={data?.images} alt={""} width={600} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle lg:mr-10">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div className="indicator absolute top-24 lg:left-[-0px] left-20 h-7 w-20 lg:ml-48 mt-16">
              <p className="text-black bg-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm font-bold ">
                NEW
              </p>
            </div>
            <div className="indicator absolute top-32 lg:left-[-0px] left-20 h-7 w-20 pt-2 lg:ml-48 mt-16">
              <p className="text-white p-2 rounded-md w-16 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
                -50%
              </p>
            </div>
            <div className="mt-3 lg:flex hidden">
              <div className="pr-4">
                <Image
                  src={data?.images}
                  alt={""}
                  style={{ height: "170px", width: "190px" }}
                />
              </div>
              <div className="pr-4">
                <Image
                  src={data?.images}
                  alt={""}
                  style={{ height: "170px", width: "190px" }}
                />
              </div>
              <div className="pr-4">
                <Image
                  src={data?.images}
                  alt={""}
                  style={{ height: "170px", width: "190px" }}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:px-0 px-16 lg:mt-0 mt-5">
            <div className="flex">
              {data?.rating}
              <div className="rating rating-sm mt-1">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className="lg:text-3xl text-3xl  font-bold mt-5 mb-5">
                  {data?.title}
                </h2>
              </div>
              <div className="lg:text-lg text-sm">{data?.description}</div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold mb-5">${data?.price}</h1>
              </div>
              <hr></hr>
              <div>
                <h1 className="mt-5 lg:text-sm text-sm">Offer expires in:</h1>
              </div>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-5 mb-5 ">
                <div className="flex flex-col">
                  <span className="countdown font-mono lg:text-5xl text-4xl">
                    {countdown.days}
                  </span>
                  Days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono lg:text-5xl text-4xl">
                    {countdown.hours}
                  </span>
                  Hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono lg:text-5xl text-4xl">
                    {countdown.minutes}
                  </span>
                  Minutes
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono lg:text-5xl text-4xl">
                    {countdown.seconds}
                  </span>
                  Seconds
                </div>
              </div>
              <hr></hr>
              <div className="mt-5">
                <p>Measurements</p>
              </div>
              <div className="mt-3">
                <p className="font-medium">17 1/2x20 5/8</p>
              </div>
              <div className="mt-5">
                <p>Choose Color </p>
              </div>
              <div className="mt-5">
                <p>Black</p>
              </div>
              {/* <div className="flex mt-5 mb-5">
              <a href="/Product">
                <Image src={black} alt="" width={50} />
              </a>
              <a href="/Product">
                <Image src={pink} alt="" width={50} />
              </a>
              <a href="/Product">
                <Image src={red} alt="" width={50} />
              </a>
              <a href="/Product">
                <Image src={white} alt="" width={50} />
              </a>
            </div> */}
              <hr></hr>
              <div className="flex mt-5">
                <p>SKU</p>
                <p className="ml-32">{data?.stock}</p>
              </div>
              <div className="flex mt-5">
                <p>GATEGORY</p>
                <p className="ml-20 mb-10">{data?.category}</p>
              </div>
              <div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                  <div className="flex-auto flex space-x-4">
                    <div className="flex ">
                      <button
                        onClick={handelDeductment}
                        className="flex-none flex items-center justify-center w-9 h-12 rounded-md text-slate-300  border-slate-500 border-2"
                      >
                        <h1 className="text-black">-</h1>
                      </button>
                      <div className="mt-3 mr-5 ml-5 text-base">{count}</div>
                      <button
                        onClick={handelIncrement}
                        className="flex-none flex items-center justify-center w-9 h-12 rounded-md text-slate-300  border-slate-500 border-2"
                      >
                        <h1 className="text-black">+</h1>
                      </button>
                      <div className="ml-5">
                        <button
                          className="lg:w-[500px] w-[240px]  flex-none flex items-center justify-center h-12 rounded-md text-slate-300 border-slate-500 border-2 relative "
                          type="button"
                          aria-label="Like"
                        >
                          <svg
                            className="stroke-black text-white mr-14"
                            width="20"
                            height="20"
                            fill="currentColor"
                            aria-hidden="true"
                            strokeWidth="2"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            />
                          </svg>
                          <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pl-20 text-black mt-1 mr-12">
                            Wishlist
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  className="lg:w-full w-96  h-12 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10 lg:px-0 px-16">
          <a className="link link-hover pr-10">Additional Info</a>
          <a className="link link-hover pr-10">Questions</a>
          <a className="link link-hover pr-10">Reviews</a>
        </div>
        <hr></hr>
        <div className="mt-10">
          <h1 className="text-3xl font-bold"> Custommer Reviews</h1>
        </div>
        <div className="flex mt-5 ">
          <div className="rating rating-sm mt-1">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              checked
            />
          </div>
          <p className="ml-5 ">11 reviews</p>
        </div>
        <div className=" h-16 rounded-xl text-slate-300 border border-slate-200 mt-5">
          <button
            className="w-40 h-10 font-semibold rounded-full bg-black text-white float-right mt-3"
            type="submit"
          >
            Write Reviews
          </button>
        </div>
        <div className="flex mt-10">
          <div>
            <h1 className="text-xl font-bold"> 11 Reviews</h1>
          </div>
          <div className="dropdown dropdown-hover ml-auto">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Newest
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-20">
              <Image src={data?.images} alt={""} width={50} />
            </div>
            <div className="w-full md:w-50 ml-0">
              <div>
                <p>Sofia Harvetz</p>
              </div>
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
              <p className="line-clamp-3 mt-2">
                I bought it 3 weeks ago and now come back just to say “Awesome
                Product”. I really enjoy it. At vero eos et accusamus et iusto
                odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupt et quas molestias excepturi sint non
                provident.
              </p>
              <div className="flex mb-5 mt-5 pl-32">
                <a className="link link-hover pr-5 font-medium">Like</a>
                <a className="link link-hover pr-5 font-medium">Reply</a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-20 mt-5">
              <Image src={data?.images} alt={""} width={50} />
            </div>
            <div className="w-full md:w-50 ml-0 mt-5">
              <div>
                <p>Nicolas Jensen</p>
              </div>
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
              <p className="line-clamp-3 mt-2">
                I bought it 3 weeks ago and now come back just to say “Awesome
                Product”. I really enjoy it. At vero eos et accusamus et iusto
                odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupt et quas molestias excepturi sint non
                provident.
              </p>
              <div className="flex mb-5 mt-5 pl-32">
                <a className="link link-hover pr-5 font-medium">Like</a>
                <a className="link link-hover pr-5 font-medium">Reply</a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-20 mt-5">
              <Image src={data?.images} alt={""} width={50} />
            </div>
            <div className="w-full md:w-50 ml-0 mt-5">
              <div>
                <p>Nicolas Jensen</p>
              </div>
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
              <p className="line-clamp-3 mt-2">
                I bought it 3 weeks ago and now come back just to say “Awesome
                Product”. I really enjoy it. At vero eos et accusamus et iusto
                odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupt et quas molestias excepturi sint non
                provident.
              </p>
              <div className="flex mb-5 mt-5 pl-32">
                <a className="link link-hover pr-5 font-medium">Like</a>
                <a className="link link-hover pr-5 font-medium">Reply</a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-20 mt-5">
              <Image src={data?.images} alt={""} width={50} />
            </div>
            <div className="w-full md:w-50 ml-0 mt-5">
              <div>
                <p>Nicolas Jensen</p>
              </div>
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
              <p className="line-clamp-3 mt-2">
                I bought it 3 weeks ago and now come back just to say “Awesome
                Product”. I really enjoy it. At vero eos et accusamus et iusto
                odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupt et quas molestias excepturi sint non
                provident.
              </p>
              <div className="flex mb-5 mt-5 pl-32">
                <a className="link link-hover pr-5 font-medium">Like</a>
                <a className="link link-hover pr-5 font-medium">Reply</a>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-20 mt-5">
              <Image src={data?.images} alt={""} width={50} />
            </div>
            <div className="w-full md:w-50 ml-0 mt-5">
              <div>
                <p>Nicolas Jensen</p>
              </div>
              <div className="rating rating-sm mt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
              </div>
              <p className="line-clamp-3 mt-2">
                I bought it 3 weeks ago and now come back just to say “Awesome
                Product”. I really enjoy it. At vero eos et accusamus et iusto
                odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupt et quas molestias excepturi sint non
                provident.
              </p>
              <div className="flex mb-5 mt-5 pl-32">
                <a className="link link-hover pr-5 font-medium">Like</a>
                <a className="link link-hover pr-5 font-medium">Reply</a>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="pt-10 flex justify-center items-center mb-10">
          <button className="btn btn-outline rounded-full w-60">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}