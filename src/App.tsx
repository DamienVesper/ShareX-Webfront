import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import '../public/assets/scss/index.scss';
import 'bootstrap';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Error404 from './pages/404';

class App extends React.Component {
    render = (): React.ReactNode => {
        return (
            <div id="app" className="text-light d-flex flex-column h-100">
                <Router>
                    <Routes>
                        {/* Landing Page */}
                        <Route path="/" element={<Home />} />

                        {/* Dashboard */}
                        <Route path="/dashboard" element={<Dashboard />} />

                        {/* 404 Handler */}
                        <Route path="/*" element={<Error404 />} />
                    </Routes>
                </Router>
            </div>
        );
    };
}

export default App;
