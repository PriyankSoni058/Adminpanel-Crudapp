import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import NavBar from '../Components/Navbar';
import AllUsers from '../Components/AllUsers';
import AddUsers from '../Components/AddUsers';
import EditUser from '../Components/EditUser';



function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
      
            <div className="container-fluid" style={{paddingTop:'70px'}}>
                <>
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                     
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            {/* <Route exact path="/" component={ShivInfotech}  /> */}
                            <Route exact path="/all" component={AllUsers} />
                            <Route exact path="/add" component={AddUsers} />
                            <Route exact path="/edit/:id" component={EditUser} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>

        
                </>
            </div>
       
    );
}

export { App };