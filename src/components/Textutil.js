import React, { useState } from "react";

export default function Textutil(props) {
  const [text, setText] = useState("");
  // Uppercase
  const handleUpcase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  };
  // Lowercase
  const handleLoCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "Success");
  };

  // Count Text
  const countText = {
    word: function () {
      if (text.length === 0) {
        return 0;
      } else {
        return text.split(" ").filter((elem) => elem !== '' ).length;
      }
    },
    letter: text.length,
  };

  // Reading time
  const readingTime = Number(countText.word()) / 200;
  const readingMinute = () => {
    if (readingTime <= 1.99) {
      return "minute";
    } else {
      return "minutes";
    }
  };

  // Text Copy
  const handleCopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text Copied into Clipboard", "Success");
  };

  // Remove Extra Space
  const handleExtraspace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space has been removed", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container py-3">
        <h3>Text Utils</h3>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control shadow-none"
            id="myBox"
            rows="6"
            style={{backgroundColor:props.mode.dblue,color:`${props.mode.color}`}}
          ></textarea>

          <h6>Summary : </h6>
          <div className="ms-2">
            <span>
              Your text is of {countText.letter} letter and {countText.word()}{" "}
              word long
            </span>
            <br />
            <span>
              Your estimated reading time is {readingTime} {readingMinute()}
            </span>
          </div>
        </div>
        <div className="py-2 d-flex gap-3">
          {/* uppercase Button  */}
          <button
            onClick={handleUpcase}
            className="btn btn-primary shadow-none"
          >
            Uppercase
          </button>
          {/* lowercase Button  */}
          <button
            onClick={handleLoCase}
            className="btn btn-primary shadow-none"
          >
            Lowercase
          </button>
          {/* Remove space  */}
          <button
            onClick={handleExtraspace}
            className="btn btn-primary shadow-none"
          >
            Remove Space
          </button>
          {/* Copy  */}
          <button onClick={handleCopy} className="btn btn-primary shadow-none">
            Copy
          </button>
        </div>
      </div>
    </>
  );
}
