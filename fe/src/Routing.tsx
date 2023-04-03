import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Universities from 'pages/Universities'
import { useEffect, useState, FunctionComponent} from 'react'
import {getData, CountryType} from 'utils/api/calls'
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
    <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', height:'100vh'}}>
      <CircularProgress />
    </Box>
  )

  return (
    <Box sx={{marginLeft:'20px', marginTop: '50px'}}>
      <BreadcrumbsNavigator />
      <Routes>
        <Route path='/' element={<Home rows={data}/>} />
        <Route path='/:country' element={<Universities data={data}/>} />
      </Routes>
    </Box>
    );
}

export default Routing;
