import React, { memo } from 'react';
import './Spades.css';
import GreySpadeShape from '../spade/GreySpadeShape';
import BlackSpadeShape from '../spade/BlackSpadeShape';

const Spade = ({ index, active, changeSlide }) => {
    const handleChange = () => {
        changeSlide(index);
    }

    return (
        <>
        {active ?
        <span className="activeSpade" onClick={handleChange}>
            <BlackSpadeShape/>
        </span> :
        <span className="nonActiveSpade" onClick={handleChange}>
            <GreySpadeShape/>
        </span>}
        </>
    );
}

const MemoSpade = memo(Spade);

const Spades = ({ slides, current, changeSlide }) => {
    return (
        <div className="spades">
            {slides.map((pic, index) => (
                <MemoSpade key={pic} index={index} active={current === index} changeSlide={changeSlide}/>
            ))}
        </div>
    );
}

export default Spades;