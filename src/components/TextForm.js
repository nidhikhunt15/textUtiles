import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !","success");
    }

    const handleLoClick= ()=>{
    
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase !","success");

    }

    const handleClearClick= ()=>{
    
        let newText = ' ';
        setText(newText);
        props.showAlert("Text Cleared !","success");

    } 
     
    const handleCopy=() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard !" ,"success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !" ,"success");

    }
    

    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    let[text,setText] = useState('');
    return (
        <>
     <div className='container' style={{Color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#ddd5d5':'white',Color:props.mode==='dark'?'white':'black'}} value={text} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>




    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview !"}</p>
    </div>
    </>
    )
}
