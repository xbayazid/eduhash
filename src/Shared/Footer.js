import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-light mt-5 p-5'>
            <div className='d-flex justify-content-around'>
                <div>
                    <h5 className='mb-3'>About us</h5>
                    <p><span>Phone:</span> +(68) 345 5902</p>
                    <p><span>Email:</span> info@yourdomain.com</p>
                    <p><span>Location:</span> 123 Fifth Floor East 26th Street, New York, NY 10011</p>
                </div>
                <div>
                    <h5 className='mb-3'>Explore</h5>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Services</p>
                    <p>Support</p>
                </div>
                <div>
                    <h5 className='mb-3'>Courses</h5>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </div>
                <div>
                    <h5 className='mb-3'>Legal</h5>
                    <p>Terms & Condition</p>
                    <p>Privacy policy</p>
                    <p>Return policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;