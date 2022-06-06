import './ImageSlider.css';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Spades from './Spades';
import LineOne from '../backgroundShapes/LineOne';
import LineTwo from '../backgroundShapes/LineTwo';
import BigSquare from '../backgroundShapes/BigSquare';
import SmallSquare from '../backgroundShapes/SmallSquare';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const changeSlide = (index) => {
    setCurrent(index);
  }

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
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel pics' className='pics' />
            )}
          </div>
        );
      })}
    </section>
    <section className='activeSpades'>
      <Spades slides={slides} current={current} changeSlide={changeSlide} />
    </section>
    </>
  );
};

export default ImageSlider;