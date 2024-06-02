import { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, handleDelete }) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} handleDelete={handleDelete} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum adalah teks tiruan dari industri percetakan dan penataan huruf. Lorem Ipsum telah menjadi standar industri',
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const handleDelete = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  return <CurrentPageWidget currentPage={currentPage} setCurrentPage={setCurrentPage} noteList={noteList} addNote={addNote} handleDelete={handleDelete} />;
};

export default App;
