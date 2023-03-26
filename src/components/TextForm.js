import React,{useState} from 'react'


export default function TextForm(props) {

const handleUpClick=()=>{console.log("Uppercase was clicked"+text);
let newText=text.toUpperCase();

setText(newText)
props.showAlert('Converted to upper case','Success');
}

const handleOnClear=()=>{console.log("clear was clicked"+text);
let newText=' ';

setText(newText);}


const handleLowClick=()=>{console.log("Lowercase was clicked"+text);
let newText=text.toLowerCase();
setText(newText);}

const handleOnChange=(event)=>{console.log("on Change");
setText(event.target.value);}
const handleSpaces=()=>{
const newText=text.split(/[ ]+/);
setText(newText.join(" "))
}
// const handleCopy=()=>{
//     console.log("I am Copy");
//     var text=document.getElementById("myBox");
//     text.select();
//     text.setSelectionRange(0,99);
//     navigator.Clipboard.writeText(text.value());
//     }



const [text, setText] = useState('Enter the state');

// console.log(useState('Enter text here2'));


return (
<>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>  
<h1>{props.heading}</h1>
<div className="mb-3 my-2">
{/* <label htmlFor="mybox" className="form-label">{"Start from here"}</label> */}
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light'}} id="mybox" rows="5">
</textarea>
</div>
<button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to lower case</button>
<button className="btn btn-primary mx-3 my-2" onClick={handleOnClear}>Clear Everything</button>
<button className="btn btn-primary mx-3 my-2" onClick={handleSpaces}>clear extra spaces</button>

{/* <button className="btn btn-primary " onClick={handleCopy}>Copy Everything</button> */}


</div>

<div className="container my-3 my-2"style={{color:props.mode==='dark'?'white':'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
<p>{0.008*text.split(" ").length} Minutes required to read</p>
<h3>Preview </h3>
<p>{text}</p>
</div>

</>
)
}
