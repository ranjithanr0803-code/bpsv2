import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function DetailsCard({
  title,
  header,
  content,
  paragraph,
  minWidth,
  maxWidth,
  height,
  borderRadius,
  headerSize,
  headerTextAlign,
  textAlign,
  backgroundColor,
  buttonJustifyContent,
  buttonName,
  contentAlign,
  backgroundImage,
src,
contentVariant,
contextColor,
alt,
}) {
  
  return (
    <Card
      sx={{
        
        backgroundImage: backgroundImage? `url(${src})` :'',
        backgroundSize: "cover",
        backgroundColor:"#B0E0E6",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        minWidth: minWidth ? minWidth : 175,
        maxWidth: maxWidth ? maxWidth : 175,
        height: height ? height : 175,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: borderRadius ? borderRadius : "20px",
        backgroundColor: (backgroundColor && !backgroundImage) ? backgroundColor : "",
        transition: "0.3s",
        "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
      }}
    >
        <CardContent>
          <Typography
           sx={{ fontSize: 30,  }} 
           color="text.secondary" 
           gutterBottom>
            {title}
          </Typography>
          <Typography
            variant={headerSize ? headerSize : "h5"}
            color=' #4080bf'
            component="div"
            sx={{
              textAlign: headerTextAlign ? headerTextAlign : "",
              textShadow: "1px 1px 2px black",
            //   rgba(0, 0, 0, 0.5)
            }}
          >
            {header}
          </Typography>
          <Typography
            color={contextColor ? contextColor : "text.secondary"}
            sx={{
              textAlign: textAlign ? textAlign : "",
              mb: 1.5,
              color: 'black',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              fontFamily: 'serif',
              borderRadius:'50px'
            //   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
            variant={contentVariant || ""}
          >
            {content}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: textAlign ? textAlign : "",
            }}
          >
            {paragraph}
          </Typography>
        </CardContent>
        {/* <CardActions
          style={{
            justifyContent: buttonJustifyContent
              ? buttonJustifyContent
              : "center",
          }}
        >
          <Button
            size="big"
            sx={{
              backgroundColor: "#4CAF50",
              color: "white",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#45a049" },
            }}
          >
            {buttonName ? buttonName : "Learn More"}
          </Button>
        </CardActions> */}
    </Card>
  );
}
export default DetailsCard;

const CustomDesign = ({ left, right, center, all, children, align }) => {
  console.log("align ", align);
  console.log("children ", children);

  return (
    <>
      {align === "right" && (
        <Grid container>
          <Grid item md={6} sm={6} lg={6} xl={6} xs={6}></Grid>
          <Grid item md={6} sm={6} lg={6} xl={6} xs={6}>
            {children}
          </Grid>
        </Grid>
      )}

      {align === "left" && (
        <Grid container>
          <Grid item md={6} sm={6} lg={6} xl={6} xs={6}>
            {children}
          </Grid>
          <Grid item md={6} sm={6} lg={6} xl={6} xs={6}></Grid>
        </Grid>
      )}

      {align === "center" && (
        <Grid container>
          <Grid item md={4} sm={4} lg={4} xl={4} xs={4}></Grid>
          <Grid item md={4} sm={4} lg={4} xl={4} xs={4}>
            {children}
          </Grid>
          <Grid item md={4} sm={4} lg={4} xl={4} xs={4}></Grid>
        </Grid>
      )}

      {align === "all" && (
        <Grid container>
          <Grid item md={12} sm={12} lg={12} xl={12} xs={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </>
  );
};
