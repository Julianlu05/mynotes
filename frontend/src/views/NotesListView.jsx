import { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

const NotesListView = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes");
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="flex items-center justify-between py-3 px-4">
        <h2 className="text-main text-[24px] bold">&#9782; Notes</h2>
        <p className="text-gray text-[18px] bold">{notes.length}</p>
      </div>

      <div className="p-0 my-4 h-[70vh] overflow-y-auto ">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListView;
