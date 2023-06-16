import { useEffect, useState } from "react";
import style from "./employees.module.scss";
import axios from "axios";
import Delete from "../UpDel/delete";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Employees() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);

  const formClk = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Success`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };


  return (
    <>
      <iframe
        name="dummyframe"
        id="dummyframe"
        style={{ display: "none" }}
      ></iframe>
      <form
        action="https://rocky-temple-83495.herokuapp.com/employees"
        method="post"
        target="dummyframe"
        className={`${style.employeeForm} container`}
      >
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          placeholder="Name"
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="surname"
          placeholder="Surname"
        />

        <input
          className="form-control m-2"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />

        <input
          className="form-control m-2"
          type="text"
          id="position"
          name="position"
          placeholder="Position"
        />

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
          onClick={formClk}
        />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id} className={`${style.employees} `}>

                <th scope="row">
                  <Link
                    className={`navbar-brand`}
                    to={`/user/${item.id}`}
                    onClick={() =>
                      setTimeout(() => {
                        window.location.reload();
                      }, 0)
                    }
                    state={{ from: item.id }}
                  >
                    <div>{item.id}</div>
                  </Link>
                </th>
                <td>
                  <Link
                    className={`navbar-brand`}
                    to={`/user/${item.id}`}
                    onClick={() =>
                      setTimeout(() => {
                        window.location.reload();
                      }, 0)
                    }
                    state={{ from: item.id }}
                  >
                    <div>{item.name}</div>
                  </Link>
                </td>
                <td>
                  <Link
                    className={`navbar-brand`}
                    to={`/user/${item.id}`}
                    onClick={() =>
                      setTimeout(() => {
                        window.location.reload();
                      }, 0)
                    }
                    state={{ from: item.id }}
                  >
                    <div>{item.surname}</div>
                  </Link>
                </td>
                <td>
                  <Link
                    className={`navbar-brand`}
                    to={`/user/${item.id}`}
                    onClick={() =>
                      setTimeout(() => {
                        window.location.reload();
                      }, 0)
                    }
                    state={{ from: item.id }}
                  >
                    <div>{item.email}</div>
                  </Link>
                </td>
                <td>
                  <Link
                    className={`navbar-brand`}
                    to={`/user/${item.id}`}
                    onClick={() =>
                      setTimeout(() => {
                        window.location.reload();
                      }, 0)
                    }
                    state={{ from: item.id }}
                  >
                    <div>{item.position}</div>
                  </Link>
                </td>

                <th>
                  <Delete
                    id={item.id}
                    url={"https://rocky-temple-83495.herokuapp.com/employees"}
                  />
                </th>
                <th>
                  <Link
                    style={{ textDecoration: "none", color: "#ffffff" }}
                    to="/update"
                    state={{ from: item }}
                  >
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

export default Employees;
