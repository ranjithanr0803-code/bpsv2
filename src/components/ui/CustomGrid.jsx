import { Grid } from '@mui/material'
import React from 'react'

const CustomGrid = ({bgcolor, height, children}) => {
  return (
       <Grid container sx={{ width: '100%', height: height ? height : '100vh', 
       backgroundColor: bgcolor ? bgcolor : '', overflow: 'hidden',  }}>
        <Grid item md={12} lg={12} xs={12} xl={12} sm={12} sx={{ width: '100%', height: '150%', overflow: 'hidden',  }} >
{children}
        </Grid>
      </Grid>
  )
}

export default CustomGrid
