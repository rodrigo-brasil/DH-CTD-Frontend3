import { React, useState, useEffect } from 'react';

export const Tester = () => {

    const [images, setImages] = useState([]);
    const getImages = async () => {
        console.log("oi");
        const response = await fetch(`API_URL`);
        const data = await response.json();
        console.log(data);
        setImages(data);
    }

    useEffect(() => { getImages() }, []);

    return (
        <div>
            {images}
        </div>
    )
}
