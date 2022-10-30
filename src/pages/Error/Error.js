import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center error'>
            <h1>404</h1>
            <h3>Ooops.... Page Not Found!</h3>
            <p>Try using the button below to go to main page of the site</p>
            <Link to="/"><Button className='header-btn'>Back to Home Page</Button></Link>
        </div>
    );
};

export default Error;