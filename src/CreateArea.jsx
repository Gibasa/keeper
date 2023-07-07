import { useState } from "react";
import PropTypes from "prop-types"

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");

  CreateArea.propTypes = {
    addItems: PropTypes.func.isRequired
  };
  

  function handleInputTitle(event) {
    const input = event.target.value;
    setInputTitle(input);
  }

  function handleInputText(event) {
    const input = event.target.value;
    setInputText(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItems(inputTitle, inputText);
    setInputTitle("");
    setInputText("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputTitle}
          value={inputTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleInputText}
          value={inputText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
