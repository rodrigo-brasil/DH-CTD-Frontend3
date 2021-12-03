import { React, useState, useEffect } from 'react';

export const Tester = () => {

    const [images, setImages] = useState([]);
    const getImages = async () => {
        const response = await fetch(`API_URL`);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => { getImages() }, []);

    return (
        <div>
            
        </div>
    )
}
