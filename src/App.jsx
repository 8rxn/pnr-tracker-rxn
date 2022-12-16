import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import { Route,Routes } from 'react-router-dom'
import { Stack, TextField,Box } from '@mui/material'
import PnrResults from './components/PnrResults'
import PnrRoute from './components/PnrRoute'

function App() {
const [display, setDisplay] = useState(false);
const [text, setText] = useState('Hello')
const [data, setData] = useState([])

  return (
   <>
    <Routes>
      <Route path="/" element={<Hero setDisplay={setDisplay} display={display} text={text} setText={setText} setData={setData}/>}></Route>
      <Route path='/pnr/:pnr' element={<PnrResults data={data} setData={setData} />}></Route>
      <Route path='/pnr/:pnr/route' element={<PnrRoute  data={data}/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
