import "./App.css";
import Header from "./components/Header";
import NotePageView from "./views/NotePageView";
import NotesListView from "./views/NotesListView";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
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
