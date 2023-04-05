import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Universities from 'pages/Universities'
import University from 'pages/University'
import { useEffect, useState, FunctionComponent} from 'react'
import { CountryType} from 'utils/types'
import {getData} from 'utils/api/calls'

import BreadcrumbsNavigator from 'components/BreadcrumbsNavigator';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



const Routing: FunctionComponent<{}> = () => {
  const [data, setData] = useState<CountryType[]>([])
  const [loading, setLoading] = useState<Boolean>(false)
  
  useEffect(() => {
    const setApiData = async () => {
      setLoading(true)
      setData(await getData())
      setLoading(false)
    }
    setApiData()
  }, [])


  if(loading) return (
    <Box className='flex justify-center items-center	h-screen'>
      <CircularProgress />
    </Box>
  )

  return (
    <Box className='ml-6 mt-14'>
      <BreadcrumbsNavigator />
      <Routes>
        <Route path='/' element={<Home rows={data}/>} />
        <Route path='/:country' element={<Universities data={data}/>} />
        <Route path='/:country/:faculty' element={<University data={data}/>} />
      </Routes>
    </Box>
    );
}

export default Routing;
