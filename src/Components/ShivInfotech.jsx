import React from 'react';
import AllUsers from './AllUsers';
import { Box, makeStyles, Typography } from '@material-ui/core';
import office11 from '../Assets/Images/office11.png';
import office02 from '../Assets/Images/office02.png';

const useStyle = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const ShivInfotech = () => {
    const classes = useStyle();
    return (
    <Box className ={classes.component}>
        <Typography variant="h4"> <b>Shiv Infotech Infrastructure</b></Typography> 
        <Box style={{display: 'flex'}}>
         <img className={classes.image} src={office11}/>
         <img className={classes.image} src={office02}/>
        </Box>
     </Box>  
    )
}

export default ShivInfotech;