"use client";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import headerimg from "../../../public/img/Image Placeholder header.png";
import vectorfilter from "../../../public/img/Vector.png";
import grid3x3 from "../../../public/img/grid3x3.png";
import grid2x2 from "../../../public/img/grid2x2.png";
import ver1x2 from "../../../public/img/ver1x2.png";
import hor1x2 from "../../../public/img/hor1x2.png";
import "./shop.css";
import Link from "next/link";
import { shops } from "../shop/shop";
import { useCart } from "../context/CartContext";

const Shop: React.FC = () => {
  const handleImageClick = (id: number) => {
    // console.log(`Clicked on image with ID: ${id}`);
    console.log(`${id}`);
    // ตัวอย่าง: เปิดหน้าใหม่ที่มี URL เช่น `/shop/${id}`
    // window.location.href = `/shop/product`;
    window.location.href = `/product/${id}`;
  };

  interface Shops{
    id:number;
    images: string;
    price: string;
    title: string
  }

  const { cart, addToCart } = useCart();
  const [data, setData] = useState(null);
  // console.log(data);

  const handleAddToCart = (
    productName: string,
    productPrice: number,
    productImage: string
  ) => {
    addToCart(productName, productPrice, productImage);
    // ตัวเลือก: คุณสามารถอัปเดตจำนวนรายการในส่วนหัวได้ที่นี่
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("test");
      axios({
        method: "get",
        url: "https://dummyjson.com/products?limit=10&skip=20",
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
      <div>
        <div className="relative isolate overflow-hidden sm:py-10">
          <div className="flex justify-center">
            <div className="carouse w-4/5 sm:w-2/3 md:w-2/3 lg:w-4/5">
              <div className="relative isolate overflow-hidden py-24 sm:py-48">
                <Image
                  src={headerimg}
                  alt=""
                  className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center "
                ></Image>
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="font-bold lg:text-5xl text-xl absolute top-1/4 text-black text-center ">
                    Shop Page
                  </h1>
                  <h1 className="lg:text-2xl text-sm absolute top-1/2 text-black text-center ">
                    Let’s design the place you always imagined.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid justify-items-center">
            <div>
              <div>
                <div className="pr-35 pb-50 pt-10 float-left ml-5 lg:flex hidden mr-5">
                  <div>
                    <div className="flex">
                      <p className="font-bold pr-5 text-lg">Filter</p>
                    </div>
                    <div className="font-bold pt-5 pb-5">
                      <p>CATEGORIES</p>
                    </div>
                    <div className="pr-40 grid overflow-y-auto h-32">
                      <div>
                        <a className="link link-hover ">All Rooms</a>
                      </div>
                      <div>
                        <a className="link link-hover ">Living Rooms</a>
                      </div>
                      <div>
                        <a className="link link-hover ">Bedroom</a>
                      </div>
                      <div>
                        <a className="link link-hover ">Kitchen</a>
                      </div>
                      <div>
                        <a className="link link-hover ">Bathroom</a>
                      </div>
                      <div>
                        <a className="link link-hover ">Dinning</a>
                      </div>
                      <div>
                        <a className="link link-hover text-left">Outdoor</a>
                      </div>
                    </div>

                    <div className="pt-10">
                      <p className="font-bold">PRICE</p>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">All Price</span>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <p className="label-text">$0.00 - 99.99</p>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <p className="label-text">$100.00 - 199.99</p>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <p className="label-text">$200.00 - 299.99</p>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <p className="label-text">$300.00 - 399.99</p>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <p className="label-text">$200.00 - 299.99</p>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <div className=" pb-10 lg:flex hidden">
                    <div className="pr-910 font-bold text-base">
                      Living Room
                    </div>
                    <div className="">
                      <div className="dropdown ml-[600px] text-base">
                        <div tabIndex={0} className="flex font-bold pr-10 ">
                          Sort by
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
                        <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-5">
                          <li>
                            <a>Option 1</a>
                          </li>
                          <li>
                            <a>Option 2</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="border p-1 rounded">
                        <Image src={grid3x3} alt={""} width={25} />
                      </div>
                      <div className="border p-1 rounded ml-1">
                        <Image src={grid2x2} alt={""} width={25} />
                      </div>
                      <div className="border p-1 rounded ml-1">
                        <Image src={ver1x2} alt={""} width={25} />
                      </div>
                      <div className="border p-1 rounded ml-1">
                        <Image src={hor1x2} alt={""} width={25} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white ">
                    <div className="mx-auto max-w-7xl ">
                      <div>
                        <div>
                          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none lg:grid-cols-3 lg:px-0 px-24">
                            {data?.products.map((data, index) => (
                              <>
                                <Link
                                  key={data.id}
                                  href={{
                                    pathname: `/product/${data.id}`,
                                    // query: { slug: data.id },
                                  }}
                                >
                                  <div
                                    className="bg-white border-2 mr-60"
                                    style={{
                                      width: "300px",
                                      height: "400px",
                                      boxShadow:
                                        "0px 5px 10px 6px rgba(0, 0, 0, 0.1)", // เพิ่ม box-shadow
                                      borderRadius: "5px", // เพิ่มขอบมน
                                      overflow: "hidden", // ตัดรูปภาพเมื่อมีการปรับขนาด
                                    }}
                                  >
                                    <div
                                      className="flex max-w-xl flex-col items-start justify-between relative mr-56 "
                                      style={{
                                        width: "300px",
                                        height: "300px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <div
                                        className="relative"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      >
                                        <Image
                                          src={data.images[0]}
                                          alt={`Shop ${index + 1}`}
                                          width={400}
                                          height={100}
                                          className="w-full h-full object-cover"
                                          style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            aspectRatio: "1 / 1",
                                          }}
                                        />
                                      </div>
                                      <div className="indicator absolute top-3 left-5 h-7 w-2">
                                        <p className="text-black bg-white p-3 rounded-md w-15 h-7 flex items-center justify-center text-sm font-bold">
                                          NEW
                                        </p>
                                        <div className="indicator absolute top-8 h-7 w-20 pt-2">
                                          <p className="text-white p-3 rounded-md w-15 h-7 flex items-center justify-center text-sm bg-emerald-400 font-bold">
                                            -50%
                                          </p>
                                        </div>
                                        <div className="card-body">
                                          <button
                                            className="flex-none flex items-center justify-center w-10 h-10 rounded-full text-white border border-slate-200 bg-white ml-44 mt-72"
                                            type="button"
                                            aria-label="Like"
                                          >
                                            <svg
                                              className="stroke-gray-500 text-white"
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
                                          </button>
                                          <div className="">
                                            <button
                                              className="card-btn"
                                              onClick={() =>
                                                handleAddToCart(
                                                  data.name,
                                                  data.price,
                                                  data.img.src
                                                )
                                              }
                                            >
                                              Add to Cart
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="font-bold ml-5">
                                      {data.title}
                                      <br />
                                      <span>${data.price}</span>
                                    </div>
                                  </div>
                                </Link>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pt-10 flex justify-center items-center lg:ml-80 ml-0 mb-10">
                        <button className="btn btn-outline rounded-full w-60">
                          Show more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
