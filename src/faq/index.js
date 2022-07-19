import React from 'react'
import './faq.css'
import { useState } from 'react';
import Navbar from "../navbar";


const FAQ = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    const data = [
        {
            question: 'If I am taking a Double Degree, which orientation programme should I go for?',
            answer: 'Since you are in a double degree programme, you effectively belong to 2 faculties. You may choose which orientation you want to go for. Or you may choose to attend half of each orientation. How you would like to arrange your time is entirely up to yo'
        },
        {
            question: 'What are the activities happening on the orientation days? / May I take a look at the orientation programme?',
            answer: 'We will be releasing the orientation schedule closer to the dates of orientation on our very own SCSE TOP website. Do keep a lookout for that. Your Chief Group Leaders (CGLs) will also be releasing it to you once the Orientation Groups (OGs) are confirmed. '
        },
        {
            question: 'Is the camp overnight?',
            answer: 'No, there are no overnight stays for this Transition Orientation Programme.'
        },
        {
            question: 'When does registration close?',
            answer: 'Registration closes on 24th July 2022.'
        },
        {
            question: 'I did not receive a confirmation email, what should I do?\n\n',
            answer:  'There are several reasons why you did not receive the confirmation.\n\n' +
            '1. You did not key in the NTU email (xxx@e.ntu.edu.sg), but instead typed in your own personal email. If that is the case, please fill in the form again and you should receive a confirmation email. If you still do not receive the confirmation, do send an email to cse-top@e.ntu.edu.sg to check for confirmation. \n\n' +
            '2. You keyed in the NTU email but are not considered an SCSE student. This would apply mainly to double major students whose main faculty isn’t SCSE but signed up for the SCSE camp. If this is the case, please do find out which faculty is your main faculty and sign up for orientation in your main faculty\n\n' +
            '3. You keyed in your NTU email and is an SCSE student but did not receive a confirmation. If this is the case you might want to wait for about 2-3 working days as this might be caused by lag in the system. If you still did not receive an email confirmation, then do send an email to cse-top@e.ntu.edu.sg to check for confirmation.' 
        },
        {
            question: 'What if I have changes to my availability?',
            answer: 'Be sure to inform your CGL/GLs about your availability so that they can account for you on the actual days of TOP.'
        },
        {
            question: 'Can I make changes to my Tshirt size?',
            answer: 'Yes, you may. Do inform your GLs about the change, we will try our best to fulfil your request.'
        }
        
    ]
    

  return (
    <>
    <Navbar></Navbar>
    <div className='faqwrap'>
        <div className='faqheader'>
            <h2>Frequently Asked Questions</h2>
        </div>
        <div className='accordion'>
            {data.map((item, i) => (
                <div className={selected == i ? 'item expanded' : 'item'}>
                    <div className='title' onClick={()=> toggle(i)}>
                        <h3>{item.question}</h3>
                        <span className={selected == i ? 'label expanded' : 'label'}>
                            <svg class="arrowsvg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                        </span>
                    </div>
                    <div className={selected == i ? 'content show' : 'content'}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}



export default FAQ