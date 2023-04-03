import { useEffect, useState, FunctionComponent} from 'react'
import { GridColDef } from '@mui/x-data-grid';
import {CountryType, SchoolType} from 'utils/api/calls'
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";
import Grid from 'components/Grid'


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
    renderCell:({value} ) =>  <Box sx={{textAlign:'center', width: '100%'}}>{value ? value : '-'}</Box>,
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
  let { country } = useParams();
  const [universities, setUniversities] = useState<SchoolType[]>([])
  
  useEffect(() => {
    const schoolsList = data.find(d => d.countryName === country)?.schools?.map((d, index) => {
      d['id'] = index
      return d;
    });
    if(schoolsList){
      setUniversities(schoolsList)
    }
  }, [data, country])

  console.log({data, universities})

  return (
    <Grid filterField='name' columns={columns} rows={universities} disableRowSelectionOnClick/>
      // <DataGrid
      //   autoHeight
      //   disableRowSelectionOnClick
      //   rows={universities}
      //   columns={columns}
      //   disableColumnFilter
      //   disableColumnMenu
      //   initialState={{
      //     pagination: { paginationModel: { pageSize: 10 } },
      //   }}
      //   pageSizeOptions={[10, 15, 30, 40, 50]}
      // />
  )
}

export default Universities