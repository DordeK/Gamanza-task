import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {CountryType} from 'utils/api/calls'
import { useEffect, useState } from 'react';
import Filter from 'components/Filter'

// type Props = {
//   onRowClick?: Function,
//   disableRowSelectionOnClick: Boolean,
//   rows:Array<CountryType>, 
//   columns: Array<GridColDef>
// }

const Grid: React.FC<any> = ({columns, rows, filterField, ...props}) => {
  const [columnRows, setColumnRows] = useState(rows)

  useEffect(() => {
    setColumnRows(rows)
  }, [rows, columns])

  return (
    <>
      <Filter filterField={filterField} rows={rows} setColumnRows={setColumnRows}/>
      <DataGrid
        {...props}
        rows={columnRows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableColumnMenu
        pageSizeOptions={[10, 15, 30, 40, 50]}
    />
    </>
  )
}

export default Grid