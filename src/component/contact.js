import React from "react";
import CustomImageCard from "./common/CustomImageCard";
import { Grid, Typography } from "@mui/material";
import Img3 from "./../images/contactImg2.jpeg";
import MapComponent from "./googleMap";

const Contact = () => {
  return (
    

<>
    <Grid container sx={{
      // backgroundColor: "#996633",
      // backgroundImage: `url(${Img3})`,
      backgroundSize: "cover",
      // backgroundColor: "gray",
          background: "linear-gradient(to bottom, #536db5, #f5875fff)", // Add your gradient here
      
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      // filter: "blur(0.5px)" ,  
    }}>
      <Grid item md={6} lg={6} sm={6} xs={6} xl={6}>
      <div
      style={{
        height: "65vh",
        width: "80%",
        // backgroundSize: "cover",
        // backgroundColor: "#ccddff",
      backgroundImage: `url(${Img3})`,

        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // filter: "blur(2px)" ,
        marginTop: "115px",
        fontFamily:"serif",
        color:"aliceblue",
        fontSize:"1.5rem",
        marginLeft: "20px",
        marginRight: "600px",
        // backgroundPosition: "center 0.5%  !important",
        // opacity: 0.9,
      }} >
       <h1>
          <span style={{ textAlign: "center", fontSize: "120px" }}>Contact Us</span>
          </h1>
          <h3>
          For any queries or support, reach out to us. We’re always happy to
          assist.
        </h3>
       
       </div>
        
      </Grid>
      <Grid item md={6} lg={6} sm={6} xs={6} xl={6}
      
      >
        <Typography
        style={{ marginTop: "150px", color: "white", marginBottom: "5px", 
        fontFamily:"serif",fontSize:"40px",

        }}>
           Registered Office:
        </Typography>
       
       <Typography style={{ color: "white", marginTop:"0px", fontFamily:"serif",fontSize:"25px"}}>
       <br />
       Number:
        <br />
        Exact address
        <br/>area karnataka
        <br />
        Reach out to us  @ :<a href="https://maps.app.goo.gl/BLJdVHp4uiGapyMn8" target="_blank">BPS </a>
       <br/>
       website : Add official site link here
       </Typography>
       
      </Grid>
      <Typography style={{ color: "white",marginLeft:"5rem",
        marginRight:"200px",textAlign:"left",fontWeight:"bold",
      color:"black",
      marginTop: "50px", fontFamily:"serif",fontSize:"30px",}}>
       
        <h3>
          For any queries or complaints write to the Head of Vigilance: 
          <br />number: 8041868000
         

          <br />
          Email: info.baironics@gmail.com
        </h3>
        </Typography>
      <Grid item md={12} lg={12} sm={12} xs={12} xl={12}>
      <div
      class="contactus"
      style={{
        // backgroundImage: `url(${Img69})`,
        height: "130vh",
        backgroundSize: "cover",
        // backgroundColor: "#1E90FF",
        // backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // filter: "blur(2px)" ,
        // backgroundColor: "#1c07fa",
        marginRight: "80px",
        // backgroundPosition: "center 0.5%  !important",
        // opacity: 0.9,
      }}
    >
      <Typography 
      style={{ color: "white", fontFamily:"serif", fontWeight:'bold',
      color:"black",
      fontSize:'1.5rem' ,marginTop:"50px" , textAlign:"right",}}
      >

       <h2> Reach out to our customer service team at: </h2>
        {/* <br /> */}
        Reach out to us  @ :<a href="https://maps.app.goo.gl/BLJdVHp4uiGapyMn8" target="_blank" color="yellow">BPS </a>
        <br />
       website : Add official site link here

        <br/>
        Email: info.baironics@gmail.com
        <br />
        Phone: +91-80-41868000
      </Typography>
      <MapComponent></MapComponent>
      <Typography style={{ marginTop: "50px", textAlign: "center", 
      fontFamily:"serif",fontSize:"20px", color: "white", marginBottom: "50px",}}>
      © 2025 Baironics Printing Solutions. All Rights Reserved.Design & Developed by BPS.
      <br />
      <br />
      <br />
    
      </Typography>
    </div>
      </Grid>
    </Grid>

    
    </>
  );
};

export default Contact;
