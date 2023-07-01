import './App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from "./assets/notes"

function createNotes(note){
    return <Note
    key={note.id}
    title={note.title}
    content={note.content}
    />
}

function App() {
  
  return (
    <>
      <Header/>
      {notes.map(createNotes)}
      <Footer/>
    </>
  )
}

export default App
