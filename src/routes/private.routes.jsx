import React from 'react'
import { Switch } from 'react-router'
import { Redirect } from "react-router";
import { PrivateRoute } from './helperRoutes';
import Employees from './../components/Employees';
import Upload from '../components/Upload';

const PrivateRoutes = (props) => {
    return (
        <Switch>
            <PrivateRoute exact path="/upload" component={Upload} />
            <PrivateRoute exact path="/employees" component={Employees} />
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PrivateRoutes;