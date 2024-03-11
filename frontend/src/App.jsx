import "./App.css";
import Header from "./components/Header";
import NotePageView from "./views/NotePageView";
import NotesListView from "./views/NotesListView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className=" w-full h-screen bg-bg text-text flex items-center ">
        <div className="w-full max-w-[480px] h-[88vh] mx-auto bg-white shadow-md relative">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListView />} />
            <Route path="/note/:id" element={<NotePageView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
