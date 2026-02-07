import { Grid } from '@mui/material'
import React from 'react'
import CustomSizeCard from '../common/CustomSizeCard'

const SecondPage = ({bgcolor}) => {
  return (
    <Grid container sx={{ width: '100%', height: '100vh', backgroundColor: bgcolor }}>
        <Grid item md={8} lg={8} xs={8} xl={8} sm={8} >
    <CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />

<CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />

<CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />

<CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />
        </Grid>
        <Grid item md={4} lg={4} xs={4} xl={4} sm={4} >

        <CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />
        <CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />
        <CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />
        <CustomSizeCard

bgcolor='white'
txtcolor='black'
header='BadBank Landing Module'
title='Welcome to the bank'
content='You can use this bank'
paragraph='You can use this bank'
    />
        </Grid>
      </Grid>
    
  )
}

export default SecondPage
