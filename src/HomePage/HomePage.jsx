import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import NavBar from '../Components/Navbar';


function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
       <>
       <NavBar/>
       <div>
       <h4>ShivInfotech Infrastructure</h4>
        <img src="https://www.orbitclippingpath.com/blog/wp-content/uploads/2019/11/clipping-path-company.jpg" width= "1500" height="600"/>
       </div>
    {/* <div>
      <Link to="/login">Logout</Link>
    </div> */}
       </>
       
    );
}

export { HomePage };