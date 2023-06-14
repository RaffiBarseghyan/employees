import "./App.css";
import Header from "./Pages/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* <Route path="/employees" element={<Home />} />

          <Route path="/tasks" element={<Home />} /> */}





          <Route path="/basket" element={<Basket />} />
          <Route path="/category/:search" element={<Category />} />

          <Route path="/toy/:userId" element={<Toy />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
