import React from 'react'
import {
  CustomGrid,
  CustomSizeCard,
} from '@common'

const ThirdPage = () => {
  return (
    <CustomGrid >
      <CustomSizeCard
        bgcolor='white'
        txtcolor='black'
        header='BadBank Landing Module'
        title='Welcome to the bank'
        content='You can use this bank'
        paragraph='You can use this bank'
      />
    </CustomGrid>
  )
}

export default ThirdPage;
