import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthUser } from '../store/ducks/auth/selectors';

type RedirectTypes = 'toAuth' | 'toHome'

const withRedirect = (Component: React.FC<any> | React.ComponentClass<any> | null, type: RedirectTypes = 'toAuth' ) => {
    return (props: any) => {
        const authUser = useSelector(selectAuthUser)

        if (type === 'toHome' && Component) {
            if (authUser) {
                return (
                    <Redirect to={'/home'} />
                )
            }
            return (
                <Component {...props} />
            )
        }

        if (!Component) {
            if (authUser) {
                return (
                    <Redirect to={'/home'} />
                )
            }
            return (
                <Redirect to={'/signIn'} />
            )
        }

        if (!authUser) {
            return (
                <Redirect to={'/signIn'} />
            )
        }

        return (
            <Component {...props} />
        )
    }
}

export default withRedirect