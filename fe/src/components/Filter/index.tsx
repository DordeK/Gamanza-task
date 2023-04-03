import React from 'react'
import TextField from '@mui/material/TextField';
import {CountryType} from 'utils/api/calls'


const Filter:React.FC<{setColumnRows:Function, rows: Array<CountryType>, filterField: string}> = ({setColumnRows, rows, filterField}) => {
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setColumnRows(rows.filter((country:any) => country[filterField]?.toLocaleLowerCase()?.includes(e.target.value.toLocaleLowerCase())))
    }
    return (
        <TextField
            id="standard-basic"
            label="Filter"
            variant="standard"
            onChange={e => handleFilter(e)} 
            style={{ position:'absolute', top:'30px', right:'40px' }}
        />
    )
}

export default Filter
