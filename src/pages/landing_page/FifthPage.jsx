import React, { useState } from 'react'
import { CustomLogoCard, CustomGrid, CustomImageCard } from '@common'
import { Box, Grid, IconButton } from '@mui/material'
import CustomPaper from '@common/CustomPaper'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// ------------------------------------------------------------------------------------------
const FifthPage = () => {

  const arrayData = [1, 2, 3, 4, 5, 6,];
  const [index, setIndex] = useState(0);
  return (

    <CustomGrid >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          overflow: 'hidden',
          flexWrap: 'wrap',
          justifyContent: 'center', // Center the items horizontally
          alignItems: 'center', // Center the items vertically
          padding: 2, // Add some padding to the Box
          gap: 2, // Add a gap between items
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'aliceblue',
        }}
      >
        {arrayData.map((item, i) => {

          return <CustomPaper
            src='https://wallpapercave.com/wp/wp6124246.jpg'
            alt='Image'
            elevation={index === i ? 3 : 0}
            backgroundColor={index === i ? '#f0f0f0' : '#c0c0c0'}
            opacity={index === i ? 1 : 0.5}

          />
        })}
      </Box>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', textAlign: 'center' }}>
        {arrayData.map((item, i) => {


          return index === i ? <RadioButtonCheckedIcon /> :
            <IconButton onClick={() => setIndex(i)}>
              <RadioButtonUncheckedIcon />
            </IconButton>

        })}


      </div>



      <CustomGrid height='100%'>

        <Grid container spacing={2}>
          <Grid item md={6} lg={6} xs={6} xl={6} sm={6} >
            <CustomImageCard
              src='https://wallpapercave.com/wp/wp6124246.jpg'
              alt='Image'

            />
          </Grid>
          <Grid item md={6} lg={6} xs={6} xl={6} sm={6} >
            <CustomImageCard
              src='https://wallpapercave.com/wp/wp6124246.jpg'
              alt='Image'

            />
          </Grid>
        </Grid>


      </CustomGrid>


      {/* <Grid container spacing={2}>
<Grid item md={3} lg={3} xs={3} xl={3} sm={3} >
    <CustomLogoCard 
    src="https://www.lifewire.com/thmb/SFEc4jDldsGm33lTFFkhX6a7jhI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg"
    title="First Image"
    name="Image1"
    />
</Grid>
<Grid item md={3} lg={3} xs={3} xl={3} sm={3} >
    <CustomLogoCard 
    src="https://www.lifewire.com/thmb/SFEc4jDldsGm33lTFFkhX6a7jhI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg"
    title="First Image"
    name="Image1"
    />
</Grid>
<Grid item md={3} lg={3} xs={3} xl={3} sm={3} >
    <CustomLogoCard 
    src="https://www.lifewire.com/thmb/SFEc4jDldsGm33lTFFkhX6a7jhI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg"
    title="First Image"
    name="Image1"
    />
</Grid>
<Grid item md={3} lg={3} xs={3} xl={3} sm={3} >
    <CustomLogoCard 
    src="https://www.lifewire.com/thmb/SFEc4jDldsGm33lTFFkhX6a7jhI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ScreenShot2020-04-20at10.03.23AM-d55387c4422940be9a4f353182bd778c.jpg"
    title="First Image"
    name="Image1"
    />
</Grid>
        
</Grid> */}
    </CustomGrid>


  )
}

export default FifthPage
