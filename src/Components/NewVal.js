import React, {useState} from 'react'


export default function NewVal(props) {
// const[myStyle,setmystyle]=useState({
// color:'white',
// backgroundColor:'black'

//  })
// const [btntext,setbtntext]=useState("Enable Dark Mode")
// const togglestyle=()=>{
  
//   if(myStyle.color==='black'){
//     setmystyle({
//       color:'white',
//       backgroundColor:'black'
//     })
//     // setbtntext("Enable light mode")
//   }
//   else{
//     setmystyle({
//       color:'black',
//       backgroundColor:'white'
//     })
//     // setbtntext("Enable dark mode")
//   }
// }
  const Handleonclick=()=>{ 
    console.log("Uppercase was click");
    const add=text.toUpperCase();
    setText(add)  
    props.setalertvalue("Converted to uppercase","success");
    
   
  }
  const HandleonclickLower=()=>{ 
    console.log("Lowercase was click");
    const add=text.toLowerCase();
    setText(add)  
    props.setalertvalue("Converted to lowercase","success");
  }
  const handleonchange=(event)=>{
    console.log("Onchange working");
    setText(event.target.value)
  
    
  }
  
   const[text, setText] = useState('');
  // const [text, setText] = useState('Enter text here');
//   let myStyle={
// color:'white',
// backgroundColor:'cyan'
//   }
  
    return (
      <>
        <div className="container mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h2 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h2>
<div className="mt-3">
  <textarea placeholder={text.length>0 ?text: 'Please enter something'} className="form-control" onChange={handleonchange} value={text}  style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white'}} id="myBox" rows="7"></textarea>
  <div className="mt-3">
  <button className="btn btn-primary mx-2" onClick={Handleonclick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={HandleonclickLower}>Convert to Lowecase</button>
  </div>
</div>
        </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> 
  
        <h2 style={{color: props.mode==='dark'?'white':'black'}} >Your Input Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minuts take to read</p>
        <h2>Preview</h2>

        <p>{text.length>0 ?text: 'Please enter something'}</p>
        </div>
        {/* <div className="container my-3"><button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button></div> */}
        
        </>
    )
}
