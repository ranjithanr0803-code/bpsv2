import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
// ----------------------------------------------------------------------------
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CustomImageCard({
  title,
  header,
  content,
  paragraph,
  minWidth,
  maxWidth,
  borderRadius,
  headerSize,
  headerTextAlign,
  textAlign,
  backgroundColor,
  cardHeight,
  src,
  alt,
  opacity,
  backgroundImage,
  img,
}) {
  return (
    <Card
      sx={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",

        minWidth: minWidth ? minWidth : 500,
        maxWidth: maxWidth ? maxWidth : 500,
        height: cardHeight || "",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 100)",
        borderRadius: borderRadius ? borderRadius : "10px",
        backgroundColor: backgroundColor ? backgroundColor : "",
        // content: content ? content : "",

        transition: "0.3s",
        "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
      }}

      //     className='card-image'
    >
      <CardContent>
        {/* <img src={`url(${src})`} alt={alt} 
        width='100%'
        height='100%'
        style={{
            opacity: opacity,

        }} 

        /> */}
      </CardContent>
    </Card>
  );
}
export default CustomImageCard;
