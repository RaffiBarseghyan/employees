import { useEffect, useState } from "react";
import style from "./employees.module.scss"
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
            <div className={`${style.employees} d-flex flex-`}>
              <div>
                {item.name}
                {item.surname}
                {item.email}
                {item.position}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Employees;
