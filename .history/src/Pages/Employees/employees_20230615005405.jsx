import { useEffect, useState } from "react";
import style from "./employees.module.scss";
import axios from "axios";

function Employees() {
  const [data, setdata] = useState([]);

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
                    <button
                      className={`${style.basketButtonDe} btn btn-danger `}
                    >
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
