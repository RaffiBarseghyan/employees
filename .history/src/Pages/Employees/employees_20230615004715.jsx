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
            <th scope="col">surname</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Postal code</th>
            <th scope="col">Phone</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr key={item.prodId}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.email_verified_at}</td>
                <th>{item.address}</th>
                <th>{item.city}</th>
                <th>{item.country}</th>
                <th>{item.postal}</th>
                <th>{item.phone}</th>

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

      <div className="d-flex flex-wrap justify-content-around">
        {data.map((item) => {
          return (
            <div key={item.id} className={`${style.employees} `}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <th>{item.position}</th>

                <th>
                  <button className={`${style.basketButtonDe} btn btn-danger `}>
                    {/* <Delete id={item.id} req="user" /> */}
                  </button>
                </th>
              </tr>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Employees;
