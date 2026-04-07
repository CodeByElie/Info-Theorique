import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Bibliotheque from "./pages/Bibliothèque";
import Problème from "./pages/Problème";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bibliotheque />} />
        <Route path="/bibliotheque" element={<Bibliotheque />} />
        <Route path="/probleme/1" element={<Problème />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;