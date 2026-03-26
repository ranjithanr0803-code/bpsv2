import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CustomSizeCard({
  title,
  header,
  content,
  paragraph,
  backgroundColor,
  headerSize,
  headerTextAlign,
  textAlign,
  margin,
  borderRadius,
}) {
  return (
    <Card
      sx={{
        // minWidth: 275,  maxWidth: 275,
        backgroundColor: backgroundColor ? backgroundColor : "",
        margin: margin ? margin : "",
        borderRadius: borderRadius ? borderRadius : "",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "0.3s",
        "&:hover": { boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" },
      }}
    >
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography> */}
        <Typography
          variant={headerSize ? headerSize : "h5"}
          component="div"
          sx={{
            textAlign: headerTextAlign ? headerTextAlign : "",
          }}
        >
          {header}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            textAlign: textAlign ? textAlign : "",
            mb: 1.5,
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
export default CustomSizeCard;
