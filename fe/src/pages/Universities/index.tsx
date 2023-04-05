import { useEffect, useState} from 'react'
import { GridColDef } from '@mui/x-data-grid';
import {CountryType, SchoolType} from 'utils/types'
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";
import Grid from 'components/Grid'
import { useNavigate } from "react-router-dom";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', minWidth: 90 },
  {
    field: 'name',
    headerName: 'Name',
    filterable:false,
    minWidth: 500,
  },
  {
    field: 'stateProvince',
    headerName: 'State/Province',
    renderCell:({value} ) =>  <Box className='text-center	w-full' >{value ? value : '-'}</Box>,
    filterable:false,
    minWidth: 150,
  },
  {
    field: 'web_pages',
    headerName: 'Web pages',
    filterable:false,
    renderCell:({value} ) => <>{value[0]}</>,
    minWidth: 400,
  },
  {
    field: 'domains',
    headerName: 'Domain',
    filterable:false,
    renderCell:({value} ) => <>{value[0]}</>,
    minWidth: 300,
  }
];

const Universities:React.FC<{data:Array<CountryType>}>  = ({data}) => {
  const navigate = useNavigate();
  let { country } = useParams();
  const [universities, setUniversities] = useState<SchoolType[]>([])
  
  useEffect(() => {
    const schoolsList = data.find(d => d.countryName === country)?.schools?.map((d, index) => {
      d['id'] = index
      return d;
    });

    if(data.length && !schoolsList){
      navigate(`/`)
    }
    
    if(schoolsList){
      setUniversities(schoolsList)
    }
    

  }, [data, country])



  return <Grid filterField='name' columns={columns} rows={universities} onRowClick={(row: any) => navigate(`/${country}/${row.row.name}/`)}/>
}

export default Universities