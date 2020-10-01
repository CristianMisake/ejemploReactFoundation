import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/otraPagina'}>Otra Pagina</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

