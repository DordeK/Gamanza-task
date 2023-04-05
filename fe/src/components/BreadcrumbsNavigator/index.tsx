import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';

const BreadcrumbsNavigator = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(path => path);
      
    return (
        <Box className='mb-5'>
            <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/" component={RouterLink as any} >
                Home
            </Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                return last ? (
                    <Typography color="text.primary" key={value}>
                        {value.replaceAll('%20', ' ')}
                    </Typography>
                ) : (
                    <Link key={value} underline="hover" color="inherit" to={pathnames.slice(0, index+1).join('/')} component={RouterLink as any} >
                        {value.replaceAll('%20', ' ')}
                    </Link>
                );
            })}
            </Breadcrumbs>
        </Box>
    );
}

export default BreadcrumbsNavigator