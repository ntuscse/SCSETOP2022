import './ImageSlider.css';
import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import Spades from './Spades';
import LineOne from '../backgroundShapes/LineOne';
import LineTwo from '../backgroundShapes/LineTwo';
import BigSquare from '../backgroundShapes/BigSquare';
import SmallSquare from '../backgroundShapes/SmallSquare';
import ViewMoreButton from './Button';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition){
      window.scrollTo(0, scrollPosition);
      sessionStorage.removeItem("scrollPosition");
    }
  });

  const nextSlide = () => {
    changeScrollY();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    changeScrollY();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const swipe = (dir) => {
    changeScrollY();
    if(dir === "left"){
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
    else{
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
  };

  function changeScrollY(){
    sessionStorage.setItem("scrollPosition", window.pageYOffset);
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => swipe('left'),
    onSwipedRight: () => swipe('right'),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const changeSlide = (index) => {
    setCurrent(index);
  };

  return (
    <>
    <section className='slider'>
      <div className='firstLine'><LineOne /></div>
      <div className='secondLine'><LineTwo /></div>
      <div className='bigSquare'><BigSquare /></div>
      <div className='smallSquare'><SmallSquare /></div>
      <FaChevronCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronCircleRight className='right-arrow' onClick={nextSlide} />

      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.id}
          >
            {index === current && (
              <img {...swipeHandlers} src={slide.image} alt='travel pics' className='pics' />
            )}
          </div>
        );
      })}
    </section>
    <section className='activeSpades'>
      <Spades slides={slides} current={current} changeSlide={changeSlide} />
    </section>
    <section className='buttonOne'>
      <ViewMoreButton />
    </section>
    </>
  );
};

export default ImageSlider;