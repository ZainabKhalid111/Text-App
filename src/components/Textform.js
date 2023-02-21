import React, { useState } from "react"; //rfce

export default function Textform(props) {
  //use within component function block...updates values

  const [mystyle, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtntext] = useState("Enable dark mode");

  const togglestate = () => {
    if (mystyle.color === "black") {
      setstyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntext("Enable Light Mode");
    } else {
      setstyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Enable Dark Mode");
    }
  };

  const [text, setText] = useState("");
  // text = "new text"; //wrong way to update the state
  //  setText("hello"); //correct way

  const uppercase = () => {
    // console.log('uppercase was clicked ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  };

  const lowercase = () => {
    // console.log('uppercase was clicked ' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lpper case", "success")

  };

  const cleartext = () => {
    // console.log('uppercase was clicked ' + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");

  };

  const copytext = () => {
    // var text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert(" Copied to Clipboard", "success");

  };

  const removeextraspaces = () => {
    let newtext = text.split(/[ ]+/);
    props.showAlert("Converted to upper case", "success")
    setText(newtext.join(" "));
    props.showAlert(" Extra Spaces Removed", "success");

  };

  const reversetext = () => {
    let reverse = [];
    for (let i = text.length - 1; i > -1; i--) {
      reverse.push(text[i]);
    }
    console.log(reverse);
    setText(reverse.toString().replaceAll(',', ''));
    props.showAlert(" String reversed", "success");
  }

  const reversewordsorder = () => {
    let totalwords = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;
    // console.log(text);
    let wordslist = [];
    for (let i = totalwords; i > 0; i--) {
      // console.log(totalwords);
      wordslist.push(text[i]);
    }
    console.log(wordslist);
    setText(wordslist.toString().replaceAll(',', ''));
    // props.showAlert(" Words in String reversed", "success");
  }

  const handleonchange = (event) => {
    // console.log('on change');
    setText(event.target.value);

  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} //default value is set above
            on
            onChange={handleonchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={uppercase}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={lowercase}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={cleartext}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={copytext}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={removeextraspaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={reversetext}
        >
          Reverse text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={reversewordsorder}
        >
          Reverse Words
        </button>

      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Your Text Summary </h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words and {text.length}
          characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Nothing to Preview"} </p>
      </div>
    </>
  );
}
