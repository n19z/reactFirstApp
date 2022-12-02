import '../App.css';
import Modal from './Modal';
import { useState } from 'react';


const Dog = (props) => {

    const [show, setShow] = useState(false)
    return (
        <>
            <div 
            className='post flex-flow-column' 
            onClick={() => setShow(true)}
            >
                <img src={props.url} alt="собачка" />
                <div className="description flex-flow-column">
                    <span className="post--title f-s-3">{props.dogMaleName}</span>
                    <div className="post--text f-s-2">{props.quote}</div>
                    <span className="post--time f-s-0"><i>{props.date} By {props.dogFemaleName}</i></span>
                </div>
            </div>
            <Modal 
            onClose={() => setShow(false)} 
            show={show}
            title = {props.dogMaleName}
            quote = {props.quote}
            imgUrl = {props.url}
            />
        </>
    )

};


// const url = 'http://api.forismatic.com/api/jsonp/?method=getQuote&format=json&lang=ru'
// fetch(url, {
//     mode: 'no-cors'
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })

export default Dog;