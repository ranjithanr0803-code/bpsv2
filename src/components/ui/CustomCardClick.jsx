import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'
// ---------------------------------------------------------------------------------------------
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function CustomCardClick({
 src,
 name,

}) {
  return (
    <div className='buttoncardclick'>
<Card sx={{ minWidth: 275 }}>

      <CardContent sx={{ overflow: 'hidden' }}>

    <img src={src} alt={name} 
    style={{ width: '100%', height: 'auto',
    //  marginBottom: '10px'
     }}
    />
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
</Card>
    </div>
  );
}
export default CustomCardClick;