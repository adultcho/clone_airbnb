import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

//page components
import Main from "./pages/Main";
import Detail from "./pages/Detail";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:postId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
