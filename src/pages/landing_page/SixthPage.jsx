import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";
import { CustomGrid, CustomCard, CustomImageCard } from "@common";
import "./styles.css";
// import image1 from "../../images/image7.jpeg";
// import image2 from "../../images/img3.jpg";
// import image3 from "../../images/img4.jpg";
// import image4 from "../../images/img69.jpg";
// import image5 from "../../images/sglImg8.jpg";
// import image6 from "../../images/sglImg6.jpg";
// import image7 from "../../images/sglImg5.jpg";
// import image8 from "../../images/sglImg2.jpg";
// import image9 from "../../images/galImg1.jpeg";

import image1 from "../../images/ListImg1.jpg";
import image2 from "../../images/ListImg10.jpeg";
import image3 from "../../images/ListImg11.jpg";
import image4 from "../../images/ListImg12.jpg";
import image5 from "../../images/ListImg13.jpeg";
import image6 from "../../images/ListImg14.jpg";
import image7 from "../../images/ListImg2.jpg";
import image8 from "../../images/ListImg3.jpg";
import image9 from "../../images/ListImg4.jpeg";

import image10 from "../../images/ListImg5.jpeg";
import image11 from "../../images/ListImg6.jpeg";
import image12 from "../../images/ListImg7.jpeg";



// --------------------------------------------------------------------------------------------

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    // src: "https://th.bing.com/th/id/R.8055a706bbe58baef198af83698ebbf9?rik=UXDS%2fPbKAxG1OQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16800000%2fbeautiful-nature-random-16881551-850-684.jpg&ehk=5rFwuV2h8rtQzyALiYd9pBYMgkeLv6FjFfrAosg1c9Q%3d&risl=&pid=ImgRaw&r=0",
    src1: image1,
    src2: image2,
    src3: image3,

    alt: "",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    src: "https://i.pinimg.com/474x/a1/cb/b5/a1cbb5e86e439066940ac020a6140c2c--scenic-photography-nature-scenes.jpg",
    alt: "",
    src1: image5,
    src2: image6,
    src3: image7,

    alt: "",
  },
  {
    name: "Random Name #3",
    description: "Probably the most random thing you have ever seen!",
    src: "https://static3.businessinsider.com/image/5a4f9718c32ae61e008b4aa1-1066/extremeweathermidweststorms.jpg",
    alt: "",
    src1: image9,
    src2: image10,
    src3: image11,

  },
  {
    name: "Random Name #4",
    description: "Probably the most random thing you have ever seen!",
    // src: "https://th.bing.com/th/id/R.8055a706bbe58baef198af83698ebbf9?rik=UXDS%2fPbKAxG1OQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16800000%2fbeautiful-nature-random-16881551-850-684.jpg&ehk=5rFwuV2h8rtQzyALiYd9pBYMgkeLv6FjFfrAosg1c9Q%3d&risl=&pid=ImgRaw&r=0",
    src4: image4,
    src4: image8,
    src4: image12,
    alt: "",
  },
  // {
  //   name: "Random Name #4",
  //   description: "Hello World!",
  //   src: "https://th.bing.com/th/id/OIP.O8EWErwbCEinEIawGyZP5QHaMw?rs=1&pid=ImgDetMain",
  //   alt: "",
  // },
];
const SixthPage = () => {

  return (
    // <CustomGrid
    // // bgcolor= 'antiquewhite'
    // height= '200vh'
    // >
    <div className="div-check" style={{ height: "100vh" }}>
      <h1
        style={{
          // marginTop:'100px',
          // position: 'absolute',
          textAlign: "center",
          // left: '40%',
          // top: '130%',
          // zIndex: '150',
        }}
      >
        Our Main Products
      </h1>
      <Carousel
        style={{ height: "100%", backgroundColor: "red" }}
        sx={{ height: "150%" }}
        className="carousel-check"
        next={(next, active) =>
          console.log(`we left ${active}, and are now at ${next}`)
        }
        prev={(prev, active) =>
          console.log(`we left ${active}, and are now at ${prev}`)
        }
        interval={2000}
      >
        {items.map((item, i) => {
          console.log('item ', item);
          return (
            <Item key={i} item={item} src1={item.src1} src2={item.src2} src3={item.src3} alt={item.alt} />
          )
        })}
      </Carousel>
    </div>
    // {/* </CustomGrid> */}
  );
};

export default SixthPage;

function Item({ src1, src2, src3, alt }) {
  const itemStyle = {
    animation: "slideInLeft 2s ease-in-out",
  };

  const itemStyle1 = {
    animation: "slideInLeft 1s ease-in-out",
    height: "100%", // Adjust the height value as needed
    marginTop: "1rem",
    paddingBottom: "2rem",
    marginBottom: "3rem",
  };

  return (
    <Paper
    // style={itemStyle1}
    >
      {/* <CustomCard 

backgroundColor='pink'
title={props.item.name}
header="Lists"
content={props.item.description}
paragraph="paragrapph"
minWidth="100%"
maxWidth="100%"
margin="20px"
borderRadius="10px"
headerSize="h1"
headerTextAlign="center"
textAlign="center"
            /> */}

      <Grid container spacing={2} sx={{
        height: "78vh",
        width: "100%",
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <Grid item md={1.5} lg={1.5} sm={1.5} xs={1.5} xl={1.5}></Grid>
        <Grid item md={3} lg={3} sm={3} xs={3} xl={3} style={{
          height: '100%',
          marginTop: '5rem',
          padding: 5,

        }}
          className="image-auto"

        >
          {/* <CustomImageCard 
img={image1}
backgroundImage={image1}

/> */}
          <div style={{
            height: '60%',
            border: '5px solid black'
          }}>

            <img src={src1} alt={alt} height="100%" width="100%" />
          </div>

        </Grid>

        <Grid item md={3} lg={3} sm={3} xs={3} xl={3} style={{
          height: '100%',
          marginTop: '5rem',
          padding: 5,
          marginLeft: '3rem',
        }}
          className="image-auto"
        >
          <div style={{
            height: '60%',
            border: '5px solid black'
          }}>

            <img src={src2} alt={alt} height="100%" width="100%" />

          </div>

        </Grid>

        <Grid item md={3} lg={3} sm={3} xs={3} xl={3} style={{
          height: '100%',
          padding: 5,
          marginLeft: '3rem',
          marginTop: '5rem',
        }}
          className="image-auto"
        >
          <div style={{
            height: '60%',
            border: '5px solid black'
          }}>

            <img src={src3} alt={alt} height="100%" width="100%" />
          </div>

        </Grid>
        <Grid item md={1.5} lg={1.5} sm={1.5} xs={1.5} xl={1.5}></Grid>
      </Grid>



      {/* <img src={src} alt={alt} height= "100%" width="100%"/> */}
    </Paper>
  );
}
