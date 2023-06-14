import { useEffect, useState } from "react";
import style from "./employees.module.scss";
import axios from "axios";
import Delete from "../UpDel/delete";
import Swal from "sweetalert2";

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
        const data = { name: name };
      let formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("position", position);
      console.log(JSON.stringify(name));
      //   axios.post(
      //     `https://rocky-temple-83495.herokuapp.com/employees`,
      //     formData
      //   );
    //   fetch("https://rocky-temple-83495.herokuapp.com/employees", {
    //     body: JSON.stringify(formData),
    //     method: "post",
    //   });

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
      .get(
        `https://rocky-temple-83495.herokuapp.com/employees`
      )
      .then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);
  return (
    <>
      <div className={`${style.employeeForm} container`}>
        <input
          className="form-control m-2"
          type="text"
          placeholder="Name"
          onChange={nameChange}
          value={name}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Lastname"
          onChange={lastnameChange}
          value={lastname}
        />
        <input
          className="form-control m-2"
          type="email"
          placeholder="Email"
          onChange={emailChange}
          value={email}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Position"
          onChange={positionChange}
          value={position}
        />
        <button className="btn btn-outline-success m-2" onClick={addEmployee}>
          Create Employee
        </button>
      </div>

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
                    <Delete id={item.id} />
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
