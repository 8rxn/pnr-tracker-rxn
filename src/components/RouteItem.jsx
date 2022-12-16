import { Chip, Typography } from '@mui/material'
import React from 'react'

const RouteItem = ({station,i,len}) => {
  return (<>
    <Typography fontSize={{sm:'1.25rem',lg:'1.75rem',md:'1.5 rem',xs:'1rem',xl:'2rem'}} fontFamily={'monospace'} width={'100%'} textAlign='start' fontWeight={600} color="#f28553">
    |- {station.stationName} ( {station.stationCode} ) 
    {i===0?<Chip className='route-item-chip' label='Origin' color='warning' variant='outlined'> </Chip>:''} 
    {i===len-1?<Chip className='route-item-chip' label='Destination' color='warning'  variant='outlined'> </Chip>:''} 
    
     </Typography>
    
  </>
  )
}

export default RouteItem