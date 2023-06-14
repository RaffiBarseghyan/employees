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
  console.log(data);
  return (
    <>
      <div className="d-flex flex-wrap justify-content-around">
        {data.map((item) => {
          return (
            <div className={`${style.employees} `}>
              <div>
                <p>Name - {item.name}</p>
                <p>Surname - {item.surname}</p>
                <p>{item.email}</p>
                <p>{item.position}</p>
              </div>

              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
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
            </div>
            
          );
        })}
      </div>
    </>
  );
}

export default Employees;
