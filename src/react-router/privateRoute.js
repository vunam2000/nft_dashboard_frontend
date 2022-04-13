import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { checkLogin, checkRole } from '../helpers'

const PrivateRoute = ({ user, roles, component: Component, ...rest }) => {
    
    useEffect(() => {
        document.title = rest.title ?? "Loading..."
    })

    return (
        <Route {...rest} render={(props) => {
            let userRoles = user?.roles?.map(item => item.name)

            if (checkLogin()) {
                if (checkRole(roles, userRoles)) {
                    return <Component {...props}/>
                } else {
                    if (user) {
                        return <Redirect to="/404" />
                    }
                }
            } else {
                return <Redirect to="/home" />
            }
        }}/>
    )
}

export { PrivateRoute }