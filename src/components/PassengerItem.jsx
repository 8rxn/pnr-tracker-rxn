import { Stack, Typography } from '@mui/material'
import React from 'react'

const PassengerItem = ({passenger,i}) => {
  return (

    <Stack direction={'row'} alignItems='center' justifyContent='space-around' color='#000' width={'70%'} margin='auto' borderBottom={'1px solid grey'}>
        <Typography variant='h5' fontWeight={500} fontFamily='monospace'>
            {i+1}.
        </Typography>
        
        <Typography variant="h5" fontFamily={'monospace'} fontWeight={600} color="#f28553">
            {passenger.currentCoach}
            -
            
            {passenger.currentBerthNo}
        </Typography>
        
    </Stack>


  )
}

export default PassengerItem