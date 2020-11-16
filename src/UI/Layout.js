import logo from '../appiness-logo.jpg';
import { NavLink, Link } from "react-router-dom";

const Layout = props => {

    const logout = () => {
        sessionStorage.removeItem('token');
        window.location.reload();
    }

    let isAuthenticated = sessionStorage.getItem('token');

    return(
        <div className="container">
            {isAuthenticated ? (<header>
                <div className="header-section">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <div className="logout-link" onClick={logout}>Logout</div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink to='/dashboard'><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/employeelist'><a className="nav-link" href="#">Employee List</a></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>) : ''}
            
            <main className="wrapper">
            {props.children}
            </main>
            <footer>
                @ 2020 Copyright: Appiness
            </footer>
        </div>
        
    );
}

export default Layout;