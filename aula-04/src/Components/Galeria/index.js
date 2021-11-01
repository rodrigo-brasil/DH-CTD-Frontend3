import { React, useState, useEffect } from 'react';
import './style.css'

export const Galeria = () => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=15`);
        const data = await response.json();
        console.log(data);
        setImages(data);
    }

    useEffect(() => { getImages() }, []);

    return (

        <section className="galeria" id="galeria">
            <div className="title">
                <h2>Galeria</h2>
            </div>
            <div className="galeria__container">
                {
                    images.map((image) => (
                        <div className="galeria__item" key={image.id}>
                            <img src={image?.urls?.regular} alt={image.alt_description} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
