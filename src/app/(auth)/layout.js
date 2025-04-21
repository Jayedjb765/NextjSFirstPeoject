import Footer from '../../components/shared/Footer.jsx'
import React from 'react';

const AuthLayout
    = ({ children }) => {
        return (
            <div>
                {children}
                <Footer />

            </div>
        );
    };

export default AuthLayout
    ;