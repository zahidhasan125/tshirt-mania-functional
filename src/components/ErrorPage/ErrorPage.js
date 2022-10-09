import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Sorry Not Found. 404</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;