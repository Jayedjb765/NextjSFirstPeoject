"use client"
import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h1 className='text-center text-red-400 my-5 text-xl'>Something went wrong</h1>
        </div>
    );
};

export default ErrorPage;