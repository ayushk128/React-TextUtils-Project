import React, {useState} from 'react'

export default function About(props) {
    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#504e4d',
        backgroundColor: props.mode === 'dark' ? '#504e4d' : 'white',
        // border: '1px solid',
        // borderColor: props.mode === 'dark' ? 'white' : '504e4d'
    }
    return (
        <div className="container">
            <h1 className = "my-3" style = {{color: props.mode === 'dark' ? 'white' : '#504e4d'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style = {myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            Text Utils gives you a way to analyze the text effeciently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            Text utils is a free character count tool that provides instant character count and word count statistics for a given text. Text utils reports the number of words and characters. This is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style = {myStyle}>
                            This word compatible application works in any web Browser such as Chrome, Firefox, Safari, Opera etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
