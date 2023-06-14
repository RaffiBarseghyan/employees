import { useEffect, useState } from "react";

import axios from "axios";

function Employees() {
  const [data, setdata] = useState("");
  const [file, setFile] = useState([]);
  const [user, setUser] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [review, setReview] = useState([]);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const fd = new FormData();
    axios.post(`https://rocky-temple-83495.herokuapp.com/employees?_page=1&_limit=10`).then((res) => {
      const persons = res.data;
      setdata(persons.data[0]);

    });
  }, []);

  return <>Employees</>;
}

export default Employees;
