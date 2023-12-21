"use client";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import art1 from "../../../../public/image/Homepage/Articles1.png";
import art2 from "../../../../public/image/Homepage/Articles2.png";
import art3 from "../../../../public/image/Homepage/Articles3.png";
import Link from "next/link";
interface ArticlesData {
  id: string;
  brand: string;
  images: string[];
  // Add other properties as needed
}

function Articles() {
  const [data, setData] = useState<{ products: ArticlesData[] } | null>(null);
  console.log("Articles", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=3&skip=30"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white mb-32">
      <div className="mx-auto max-w-7xl px-16 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none lg:grid-cols-3">
          {data?.products.map((data, index) => (
            <Link
              key={data.id}
              href={{
                pathname: `/blogpost/${data.id}`,
                // query: { slug: data.id },
              }}
            >
              <div className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="card flex items-center gap-x-4 text-xs shadow-2xl">
                  <div
                    className="image-container"
                    style={{
                      width: "350px",
                      height: "350px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Image
                        src={data.images[0]}
                        alt={`Shop ${index + 1}`}
                        width={300}
                        height={300}
                        layout="fixed"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="font-bold mt-4 ">
                  {data.brand}
                  <br />
                  <a
                    href="#"
                    className=" top-82 lg:top-96 lg:right-50  font-semibold text-black border-b border-black"
                  >
                    <span className=" inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Articles;
