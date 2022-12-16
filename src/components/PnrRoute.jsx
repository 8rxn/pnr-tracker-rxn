import { Box,Stack,Typography } from '@mui/material';
import React from 'react'
import { useParams,Link } from 'react-router-dom'
import logo from '../assets/train-icon.png'
import Error from './Error';
import RouteItem from './RouteItem';


const PnrRoute = ({data}) => {
    const {pnr}= useParams();
    console.log(data);
    if(data.length===0)return (<Error/>)


  return (
    <Box width={{sm:'98vw',lg:'60vw'}}  bgcolor={'white'} color='blue' borderRadius={1} >
    <Stack alignItems={'center'} justifyContent='space-between' bgcolor={'#f28553'} direction='row' gap={{sm:'20px',lg:'50px'}} sx={{ 'padding': '20px 40px' }} >

        <img src={logo} alt='' className='logo-img'/>
        <Typography fontSize={{sm:'2rem',lg:'3rem',md:'3 rem',xs:'1.5rem',xl:'4rem'}} fontWeight={700} fontFamily='monospace' color="black" mt={'20px'}>
            Train <br/> Route
        </Typography>
        <Typography  fontSize={{lg:'25px',sm:'15px'}} fontWeight={800} fontFamily='monospace' color="white">
            {pnr}
        </Typography>
    </Stack>

    <Stack direction={'column'} my={8} alignItems='start' mx='auto'  width={{sm:'80%',xs:'80%',md:'60%'}}>
    {data?.data?.trainRoutes?.map((station,i)=>(
    <RouteItem key={station.stationId} station={station} i={i} len={data?.data?.trainRoutes.length}>

    </RouteItem>))}
    </Stack>

    <Stack alignItems={'center'} justifyContent='space-between' bgcolor={'#f28553'} direction='row' gap={{sm:'5px',xs:'5px',md:'1px',lg:'50px'}} sx={{ 'padding': '20px 40px' }} >

                <img src={logo} alt='' className='logo-img'/>
                <Link to={`/pnr/${pnr}`}>
                <Typography fontSize={{sm:'1.5rem',lg:'2rem',md:'1.75 rem',xs:'1rem',xl:'2.5rem'}} sx={{'textDecoration':'underline'}} fontWeight={700} fontFamily='monospace' color="black" mt={'20px'}>
                    Check PNR Status
                </Typography>
                </Link>
                    <Link to="/" >
                <Typography fontSize={{lg:'25px',sm:'15px'}} fontWeight={800} fontFamily='monospace' color="white" border="1px solid white" borderRadius={2} p={1}>
                    Back To Home
                </Typography>
                    </Link>
            </Stack>
    
    </Box>
  )
}

export default PnrRoute