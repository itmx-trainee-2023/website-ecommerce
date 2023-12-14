'use client'

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
 
import { useRouter } from 'next/navigation'

import { data } from "../../api/json/demo.ts";

export interface Root {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Images;
}

export interface Images {
  "1": string;
  "2": string;
  "3": string;
}

let products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    registration: new Date("2017-01-03"),
    capacity: 7,
    images: "ImagePlaceholder.png"
  },
  {
    id: 2,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    registration: new Date("2017-01-03"),
    capacity: 7,
    images: "ImagePlaceholder2.png"
  },
];

export default function ProductCards({}: Root) {
  const router = useRouter()

  const myData = products.map((myData) => {
    return myData.images;
  });
  console.log("data", myData);
  const imgUrl = "/image/"

  return (
    <>
      <Grid container spacing={2}>
        {products.map((data) => {
          return (
            <Grid lg={4} key={data.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl+data.images}
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
