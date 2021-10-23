import React from 'react';
import '../../public/assets/scss/pages/home.scss';

class Dashboard extends React.Component {
    render = (): React.ReactNode => {
        return (
            <main className="text-center container">
                <h1 className="page-title mt-5">Dashboard</h1>
            </main>
        );
    }
}

export default Dashboard;
