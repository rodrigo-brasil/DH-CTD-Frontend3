import { React, useState, useEffect } from 'react';

export const Tester = () => {

    const [images, setImages] = useState([]);
    const getImages = async () => {
        console.log("oii");
        console.log(process.env.REACT_APP_VERCEL_API_URL);
        try {
            const response = await fetch(`${process.env.REACT_APP_VERCEL_API_URL}`);
            const data = await response.json();
            console.log(data);
            setImages(data);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getImages() }, []);

    return (
        <div>

        </div>
    )
}
