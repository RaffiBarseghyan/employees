import "./App.css";
import Header from "./Pages/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/employees" element={<Employees />} />

          <Route path="/tasks" element={<Home />} />

          {/* 
          <Route path="/category/:search" element={<Category />} />

          <Route path="/toy/:userId" element={<Toy />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
