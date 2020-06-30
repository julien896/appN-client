import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuth, signout } from '../auth/authHelpers';

const Layout = ({children, match, history}) => {

    const isActive = path => {
        if (match.path === path) {
            return { color: '#000' };
        } else {
            return { color: '#fff' };
        }
    };
    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive('/')}>Home</Link>
            </li>
{!isAuth() && (
                <>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link" style={isActive('/signin')}>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>
                </>
            )}
	{isAuth() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: 'pointer', color: '#fff' }}
                        onClick={() => {
                            signout(() => {
                                history.push('/');
                            });
                        }}
                    >
                        Signout
                    </span>
                </li>
            )}
	
        </ul> 
    )

    return ( 
        <>
            {nav()}
            <div className="container">{children}</div>
        </>
     );
}
 
export default withRouter(Layout);