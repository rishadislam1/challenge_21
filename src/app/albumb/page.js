import Image from 'next/image';
import React from 'react';

const AlbumbPage = () => {
    return (
        <div>
            <Image src={'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg'} width={'500'} height={'500'} alt='Some Image'/>
        </div>
    );
};

export default AlbumbPage;