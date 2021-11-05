import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import '../../public/assets/scss/pages/home.scss';

class Home extends React.Component {
    render = (): React.ReactNode => {
        return (
            <main className="text-center container">
                <br />
                <br />
                <br />
                <br />
                <h1 className="page-title mt-5">Welcome to the Alru&nbsp;ShareX!</h1>
                <p className="desc mt-3">
                    It&apos;s like Lunus, but better...
                </p>
                <br />
                <br />
                <br />

                <a href="https://discord.com/api/oauth2/authorize?client_id=861498165336866856&redirect_uri=https%3A%2F%2Fi.alru.xyz%2Fauth%2Fdiscord&response_type=code&scope=identify%20email" className="btn btn-lg btn-primary btn-sign-in">
                    <span>Sign In</span>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </a>
            </main>
        );
    };
}

export default Home;
