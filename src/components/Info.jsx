import { Container, Typography } from '@mui/material'
import React from 'react'


const Info = ({info,station,header}) => {
  return (
    <Container maxWidth="sm" >
    <Typography variant="h4" fontFamily={'monospace'} fontWeight={600} color="grey" mb={6}>
        {header}</Typography>
    <img src={station} alt="" width={"100px"} />
    <Typography variant="h4" fontFamily={'monospace'} fontWeight={600} color="#f28553">
        {info?.stationName}</Typography>
    <Typography variant="h5" fontFamily={'monospace'} fontWeight={600} color="#f28553">
        Arrives: {info?.arrivalTime}</Typography>
    <Typography variant="h5" fontFamily={'monospace'} fontWeight={600} color="#f28553">
        Halt: {info?.haltTime}</Typography>
    <Typography variant="h5" fontFamily={'monospace'} fontWeight={600} color="#f28553">
        Departs: {info?.departureTime}</Typography>
    <Typography variant="h5" fontFamily={'monospace'} fontWeight={600} color="#f28553">
        Platform: {info?.platform}</Typography>
</Container>
  )
}

export default Info