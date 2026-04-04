import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Bibliotheque from "./pages/Bibliothèque";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bibliotheque />} />
        <Route path="/bibliotheque" element={<Bibliotheque />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;