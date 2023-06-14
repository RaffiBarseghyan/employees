import { useEffect, useState } from "react";
import style from "./employees.module.scss";
import axios from "axios";
import Delete from "../UpDel/delete";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Employees() {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const nameChange = (evt) => {
    setName(evt.target.value);
  };
  const lastnameChange = (evt) => {
    setLastname(evt.target.value);
  };
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const positionChange = (evt) => {
    setPosition(evt.target.value);
  };

  function errors(message) {
    return Swal.fire({
      position: "center",
      icon: "error",
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const addEmployee = () => {
    if (name == "") {
      errors("Name Required!");
    } else if (lastname == "") {
      errors("Lastname Required!");
    } else if (email == "") {
      errors("Email Required!");
    } else if (position == "") {
      errors("Position Required!");
    } else {
      const data = {
        name: name,
        lastname: lastname,
        email: email,
        position: position,
      };
      let formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("position", position);
      console.log(data);

      // fetch("https://rocky-temple-83495.herokuapp.com/employees", {
      //   body: data,
      //   method: "post",
      // });

      setName("");
      setLastname("");
      setEmail("");
      setPosition("");

      //   setTimeout(() => {
      //     window.location.replace("/employees");
      //   }, 1500);
    }
  };

  useEffect(() => {
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);
  return (
    <>
      <form
        action="https://rocky-temple-83495.herokuapp.com/employees"
        method="post"
        target="_blank"
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
          name="lastname"
          placeholder="Lastname"
        />

        <input
          className="form-control m-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <input
          className="form-control m-2"
          type="text"
          id="Position"
          name="Position"
          placeholder="Position"
        />

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
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
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id} className={`${style.employees} `}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <th>{item.position}</th>

                <th>
                  <button className={`${style.basketButtonDe} btn btn-danger `}>
                    <Delete id={item.id} />
                  </button>
                </th>
                <th>
                  <button
                    className={`${style.basketButtonDe} btn btn-success `}
                  >
                    <Link to="/update" state={{ from: item }}>
                      Update
                    </Link>
                  </button>
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