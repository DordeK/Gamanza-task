import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import {CountryType} from 'utils/types'
import { useNavigate } from "react-router-dom";
import Grid from 'components/Grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', minWidth: 90 },
  {
    field: 'countryName',
    headerName: 'Country',
    filterable:false,
    minWidth: 300,
  },
  {
    field: 'countryCode',
    headerName: 'Country Code',
    filterable:false,
    minWidth: 200,
  },
  {
    field: 'flag',
    headerName: 'Flag',
    type: 'image',
    filterable:false,
    renderCell:(params:any ) => <img alt={params.value} src={params.value}/>,
    minWidth: 110,
  }
];
const Home: React.FC<{rows:Array<CountryType>}> = ({rows}) => {
  const navigate = useNavigate();

  return <Grid filterField='countryName' columns={columns} rows={rows} onRowClick={(row: any) => navigate(`/${row.row.countryName}`)}/>;
}

export default Home