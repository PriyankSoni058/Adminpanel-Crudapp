import React , { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, makeStyles, Button} from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/Api';
import { Link } from 'react-router-dom';
import NavBar from './Navbar';

const useStyles = makeStyles({
    table: {
        width: '100%',
        margin: '0px 0 0 0px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();
   
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }


    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    return (
        <>
        <NavBar/>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead} >
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    {/* <TableCell>Action</TableCell> */}
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
             {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        {/* <TableCell>{user.action}</TableCell> */}
                        <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Update</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default AllUsers;