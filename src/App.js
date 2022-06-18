import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

//page components
import Main from "./pages/main";
import Detail from "./pages/detail";

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
