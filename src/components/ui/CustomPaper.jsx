import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css';
// --------------------------------------------------------------------------------
function CustomPaper({
    src,
    alt,
    elevation,
    backgroundColor,
    opacity,
}) {
  return (
<>
      {/* <Paper
        elevation={0}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: '#f0f0f0', // Custom background color
        }}
      />
      <Paper
        sx={{
          width: 200,
          height: 200,
          backgroundColor: '#e0e0e0', // Custom background color
        }}
      /> */}
      <Paper
        elevation={elevation}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: backgroundColor , // Custom background color
        }}
        className='paper-custom'
      >
        <img src={src} alt={alt} 
        width='100%'
        height='100%'
        style={{
            opacity: opacity,

        }}
        />
      </Paper>
      </>
  );
}

export default CustomPaper;