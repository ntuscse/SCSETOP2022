import { useState, useEffect } from 'react';
import './Stack.css';
import './StackSwipe.css';
import './StackSwap.css';
import './StackBgShapes.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import Spades from './Spades';
import LineOne from '../backgroundShapes/LineOne';
import LineTwo from '../backgroundShapes/LineTwo';
import BigSquare from '../backgroundShapes/BigSquare';
import SmallSquare from '../backgroundShapes/SmallSquare';

const Stack = ({ slides }) => {
    const [{current, next, complete}, setValue] = useState({current: 0, next: -1, complete: true});
    const [{nextV, toNext}, setNext] = useState({nextV: -1, toNext: false});
    const [{prevV, toPrev}, setPrev] = useState({prevV: -1, toPrev: false});
    const length = slides.length;

    useEffect(() => {
        console.log(current, next);
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition){
          window.scrollTo(0, scrollPosition);
          sessionStorage.removeItem("scrollPosition");
        }
        
        checkNextorPrev();
    });

    const checkNextorPrev = () => {
        if(!complete) return;
        if(toNext){
            if(current !== nextV)
                swapNextFast();
            else{
                changeScrollY();
                setNext({nextV: -1, toNext: false});
            }
        }
        else if(toPrev){
            if(current !== prevV)
                swapPrevFast();
            else{
                changeScrollY();
                setPrev({prevV: -1, toPrev: false});
            }
        }
    }

    const swipeNext = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:last-child');
        const nextValue = (current === length-1 ? 0 : current+1);
        sCard.style.animation = 'swipeNext 800ms forwards';
        setValue({current: nextValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: nextValue, 
                    next: -1, complete: true});
        }, 800);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.prepend(sCard);
        }, 800);
    }

    const swipePrev = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:first-child');
        const prevValue = (current === 0 ? 4 : current-1);
        sCard.style.animation = 'swipePrev 800ms backwards';
        setValue({current: prevValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: prevValue, 
                    next: -1, complete: true});
        }, 800);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.append(sCard);
        }, 800);
    }

    const swapNextFast = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:last-child');
        const nextValue = (current === length-1 ? 0 : current+1);
        sCard.style.animation = 'swapNext 500ms forwards';
        setValue({current: nextValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: nextValue, 
                    next: -1, complete: true});
        }, 500);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.prepend(sCard);
        }, 500);
    }

    const swapPrevFast = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:first-child');
        const prevValue = (current === 0 ? 4 : current-1);
        sCard.style.animation = 'swapPrev 500ms backwards';
        setValue({current: prevValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: prevValue, 
                    next: -1, complete: true});
        }, 500);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.append(sCard);
        }, 500);
    }

    const swapNextClick = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:last-child');
        const nextValue = (current === length-1 ? 0 : current+1);
        sCard.style.animation = 'swapNext 700ms forwards';
        setValue({current: nextValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: nextValue, 
                    next: -1, complete: true});
        }, 700);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.prepend(sCard);
        }, 700);
    }

    const swapPrevClick = (e) => {
        changeScrollY();
        if(complete === false) return;
        const stack = document.querySelector('.stack');
        const sCard = document.querySelector('.sCard:first-child');
        const prevValue = (current === 0 ? 4 : current-1);
        sCard.style.animation = 'swapPrev 700ms backwards';
        setValue({current: prevValue,
                    next: current, complete: false});

        setTimeout(() => {
            changeScrollY();
            setValue({current: prevValue, 
                    next: -1, complete: true});
        }, 700);

        setTimeout(() => {
            sCard.style.animation = '';
            stack.append(sCard);
        }, 700);
    }

    function changeScrollY(){
        sessionStorage.setItem("scrollPosition", window.pageYOffset);
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => swipeNext(),
        onSwipedRight: () => swipePrev(),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const changeSlide = (index) => {
        if((index > current && index - current <= 2) || (index === 1 && current === 4) ||
            (index === 0 && current === 4) || (index === 0 && current === 3)){
            setNext({nextV: index, toNext: true});
        }
        else if(index !== current)
            setPrev({prevV: index, toPrev: true});
    };

    return (
        <>
        <section className='slider'>
            <div className='firstLine'><LineOne /></div>
            <div className='secondLine'><LineTwo /></div>
            <div className='bigSquare'><BigSquare /></div>
            <div className='smallSquare'><SmallSquare /></div>
            <FaChevronCircleLeft className='left-arrow' onClick={swapPrevClick}/>
            <FaChevronCircleRight className='right-arrow' onClick={swapNextClick}/>

            <div className='stack'>
                {(current === 4 || next === 4) ? <img {...swipeHandlers} className='sCard' 
                src={slides[4].image}
                alt='pics'/> : 
                <img className='sCard' src='CardBack.svg' alt='ace'/>}

                {(current === 3 || next === 3) ? <img {...swipeHandlers} className='sCard'
                src={slides[3].image}
                alt='pics'/> :
                <img className='sCard' src='CardBack.svg' alt='ace'/>}
            
                {(current === 2 || next === 2) ? <img {...swipeHandlers} className='sCard'
                src={slides[2].image}
                alt='pics'/> :
                <img className='sCard' src='CardBack.svg' alt='ace'/>}

                {(current === 1 || next === 1) ? <img {...swipeHandlers} className='sCard'
                src={slides[1].image}
                alt='pics'/> :
                <img className='sCard' src='CardBack.svg' alt='ace'/>}

                {(current === 0 || next === 0) ? <img {...swipeHandlers} className='sCard'
                src={slides[0].image}
                alt='pics'/> :
                <img className='sCard' src='CardBack.svg' alt='ace'/>}
            </div>

        </section>
        <section className='activeSpades'>
            <Spades slides={slides} current={current} changeSlide={changeSlide} />
        </section>
    </>
    
    );
}

export default Stack;