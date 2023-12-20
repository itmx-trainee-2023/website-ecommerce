"use client";
import Articles from "@/app/components/homepages/Articles";
import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import user from "../../../../public/image/Homepage/user.png";
import calendar from "../../../../public/image/Homepage/calendar.png";
import axios from "axios";
import Link from "next/link";

interface BlogData {
  title: string;
  images: string[];
  description: string;
}

function Blogpost({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<BlogData | null>(null);

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
      <div>
        <div className="text-sm breadcrumbs ml-4 pl-6 lg:p-2 md:ml-40">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li className="font-medium">
              How to make a busy bathroom a place to relax
            </li>
          </ul>
        </div>

        <p className="ml-10 md:ml-40 mt-8 font-semibold text-xs ">Article</p>

        <div className="ml-10 md:ml-40 mr-1">
          <h1 className="text-3xl md:text-5xl font-medium mt-6">
            {data?.title}
          </h1>
        </div>

        <div className="mx-auto max-w-screen-xl ml-10 md:ml-40 mt-6 mb-6">
          <div className="flex  md:flex-row items-center">
            <div className="float-left mr-1">
              <Image src={user} alt={""}></Image>
            </div>
            <h1 className="text-gray-500 text-sm">Henrik Annemark</h1>
            <div className="lg:ml-10 ml-24 md:ml-10 float-left mr-1">
              <Image src={calendar} alt={""}></Image>
            </div>
            <h1 className="text-gray-500 text-sm">October 16, 2023</h1>
          </div>
        </div>

        <div className="lg:ml-40 lg:w-4/5 lg:p-0 lg:pt-0 lg:pb-0 p-12 pt-2 pb-1">
        <Image src={data?.images[0] ?? ''} alt={"shop"} width={500} height={200} />

          <p className="mt-10 text-base font-normal">
            {data?.description}
          </p>
          <h1 className=" mt-2 text-3xl font-semibold">
            A cleaning hub with built-in ventilation
          </h1>
          <p className="mt-2 text-base font-normal">
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>

        <div className="mx-auto max-w-screen-xl lg:ml-40 mt-8 lg:p-0 lg:pt-0 lg:pb-0 p-12 pt-2 pb-1">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w1/2">
            <Image src={data?.images[1] ?? ''} alt={"shop"} width={500} height={200} />

            </div>

            <div className="w-full md:w1/2">
            <Image src={data?.images[2] ?? ''} alt={"shop"} width={500} height={200} />

            </div>
          </div>
        </div>

        <div className="lg:ml-40 lg:w-4/5 lg:p-0 lg:pt-0 lg:pb-0 p-12 pt-2 pb-1">
          <h1 className=" mt-8 text-3xl font-semibold">
            Storage with a calming effect
          </h1>
          <p className="mt-2 text-base font-normal">
            Having a lot to store doesn’t mean it all has to go in a cupboard.
            Many bathroom items are better kept out in the open – either to be
            close at hand or are nice to look at. Add a plant or two to set a
            calm mood for the entire room (and they’ll thrive in the humid air).
          </p>
          <h1 className=" mt-2 text-3xl font-semibold">
            Kit your clutter for easy access
          </h1>
          <p className="mt-2 text-base font-normal">
            Even if you have a cabinet ready to swallow the clutter, it’s worth
            resisting a little. Let containers hold kits for different
            activities – home spa, make-up, personal hygiene – to bring out or
            put back at a moment’s notice.
          </p>
        </div>

        <div className="mx-auto max-w-screen-xl lg:ml-40 mt-8 lg:p-0 lg:pt-0 lg:pb-0 p-12 pt-2 pb-1">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w1/2">
            <Image src={data?.images[3] ?? ''} alt={"shop"} width={500} height={200} />

            </div>

            <div className="w-full md:w1/2 lg:p-0 lg:pt-0 lg:pb-0  pt-2 pb-1">
              <h1 className="mt-2 lg:-ml-16  text-3xl font-semibold ">
                An ecosystem of towels
              </h1>
              <p className="lg:-ml-16  lg:w-4/5 w-full">
                Racks or hooks that allow air to circulate around each towel
                prolong their freshness. They dry quick and the need for
                frequent washing is minimized.
              </p>
              <h1 className="mt-2 lg:-ml-16  text-3xl font-semibold">
                Make your mop disappear
              </h1>
              <p className="lg:-ml-16  lg:w-4/5 w-full">
                Having your cleaning tools organized makes them easier to both
                use and return to. When they’re not needed, close the curtain
                and feel the peace of mind it brings.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl mt-2 ">
          <div className="flex flex-col md:flex-row">
            <div className="w-full relative">
              <h1 className="justify-between font-semibold text-gray-900 text-3xl ml-8 mt-8">
                You might also like
              </h1>
              <Link href={"/blog1"}>
              <p
                
                className="absolute top-10 right-16 font-semibold text-black border-b border-black lg:flex hidden"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                More Articles<span aria-hidden="true">&rarr;</span>
              </p></Link>
            </div>
          </div>
          <Articles />
        </div>
      </div>
    </>
  );
}

export default Blogpost;
