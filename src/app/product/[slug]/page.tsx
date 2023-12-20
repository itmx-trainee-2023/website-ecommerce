"use client";
import React, { useContext, useState, useEffect  } from "react";
import Image from "next/image";
import axios from "axios";


export default function Page({ params }: { params: { slug: string } }) {
    const [data, setData] = useState(null)

    console.log(data);
    
    useEffect(() => {
   
    
        const fetchData = async () => {
          
          axios({
            method: 'get',
            url: `https://dummyjson.com/products/${params.slug}`,
          })
            .then(function (response) {
              let result = []
              result = response.data;
              // console.log(result);
              setData(result)
            });
        }
      
       fetchData()
      }, [])

    return (
        <>
        <div>My Post: {params.slug}</div>
        {/* <div>Product: {data?.title}</div> */}
        </> 
    )
  }