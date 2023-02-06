import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handletoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  };

  const handleonChange = (Event) => {
    setText(Event.target.value);
  };

  const handletoclear = () => {
    setText("");
  };

const [count, setcount] = useState(0)
 


  const handletocount=()=>{
    
    setcount(count+1)
    console.log("you clicked")
   
  }


  //  this is state
  const [text, setText] = useState("");

  // now to change the text
  // setText("enter text")
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        // style={{ color: props.nmode === "blue" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black"

              // backgroundColor: props.nmode === "blue" ? "#9cb3fb" : "white",
              // color: props.nmode === "blue" ? "white" : "blue"

            }}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handletoclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handletoclear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handletocount}>
          count
        </button>
      </div>
      <div
        // className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        // style={{ color: props.nmode === "blue" ? "white" : "black" }}              
      >
        <h1>your text summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words & {text.trim().length}characters
        </p>
        <p>minute to read {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}</p>

        <h4>preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
