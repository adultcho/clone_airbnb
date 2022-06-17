import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

//page components
import Main from "./pages/main";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
