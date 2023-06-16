import axios from "axios";
import { useEffect, useState } from "react";

function SearchData() {
  const [Task, setTask] = useState([]);

  useEffect(() => {
    axios.get(`https://rocky-temple-83495.herokuapp.com/tasks`).then((res) => {
      const persons = res.data;
      setTask(persons.data);
    });
  }, []);

  return Toy;
}

export default SearchData;
