"use client"
import React from 'react'
import banner1 from "../../../../public/image/dr.eak comment website 23Sep23.pdf (3).png";
import Image from "next/image";
import Container from '@mui/material/Container';

type Props = {}

export default function bannerHome({}: Props) {
  return (
    <>
    <Container>
        <Image src={banner1} alt="banner" width="440" height="280" objectFit="cover"/>
    </Container>
    </>
  )
}