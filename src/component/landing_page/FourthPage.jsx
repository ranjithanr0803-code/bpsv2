import React from 'react'
import CustomGrid from '../common/CustomGrid'
import CustomCard from '../common/CustomCard'
import { Grid } from '@mui/material'
import CustomSizeCard from '../common/CustomSizeCard'

const FourthPage = () => {
  return (
    <CustomGrid bgcolor='orange'> 

        <Grid container sx={{backgroundColor:'blueviolet'}}>
        <Grid item md={8} lg={8} xs={8} xl={8} sm={8} sx={{ marginTop: "20%" }}>
            
        <CustomSizeCard
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        // backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />
        </Grid>

        <Grid item md={4} lg={4} xs={4} xl={4} sm={4}>
          <Grid container spacing={4}>
        <Grid item md={6} lg={6} xs={6} xl={6} sm={6} >
        <CustomSizeCard
        margin="20px"
        borderRadius="10px"
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        // backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />

<CustomSizeCard
        headerSize="h1"
        margin="20px"
        borderRadius="10px"
        headerTextAlign="center"
        textAlign="center"
        // backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />
        </Grid>
        <Grid item md={6} lg={6} xs={6} xl={6} sm={6} >
        <CustomSizeCard
        margin="20px"
        borderRadius="10px"
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        // backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />

<CustomSizeCard
margin="20px"
borderRadius="10px"
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
        // backgroundColor="orange"
        txtcolor="black"
        header="90+"
        content="Countries"
      />
                
            <CustomCard 
            backgroundColor='pink'
              title="Country"
              header="Lists"
              content="Contents"
              paragraph="paragrapph"
              minWidth="100%"
              maxWidth="100%"
              margin="20px"
borderRadius="10px"
        headerSize="h1"
        headerTextAlign="center"
        textAlign="center"
            />
        </Grid>
        </Grid>
        </Grid>
        </Grid>
    </CustomGrid>
  )
}

export default FourthPage;
