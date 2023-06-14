import { useEffect, useState } from "react";

import axios from "axios";

function Employees() {
  const [data, setdata] = useState([]);


  useEffect(() => {
    axios.post(`https://rocky-temple-83495.herokuapp.com/employees`).then((res) => {
      const persons = res.data;
      setdata(persons);
      console.log(persons);

    });
  }, []);


  return <>Employees</>;
}

export default Employees;
