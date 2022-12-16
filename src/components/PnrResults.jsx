import { Avatar, Box, Button, Container, Skeleton, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Station1 from '../assets/rs1.png';
import Station2 from '../assets/rs2.png';

import logo from '../assets/train-icon.png';
import Info from './Info';
import Error from './Error';
import PassengerItem from './PassengerItem';

const PnrResults = ({data,setData}) => {
    const { pnr } = useParams();

    useEffect(() => {

        const fetchData = async () => {

            let headersList = {
                "X-RapidAPI-Key": "1664850bc8msh09875e1fb1c0b40p1e8d90jsn78b5edd175ce",
                "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com"
            }

            let response = await fetch(`https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnr}`, {
                method: "GET",
                headers: headersList
            });

            let res = await response.json();
            setData(res);

        }

        fetchData();

    }, [])

    if(data?.code===302){
        return (<Error wpnr={true}/>)
    }
        return (
            <Box width={{sm:'98%',xs:'98%',md:'70vw',lg:'60vw'}} bgcolor={'white'} color='blue' borderRadius={1} >
            <Stack alignItems={'center'} justifyContent='space-between' bgcolor={'#f28553'} direction='row' gap={{sm:'20px',lg:'50px'}} sx={{ 'padding': '20px 40px' }} >

                <img src={logo} alt='' className='logo-img'/>
                <Typography fontSize={{sm:'2rem',lg:'3rem',md:'3 rem',xs:'1.5rem',xl:'4rem'}} fontWeight={700} fontFamily='monospace' color="black" mt={'20px'}>
                    PNR Results
                </Typography>
                <Typography fontSize={{lg:'25px',sm:'15px'}} fontWeight={800} fontFamily='monospace' color="white">
                    {pnr}
                </Typography>
            </Stack>
            <Stack direction='column'>
            <Typography fontSize={{sm:'1.25rem',lg:'1.75rem',md:'1.5 rem',xs:'1rem',xl:'2rem'}} mt={4} fontFamily={'monospace'}  fontWeight={600} color="#f28553">
        {data?.data?.trainInfo.trainNo} :   {data?.data?.trainInfo.name}
        </Typography>
            <Typography fontSize={{sm:'1.25rem',lg:'1.75rem',md:'1.5 rem',xs:'1rem',xl:'2rem'}} mt={4} fontFamily={'monospace'}  fontWeight={600} color="#f28553">
                Date : {data?.data?.trainInfo.dt}
        </Typography>
                <Stack mt={'40px'}    spacing={{ xs: 12, sm: 12, md: 4 }} alignItems='center' justifyContent={'space-evenly'} direction={{ xs: 'column', md: 'row' }} >
                   <Info info={data?.data?.boardingInfo} station={Station1} header={'Boarding' }/>
                   <Info info={data?.data?.destinationInfo} station={Station2} header={'Destination' }/>


                
                </Stack>
                <Typography variant="h3" color="#000" my={4} fontWeight={700} >Passenger List</Typography>
                <Stack direction={"column"} my={2}> 
                    {data?.data?.passengerInfo?.map((passenger,i)=>(
                    <PassengerItem key={i} i={i} passenger={passenger}/>))}
                </Stack>

            </Stack>


            <Stack alignItems={'center'} justifyContent='space-between' bgcolor={'#f28553'} direction='row' gap={{sm:'20px',lg:'50px'}} sx={{ 'padding': '20px 40px' }} >

                <img src={logo} alt='' className='logo-img'/>
                <Link to={`/pnr/${pnr}/route`}>
                <Typography fontSize={{sm:'1.5rem',lg:'2rem',md:'1.75 rem',xs:'1rem',xl:'2.5rem'}} sx={{'textDecoration':'underline'}} fontWeight={700} fontFamily='monospace' color="black" mt={'20px'}>
                    Check Train Route
                </Typography>
                </Link>
                    <Link to="/" >
                <Typography fontSize={{lg:'25px',sm:'15px'}} fontWeight={800} fontFamily='monospace' color="white" border="1px solid white" borderRadius={2} p={1}>
                    Go Back
                </Typography>
                    </Link>
            </Stack>

        </Box>
    )
}


export default PnrResults