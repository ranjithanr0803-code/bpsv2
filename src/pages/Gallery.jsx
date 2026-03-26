import { Container, Grid } from "@mui/material";
import React from "react";
import Image1 from "../images/image7.jpeg";

const Gallery = () => {
  return (<>
    <div style={{
      marginTop: "100px", textAlign: "center"
    }}>
      <h1>Our Products</h1>
    </div>
    <Grid container style={{
      marginLeft: "60px"
    }}>
      <Grid item md={4} sm={4} lg={4} xl={4} xs={4}

      >

        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />


      </Grid>
      <Grid item md={4} sm={4} lg={4} xl={4} xs={4} >
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />



      </Grid>
      <Grid item md={4} sm={4} lg={4} xl={4} xs={4}>
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />
        <img src={Image1} alt="img1" />



      </Grid>

    </Grid>
  </>
  );
};

export default Gallery;