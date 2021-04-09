import React from 'react'
import { Switch } from 'react-router'
import { Redirect } from "react-router";
import { PublicRoute } from './helperRoutes';
import Login from '../components/Login';
import Employees from './../components/Employees';

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PublicRoute exact path="/employees" component={Employees} />
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PublicRoutes;