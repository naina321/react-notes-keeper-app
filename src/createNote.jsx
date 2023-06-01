import { useState } from "react";
import "./createNote.css";
const CreateArea = (props) => {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <div class="formcontent">
          <input
            id="in"
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

          <textarea
            id="tt"
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          ></textarea>

          <button onClick={submitNote}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
