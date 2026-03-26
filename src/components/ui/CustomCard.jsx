import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CustomCard({
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
dataStyles,
exploreClickLink,
}) {

  const navigate = useNavigate();
  
  return (
    <>
    <Card
      sx={{
        
        backgroundImage: backgroundImage? `url(${src})` :'',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // filter: 'blur(6px)',
        // backgroundPosition: "center",
        minWidth: minWidth ? minWidth : 275,
        maxWidth: maxWidth ? maxWidth : 275,
        height: height ? height : 275,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: borderRadius ? borderRadius : "10px",
        backgroundColor: (backgroundColor && !backgroundImage) ? backgroundColor : "",
        transition: "0.3s",
        // "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
      }}
    >
      {/* <CustomDesign align={contentAlign}>
        <CardContent>
          <Typography
           sx={{ fontSize: 20,  }} 
           color="text.secondary" 
           gutterBottom>
            {title}
          </Typography>
          <Typography
            variant={headerSize ? headerSize : "h5"}
            color='white'
            component="div"
            sx={{
              textAlign: headerTextAlign ? headerTextAlign : "",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            }}
          >
            {header}
          </Typography>
          <Typography
            color={contextColor ? contextColor : "text.secondary"}
            sx={{
              textAlign: textAlign ? textAlign : "",
              mb: 1.5,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
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
        <CardActions
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
        </CardActions>
      </CustomDesign> */}
    </Card>

<Card
sx={{
  ...dataStyles,
  background: 'none',
  position: 'absolute',
  boxShadow: 'none',

  // backgroundImage: backgroundImage? `url(${src})` :'',
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // // backgroundPosition: "center",
  minWidth: 500,
  maxWidth: 500,
  // height: height ? height : 275,
  // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  // borderRadius: borderRadius ? borderRadius : "10px",
  // backgroundColor: (backgroundColor && !backgroundImage) ? backgroundColor : "",
  // transition: "0.3s",
  // "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
}}
>
{/* <CustomDesign align={contentAlign}> */}
  <CardContent>
    <Typography
     sx={{ fontSize: 20,  }} 
     color="text.secondary" 
     gutterBottom>
      {title}
    </Typography>
    <Typography
      variant={headerSize ? headerSize : "h5"}
      color='#a61742'
      component="div"
      sx={{
        textAlign: headerTextAlign ? headerTextAlign : "",
        textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)"
      }}
    >
      {header}
    </Typography>
    <Typography
      color={contextColor ? contextColor : "text.secondary"}
      sx={{
        textAlign: textAlign ? textAlign : "",
        mb: 1.5,
      fontFamily:'sans-serif',
      fontWeight:'bold',  
      fontStyle:'italic',
      color:'White',
        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
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
  <CardActions
    style={{
      justifyContent: buttonJustifyContent
        ? buttonJustifyContent
        : "center",
    }}
  >
    <Button
      size="large"
      sx={{
        // backgroundColor: "#4CAF50",
        backgroundColor: "#f0a211",

        color: "white",
        borderRadius: "30px",
        "&:hover": { backgroundColor: "#45a049" },
      }}
      onClick={()=>{
        navigate(`/${exploreClickLink}`);
      }}
    >
      {buttonName ? buttonName : "Learn More"}
    </Button>
  </CardActions>
{/* </CustomDesign> */}
</Card>
</>
  );
}
export default CustomCard;

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
