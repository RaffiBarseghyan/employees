import "./App.css";
import Header from "./Pages/Header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Pages/Employees/employees";
import Tasks from "./Pages/Tasks/tasks";
import Update from "./Pages/UpDel/update";
import UpdateTask from "./Pages/UpDel/updateTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
        <Route exact path="/">
    <Redirect to="/home" />
</Route>
          <Route  >

          <Route path="/tasks" element={<Tasks />} />
          <Route path="/update" element={<Update />} />
          <Route path="/updateTask" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
