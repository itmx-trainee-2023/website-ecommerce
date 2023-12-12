'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { data } from "../../api/json/demo.ts";

type Props = {}
interface DataJson {
    id: string
    name: string
  }

export default function productCards({}: Props) {
    
    // const data = jsonFile.map((myData) => {
    //     return myData
    // })

    console.log(data);

    return (
    <>
    <Grid container spacing={2}>
        {/* <p>{data[0].id}</p> */}
      
        {data.map((data) => { 
            
              <Grid lg={4} key={data.id}>
              <Card>
              <CardActionArea>
              <CardMedia
                  component="img"
                  height="140"
                  image={data.image}
                  alt="green iguana"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  </Typography>
              </CardContent>
              </CardActionArea>
              </Card>
          </Grid>
        })}

    </Grid>
  </>
  )
}