import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const Header = (params) => {
    let { logOut } = useContext(UserContext)
    return (
        <div>
            <h1>Ambiente {process.env.REACT_APP_ENV}</h1>
            <ul>
                <li>
                    <Link to="/employees">
                        Employees
                    </Link>
                </li>
                <li>
                    <Link to="/upload">
                        Upload
                    </Link>
                </li>
                <li>
                    <button onClick={logOut} >LogOut</button>
                </li>
            </ul>
        </div>
    );
}

export default Header;