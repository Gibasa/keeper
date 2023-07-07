import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "./assets/notes"
import CreateArea from "./CreateArea";
import { useState } from "react";

// function createNotes(noteItem){
//     return <Note
//     key={noteItem.id}
//     title={noteItem.title}
//     content={noteItem.content}
//     />
// }

function App() {
  const [items, setItems] = useState([]);

  function addItems(inputTitle, inputText) {
    const newItem = {
      title: inputTitle,
      text: inputText,
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea addItems={addItems} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.text}
          deleteItem={deleteItem}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
