import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';

const Layout = ({children}) => {

    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="text-light nav-link">Home</Link>
            </li>
<li className="nav-item">
                <Link to="/signin" className="text-light nav-link">Login</Link>
            </li>
	<li className="nav-item">
                <Link to="/signup" className="text-light nav-link">SignUp</Link>
            </li>
	
        </ul> 
    )

    return ( 
        <>
            {nav()}
            <div className="container">{children}</div>
        </>
     );
}
 
export default Layout;