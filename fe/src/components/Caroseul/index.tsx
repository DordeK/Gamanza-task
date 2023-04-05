import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {SchoolType} from 'utils/types'
import {Link as RouterLink} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Link from '@mui/material/Link';

const Caroseul:React.FC<{universities:Array<SchoolType> | undefined}> = ({universities}) => {
    let { country } = useParams();

    const caroseulUniversities = universities
        ?.sort(() => .5 - Math.random())
        ?.slice(0,5)

    return(
        <Carousel
            sx={{
                textAlign:'center'
            }}
            fullHeightHover={false}
            NextIcon={<KeyboardArrowRight />}
            PrevIcon={<KeyboardArrowLeft />}
            changeOnFirstRender={false}
            navButtonsAlwaysVisible={true}
            stopAutoPlayOnHover={false}
            autoPlay={false}
        >
            {caroseulUniversities
                ?.map((uni, i) => (
                <Link className='flex flex-col justify-center items-center' underline="hover" color="inherit" to={`/${country}/${uni.name}`} component={RouterLink as any} >
                    <img
                        key={i}
                        className='object-contain h-52	'
                        alt={uni.name} 
                        src={`http://localhost:3001/university/image/${uni.name}`} 
                    />
                    {uni.name}
                </Link>
            )
            )}
        </Carousel>    
    )
}

export default Caroseul;