

export default function NewVal(props) {
    return (
      <>
        <div className="container mt-3" style={{color:props.mode==='dark'?'black':'white'}}>
<h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
<div className="mt-3">
  <textarea className="form-control"  style={{backgroundColor: props.mode==='light'?'white':'gray'}} id="myBox" rows="7"></textarea>
  <div className="mt-3">
  </div>
</div>
        </div>
        {/* <div className="container my-3"> 
  
        <h2  style={{color: props.mode==='dark'?'white':'black'}} >Your Input Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minuts take to read</p>
        <h2>Preview</h2>

        <p>{text}</p>
        </div> */}
        
        </>
    )
}
