import "./App.scss";
import "./components/Nav";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Monday from "./pages/Monday";
import Tuesday from "./pages/Tuesday";
import Wednesday from "./pages/Wednesday";
import Thursday from "./pages/Thursday";
import Friday from "./pages/Friday";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <h1 className="main__title">Задачи</h1>

        <Routes>
          <Route path="monday" element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
