import React from 'react'
import Box from '@mui/material/Box';

const TextSection:React.FC<{title:string, texts:Array<string>, link?:Boolean}>  = ({title, texts, link}) => {
  return (
    <Box className='flex flex-col	items-start'>
        <Box className='mt-5 mb-3 text-xl	font-bold'>{title}</Box>
        <Box
          sx={{
            display:'flex',
            flexDirection:'column'
          }}
        >
            {texts.map(text => link ? <a href={text}>{text}</a> : <Box>{text}</Box> )}
        </Box>
    </Box>
  )
}

export default TextSection