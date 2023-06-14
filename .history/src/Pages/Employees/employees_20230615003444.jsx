import { useEffect, useState } from "react";

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

  return( <>
  <div className="">
    {data.map((item)=>{
        <div className="">
            
        </div>
    })}
  </div>
  </>);
}

export default Employees;
