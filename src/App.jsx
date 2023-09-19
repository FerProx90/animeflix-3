import Home from "./pages/home/Home";
import Header from "./components/header/index";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import SerieForm from "./pages/serieForm/SerieForm";
import CategoryForm from "./pages/categoryForm/CategoryForm";
import Serie from "./components/Serie/Serie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serie-form" element={<SerieForm />} />
        <Route path="/categoria-form" element={<CategoryForm />} />
        <Route path="/serie" element={<Serie />} />
      </Routes>
    </Router>
  );
}

export default App;
