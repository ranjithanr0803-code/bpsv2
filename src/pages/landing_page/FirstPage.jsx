import { Grid } from "@mui/material";
import React from "react";
import {
  CustomGrid,
  CustomCardClick,
  CustomSizeCard,
} from "@common/CustomGrid";

const FirstPage = () => {
  console.log("FirstPage");
  return (
    <CustomGrid bgcolor="green">
      <CustomSizeCard
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        minWidth="100%"
        maxWidth="100%"
        bgcolor="white"
        txtcolor="black"
        header="Global Access*"
        title="Welcome to the bank"
        content="*As of 31st March, 2021"
        paragraph="You can use this bank"
      />

      <CustomSizeCard
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        backgroundColor="#ff6900"
        txtcolor="black"
        header="90+"
        content="*As of 31st March, 2021"
      />

      <CustomSizeCard
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        backgroundColor="#fcb900"
        txtcolor="black"
        header="90+"
        content="Countries"
      />

      <CustomSizeCard
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />

      {/* <CustomCardClick
        src="https://www.lifewire.com/thmb/vjMqwKBV5kkwsQ_k9TIv-s_-Bxk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.39.33AM-127934d17c454f95a935ce9f5058a964.jpg"
        name="image1"
      /> */}
    </CustomGrid>
  );
};

export default FirstPage;
