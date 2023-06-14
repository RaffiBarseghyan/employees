import { useEffect, useState } from "react";

function Employees() {
    const [data, setdata] = useState("");
    const [file, setFile] = useState([]);
    const [user, setUser] = useState([]);
    const [dataAll, setDataAll] = useState([]);
    const [review, setReview] = useState([]);
    const [color, setColor] = useState("#000000");

    useEffect(() => {
        const fd = new FormData();
        axios.post(`http://barmatoys.loc/api/get/confirmget`).then((res) => {
          const persons = res.data;
          setdata(persons.data[0]);
          setReview(persons.review);
          setUser(persons.user);
          setFile(persons.file);
          setColor(persons.data[0].color);
          setDataAll(persons.dataAll);
        });
      }, []);



    return(<>
    Employees
    </>)
}

export default Employees;