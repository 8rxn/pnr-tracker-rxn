import { Box, Typography, Button,Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/train-icon.png';
import { useParams } from 'react-router-dom';

const Error = ({wpnr}) => {
    const {pnr}=useParams();

    console.log('error pnr wrong')
  return (
   <Box width={{sm:'98vw',lg:'60vw'}}  bgcolor={'white'} color='blue' borderRadius={1} pb={4}>
        <Stack alignItems={'center'} justifyContent='space-between' bgcolor={'#f28553'} direction='row' gap={{sm:'20px',lg:'50px'}} sx={{ 'padding': '20px 40px' }} >

            <img src={logo} alt='logo-img' className='logo-img'/>
            <Typography fontSize={{sm:'2rem',lg:'3rem',md:'3 rem',xs:'1.5rem',xl:'4rem'}} fontWeight={700} fontFamily='monospace' color="black" mt={'20px'}>
            Error
            </Typography>
            <Typography fontSize={{lg:'25px',sm:'15px'}} fontWeight={800} fontFamily='monospace' color="white">
                {pnr}
            </Typography>
        </Stack>
        
        <Stack direction='column' gap={4}  justifyContent='center' alignItems={'center'}>
        <Typography variant="h3" fontWeight={700} mt={8} color="#f28553" >
        {wpnr===true?"PNR Details Not Found / Does Not Exist":"Something Seems To be Not Right"}    
        </Typography>

        <Link to='/'>
        <Button variant="outlined" color="warning">
          Go Back Home
        </Button>
        </Link>
        </Stack>
            
   </Box>
  )
}

export default Error