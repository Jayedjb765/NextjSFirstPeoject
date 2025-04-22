import Image from 'next/image';
import React from 'react';

const GellaryPage = () => {
    return (
        <div className='text-center'>


            <h1>Regular image tag</h1>
            <Image src="https://i.ibb.co.com/QbmfSKv/images-4.jpg" alt="next image" width={500} height={500} className='mx-auto' />
        </div>
    );
};

export default GellaryPage;