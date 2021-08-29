import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converded to Uppercase!", 'success')
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converded to Lowercase!", 'success')

    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked " + text)
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const[text, setText] = useState('')
    return (
        <>
            <div className = 'container' style = {{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to UpperCase</div>
                <div className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert to LowerCase</div>
                <div className="btn btn-primary mx-1 my-1" onClick = {handleClearClick}>Clear</div>
            </div>
            <div className="container my-3" style = {{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something above to preview here"}</p>
            </div>
        </>
    )
}
