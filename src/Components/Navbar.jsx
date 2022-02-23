import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111',
        
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 110,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>ShivInfotech</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
                <div>
                <Link to="/login">Logout</Link>
                </div>
            </Toolbar>
            
        </AppBar>
    )
}

export default NavBar;