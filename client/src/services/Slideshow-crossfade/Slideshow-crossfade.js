import React, { useState, useEffect } from 'react';
import styles from 'services/Slideshow-crossfade/slideshow-crossfade.module.css';  

const SlideshowCrossfade = ({ children }) => {

    // State to keep track of the active slide index
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Convert the children prop into an array of slides
    const slides = React.Children.toArray(children);

    // useEffect hook to handle the automatic slide transition
    useEffect(() => {
        // Set an interval to change the active slide every 1000 milliseconds (1 second)
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000);
        
        // Clean up the interval when the component unmounts or when the slides length changes
        return () => clearInterval(interval);
    }, [slides.length]);

    // Render the slideshow component
    return (
        <div className={styles.slideshow}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
                >
                    {slide}
                </div>
            ))}
        </div>
    );
};

export default SlideshowCrossfade;