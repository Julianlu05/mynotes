import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NotePageView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    setIsLoading(true);
    try {
      if (id == "new") return;
      const response = await fetch("http://127.0.0.1:8000/api/notes/" + id);
      const data = await response.json();
      setNote(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createNote = async () => {
    try {
      fetch(
        `http://127.0.0.1:8000/api/notes/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        }
      );
      navigate("/");

    } catch (error) {
      console.log(error)
    }
  }

  let updateNote = async () => {
    try {
      fetch(
        `http://127.0.0.1:8000/api/notes/${id}/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  let deleteNote = async () => {
    try {
      fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  let handleUpdate = (e) => {
    setNote((note) => ({ ...note, body: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center  justify-between">
      <div className="flex items-start justify-start w-full text-main p-3">
        <h3 onClick={() => navigate("/")} className="flex cursor-pointer items-start text-2xl">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            className="fill-main"
            height="32"
            viewBox="0 0 32 32">
            <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
          </svg>
        </h3>
      </div>
      <textarea
        className="bg-white border-none py-4 px-3 w-full h-[500px] resize-none"
        onChange={handleUpdate}
        value={note?.body}></textarea>
      {id !== "new" ? (
        <div className="flex justify-between w-full px-5 gap-5">
          <button onClick={deleteNote} className="bg-main p-3 w-full">
            Delete
          </button>
          <button onClick={updateNote} className="bg-main p-3 w-full">
            Done
          </button>
        </div>
      ) : (
        <div className="flex justify-between w-full px-5 gap-5">
          <div  className=" p-3 w-full">
          </div>
          <button onClick={createNote} className="bg-main p-3 w-full">
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default NotePageView;
