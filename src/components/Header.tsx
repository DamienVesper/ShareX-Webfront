import React from 'react';

import '../../public/assets/scss/components/header.scss';

// import Logo from '../../public/assets/img/logos/header.png';

class Header extends React.Component {
    render = (): React.ReactNode => {
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
                                <li className="nav-item d-none">
                                    <a href="/servers" className={`nav-link ${window.location.pathname === `/servers` ? `active disabled` : ``}`}>Dashboard</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item d-none">
                                    <a href="/auth/login" target="_blank" rel="noreferrer" className="nav-link">Log In</a>
                                </li>
                                <li className="nav-item d-none">
                                    <a href="/auth/signup" target="_blank" rel="noreferrer" className="nav-link">Sign Up</a>
                                </li>
                                <li className="nav-item d-none">
                                    <a href="/auth/logout" target="_blank" rel="noreferrer" className="nav-link">Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
