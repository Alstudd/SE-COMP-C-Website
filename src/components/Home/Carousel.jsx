import React, { useState } from 'react';

const sliderStyles = {
    height: '100%',
    position: 'relative'
};
const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // backgroundImage: `url(${slides[currentIndex].image})`
};
const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
};
const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
};
const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
};
const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
};

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].image})`
    };
    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div className='text-xl md:text-4xl' style={dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
                ))}
            </div>
        </div>
    );
};
