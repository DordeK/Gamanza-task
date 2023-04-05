import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Caroseul from 'components/Caroseul'
import Box from '@mui/material/Box';
import TextSection from 'components/TextSection'
import {SchoolType, CountryType} from 'utils/types'


const University:React.FC<{data:Array<CountryType>}>  = ({data}) => {
  let { country, faculty } = useParams();
  const navigate = useNavigate();
  const [university, setUniversity] = useState<SchoolType | null >(null)

  useEffect(() => {
    const selectedUniversety = data.find(d => d.countryName === country)?.schools.find(school => school.name === faculty)
    if(selectedUniversety){
      setUniversity(selectedUniversety)
    }
    if(data.length && !selectedUniversety){
      navigate(`/`)
    }
  }, [data, country, faculty])

  if(university === null) return <></>
  return (
    <>
      <Box className='mb-5 text-3xl text-center'>
        {university.name}
      </Box>
      <Box className='flex flex-row	justify-evenly	items-center mb-52'>
        <Box>
          <img
            className='h-96 object-contain'
            src={`http://localhost:3001/university/image/${university.name}`} 
            alt={university.name} 
          />
        </Box>
        <Box>
          <TextSection title='Domains:' texts={university.domains} />
          <TextSection link title='Web pages:' texts={university.web_pages} />
          <TextSection title='state/province:' texts={[university.stateProvince ? university.stateProvince : '/']} />
        </Box>
      </Box>
      <Caroseul universities={data.find(d => d.countryName === country)?.schools} />
    </>
  )
}

export default University