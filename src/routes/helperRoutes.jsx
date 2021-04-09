import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import { UserContext } from '../context/UserContext'


export const PrivateRoute = ({ component, ...options }) => {
    let { user } = useContext(UserContext)
    if (user != null) return <Route {...options} component={component} />
    return <Redirect to="/login" />
}

export const PublicRoute = ({ component, ...options }) => {
    let { user } = useContext(UserContext)
    
    if (user == null) return <Route {...options} component={component} />
    return <Redirect to="/employees" />
}
