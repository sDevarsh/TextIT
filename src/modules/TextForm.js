import React, { useState } from 'react'
//import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const handleonclickupper = () => {
        let upper = text.toUpperCase();
        setText(upper);
    }
    function handleonclicklower() {
        let upper = text.toLowerCase();
        setText(upper);
    }
    const handleonclickclear = () => {
        let upper = '';
        setText(upper);
    }
    const handleonclickcopy = () => {
        let text=document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
       
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'gray'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={10}
                        value={text}
                        onChange={handleonchange}
                        style={{backgroundColor: props.mode==='dark'?'gray':'white'}}
                    />
                </div>
                <button className='btn btn-dark me-2 my-1' onClick={handleonclickupper}>UpperCase</button>
                <button className='btn btn-dark me-2 my-1' onClick={handleonclicklower}>LowerCase</button>
                <button className='btn btn-dark me-2 my-1' onClick={handleonclickclear}>Clear text</button>
            <button className='btn btn-dark me-2 my-1' onClick={handleonclickcopy}>Copy Text</button>
            </div>
        </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'gray'}}>
                <h1>
                    Your text summery
                </h1>
                <p>
                    Your textarea has {text.split(' ').filter((element)=>{return element.length!=0}).length} words and {text.length} characters
                </p><p>
                    {0.008*text.split(' ').length} Minutes to read
                </p>

            </div>
        </>

    )
}
