import axios from "axios";
import { useEffect, useState } from "react";

function SearchData() {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setToy(persons.data);
    });
  }, []);

  return Toy;
}

export default SearchData;
