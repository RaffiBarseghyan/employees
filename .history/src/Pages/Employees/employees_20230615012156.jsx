import { useEffect, useState } from "react";
import style from "./employees.module.scss";
import axios from "axios";
import Delete from "../UpDel/delete";

function Employees() {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  //   https://rocky-temple-83495.herokuapp.com/employees
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

  const addEmployee = () => {
    if (name == "") {
      errors("Name Required!");
    } else if (lastname == "") {
      errors("Lastname Required!");
    } else if (item == "") {
      errors("Item Required!");
    } else if (agemin == "") {
      setagemin(10);
    } else if (agemax == "") {
      setagemax(28);
    } else if (description == "") {
      errors("Description Required!");
    } else {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("color", color);
      formData.append("item", item);
      formData.append("goal1", goal1);
      formData.append("goal2", goal2);
      formData.append("goal3", goal3);
      formData.append("goal4", goal4);
      formData.append("goal5", goal5);
      formData.append("goal6", goal6);
      formData.append("goal7", goal7);

      formData.append("agemin", agemin);
      formData.append("agemax", agemax);
      formData.append("price", price);

      formData.append("description", description);

      axios.post(`http://barmatoys.loc/api/create/toy`, formData);

      filesSend++;
      setname("");
      setcolor("");
      setitem("");
      setagemin("");
      setagemax("");
      setprice("");
      setdescription("");

      setTimeout(() => {
        window.location.replace("/confirmcreate");
      }, 1500);
    }
  };
  console.log(name);

  useEffect(() => {
    axios
      .get(
        `https://rocky-temple-83495.herokuapp.com/employees?_page=1&_limit=10`
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
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Lastname"
          onChange={lastnameChange}
        />
        <input
          className="form-control m-2"
          type="email"
          placeholder="Email"
          onChange={emailChange}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Position"
          onChange={positionChange}
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
                    <Delete id={item.id} req="user" />
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
