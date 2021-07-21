// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

// import '../../public/assets/scss/pages/home.scss';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main className="text-center container">
                <h1 className="page-title mt-5">Welcome to the Alru ShareX!</h1>
                <p className="desc mt-3">
                    It&apos;s like Lunus, but better...
                </p>
            </main>
        );
    }
}

export default hot(module)(Home);
