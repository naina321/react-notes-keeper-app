import { useState } from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateNote from "./createNote";

function App() {
  const [notes, setnotes] = useState([]);
  const addNote = (newNote) => {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  return (
    <div className="App">
      <Header></Header>
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          ></Note>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
