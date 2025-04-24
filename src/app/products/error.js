"use client"
import React from 'react';

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <div className='text-center text-red-400 my-5 text-xl'>
                <h1 >Something went wrong</h1>
                <p>{error.message}</p>
            </div>
            <div className="card-actions justify-center">
                <button onClick={() => reset()} className="btn btn-primary">Try again</button>
            </div>
        </div>
    );
};

export default ErrorPage;