import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({component:Component,isAuthenticated,...rest}) => {

    return (
        <Route {...rest} render={(props) => (
          isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
      )
    
}

export default ProtectedRoute;