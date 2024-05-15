import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied to Clipbord", "success")
    }
    const handleFSEClick = () => {
        let newText = text.concat(".")
        setText(newText)
        props.showAlert("Full stop placed at end", "success")
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container">
                <h1 className='h1'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
                    <button className="btn btn-primary mx-4 my-2 btn-back-color" onClick={handleUpClick}>Upper Case</button>
                    <button className="btn btn-primary mx-4 my-2 btn-back-color" onClick={handleLowClick}>Lower Case</button>
                    <button className="btn btn-primary mx-4 my-2 btn-back-color" onClick={handleFSEClick}>Full Stop End</button>
                    <button className="btn btn-primary mx-4 my-2 btn-back-color" onClick={handleCopyClick}>Copy Text Shown In Preview</button>
                    <button className="btn btn-primary mx-4 my-2 btn-back-color" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className={`container h1`}>
                <h1 className='h1'><font size="4">Your Text Summary</font></h1>
                <p className='h1'><font size="4">{text.length===0?0:text.split(" ").length} words, {text.length} charechters</font></p>
                <p className='h1'><font size="4">time to read this text in minute is: {0.008 * text.split(" ").length}</font></p>
                <h2 className='h1'><font size="4">Preview</font></h2>
                <p className='h1'><font size="4">{text.length>0?text:"Enter text to preview here"}</font></p>
            </div>
        </>
    )
}
