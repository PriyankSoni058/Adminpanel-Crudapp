import React from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles,  Typography } from "@material-ui/core";
import { useState } from 'react';
import { addUser } from '../Service/Api';
import { useHistory } from 'react-router-dom';


const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}


const useStyles = makeStyles({
    container: {
        width: '100%',
        margin: '2% 0 0 0',
    }
})


const AddUsers = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const classes = useStyles();
    let history = useHistory();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    

    const addUserDetails = async() => {
       console.log("Fired")
       const a= await addUser(user);
       console.log(a)
        history.push('./all');
    }


    return (
        <FormGroup className={classes.container}>
             <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">UserName</InputLabel>
                <Input  onChange={(e) => onValueChange(e)}name='username' value={username} id="my-input"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input  onChange={(e) => onValueChange(e)}name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" onClick={addUserDetails}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}


export default AddUsers;