import { Typography } from '@mui/material'
import React from 'react'

const CustomLogoCard = ({
    
        src,
        name,
        title,
}) => {
  return (
    <div>
      <img src={src} alt={name} />
      <Typography variant='h6' style={{
        justifyContent: 'center',
        textAlign: 'center',
      }}>{title}</Typography>
    </div>
  )
}

export default CustomLogoCard
