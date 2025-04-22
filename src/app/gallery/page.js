import Image from 'next/image';
import React from 'react';
import localimg from '../../assets/authorphotos5-1024x683.jpg'

const GellaryPage = () => {
    return (
        <div className='text-center'>


            <h1>Regular image tag</h1>
            <Image src="https://i.ibb.co.com/QbmfSKv/images-4.jpg" alt="next image" width={500} height={500} className='mx-auto' />
            <h1>Local image</h1>
            <Image src={localimg} alt="next image" width={500} height={500} className='mx-auto' />
        </div>
    );
};

export default GellaryPage;