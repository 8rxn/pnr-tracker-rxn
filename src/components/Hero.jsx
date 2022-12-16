import { Box, Stack } from '@mui/system'
import { Typography,Button,TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Hero = ({setDisplay,display,text,setText,setData}) => {
    const [pnr, setPnr] = useState(0);
    const handleSubmit=()=>{
        setData([]);
    }  

    useEffect(() => {
        
        if(pnr.toString().length===10){
            setText('Submit')
        }
        else if(text!=="Hello"){
            setText('Type in Your PNR');
        }
        else{
            setText('Hello');
            
        }
    }, [pnr])

    
    
  return (
    <Box  width={{lg:'60vw',sm:'95vw',xs:'98vw'}} alignItems='center' justifyContent={'center'}>
        
        <Stack direction={'column'} gap={15}  m={0} >
            <Typography variant='h2'  mt={2} color='#f28553' m={'auto'}>
                {text}
            </Typography>
            <Stack direction={'column'} gap={10}>
            <TextField id='pnr-field' autoComplete='off' className='text-field' type='search' variant='outlined' label='PNR' color={'warning'} helperText='Enter Your PNR Details' onClick={()=>setText('Type in Your PNR')} onChange={(e)=>{setPnr(e.target.value)}} >

            </TextField>
            <Link to={pnr.length===10?`/pnr/${pnr}`:'/'} >
            <Button variant="outlined" color='warning' sx={{'fontSize':{sm:'10px',lg:'15px'},margin:'auto'}} onClick={handleSubmit}>PNR 
            Checker
            
            </Button>
            </Link>
            </Stack>
        </Stack>
       </Box>
  )
}

export default Hero