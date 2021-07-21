// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/components/header.scss';

// import Logo from '../../public/assets/img/logos/header.png';

/**
 * The header of the website.
 */
class Header extends React.Component {
    render = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">
                            {/* <img src={Logo} alt="Alru favicon" className="header-logo" /> */}
                            Alliance Reunited
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/servers" className={`nav-link ${window.location.pathname === `/servers` ? `active disabled` : ``}`}>Servers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/staff" className={`nav-link ${window.location.pathname === `/staff` ? `active disabled` : ``}`}>Our Staff</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="https://forum.alru.ga" target="_blank" rel="noreferrer" className="nav-link">Forum</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://panel.alru.ga" target="_blank" rel="noreferrer" className="nav-link">Panel</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://discord.alru.ga" target="_blank" rel="noreferrer" className="nav-link">Discord</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default hot(module)(Header);
