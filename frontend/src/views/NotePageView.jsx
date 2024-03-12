import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.svg";
const NotePageView = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/" + id);
      const data = await response.json();
      setNote(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(id);

  return (
    <div>
      {isLoading ? (
        <p>Is loading...</p>
      ) : (
        <>
          <div className="flex items-center justify-between text-main p-3">
            <h3 className="flex items-center text-2xl">
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
            {id !== "new" ? <button>Delete</button> : <button>Done</button>}
          </div>
          <textarea
            className="bg-white border-none py-4 px-3 w-full h-[70vh] resize-none"
            id=""
            cols="30"
            rows="10"></textarea>
        </>
      )}
    </div>
  );
};

export default NotePageView;
