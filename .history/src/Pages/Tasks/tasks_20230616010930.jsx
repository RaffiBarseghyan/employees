import axios from "axios";
import style from "./tasks.module.scss";
import { useEffect, useState } from "react";
import Delete from "../UpDel/delete";
import { Link } from "react-router-dom";

function Tasks() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [employeeId, setemployeeId] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://rocky-temple-83495.herokuapp.com/tasks`).then((res) => {
      const persons = res.data;
      setdata2(persons);
    });
  }, []);

  const employeeIdChange = (e) => {
    setemployeeId(e.target.value);
  };

  const searchval = (e) => {
    setsearch(e.target.value);
  };

  

  const formClk = () => {
    window.location.reload();
  };


  const searchChange = () => {
    axios
      .get(
        `https://rocky-temple-83495.herokuapp.com/tasks?name_like=${search}&description_like=${search}&startD
    ate=${search}&endDate=${search}`
      )
      .then((res) => {
        const persons = res.data;
        setdata2(persons);
      });
  };

  return (
    <>
      <iframe
        name="dummyframe"
        id="dummyframe"
        style={{ display: "none" }}
      ></iframe>

      <form
        action="https://rocky-temple-83495.herokuapp.com/tasks"
        method="post"
        target="dummyframe"
        className={`${style.employeeForm} container`}
      >
        <label htmlFor="name">
          Name
          <input
            className="form-control mt-2 "
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            className="form-control mt-2"
          ></textarea>
        </label>
        <label htmlFor="startDate">
          <p>Start Date </p>
          <input
            className="form-control mt-2"
            type="date"
            id="startDate"
            name="startDate"
            placeholder="startDate"
          />
        </label>
        <label htmlFor="endDate">
          <p> End Date</p>
          <input
            className="form-control mt-2"
            type="date"
            id="endDate"
            name="endDate"
            placeholder="endDate"
          />
        </label>
        <label htmlFor="employeeId">
          Employee Id
          <select
            name="employeeId"
            id="employeeId"
            placeholder="employeeId"
            className="form-control mt-2"
            value={employeeId}
            onChange={employeeIdChange}
          >
            {data.map((item) => {
              return (
                <option
                  key={item.id}
                  name="employeeId"
                  id="employeeId"
                  value={item.id}
                >
                  {item.id}
                </option>
              );
            })}
          </select>
        </label>

        <input
          className="btn btn-outline-success mt-2"
          type="submit"
          value="Submit"
          onClick={formClk}
        />
      </form>
      <form className="d-flex" role="search" style={{ width: "500px" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={searchval}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={searchChange}
        >
          Search
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Employee Id</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item) => {
            return (
              <tr key={item.id} className={`${style.employees} `}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.startDate}</td>
                <th>{item.endDate}</th>
                <th>{item.employeeId}</th>

                <th>
                  <Delete
                    id={item.id}
                    url={"https://rocky-temple-83495.herokuapp.com/tasks"}
                  />
                </th>
                <th>
                  <Link to="/updateTask" state={{ from: item }}>
                    <button
                      className={`${style.basketButtonDe} btn btn-success `}
                    >
                      Update
                    </button>
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Tasks;
