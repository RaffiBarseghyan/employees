import { useEffect, useState } from "react";

import axios from "axios";

function Employees() {
  const [data, setdata] = useState([]);


  useEffect(() => {
    const fd = new FormData();
    axios.post(`https://rocky-temple-83495.herokuapp.com/employees`).then((res) => {
      const persons = res.data;
      setdata(persons);

    });
  }, []);

  console.log(data);

  return <>Employees</>;
}

export default Employees;
