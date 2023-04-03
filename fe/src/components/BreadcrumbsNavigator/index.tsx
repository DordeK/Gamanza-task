import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
import Filter from 'components/Filter'
const BreadcrumbsNavigator = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(path => path);
      
    return (
        <Box sx={{marginBottom:'20px'}}>
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
                    <Link underline="hover" color="inherit" to="/" component={RouterLink as any} >
                        {value.replaceAll('%20', ' ')}
                    </Link>
                );
            })}
            </Breadcrumbs>
        </Box>
    );
}

export default BreadcrumbsNavigator