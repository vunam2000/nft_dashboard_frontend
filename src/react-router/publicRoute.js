import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute = ({ component: Component, ...rest }) => {
    useEffect(() => {
        document.title = rest.title ?? "Loading..."
    })

    return (
        <Route {...rest} render={(props) => {
            return <Component {...props} />
        }}/>
    )
}

export { PublicRoute }