import axios from "axios";
import { useEffect, useState } from "react";

function SearchData() {
  const [Tas, setTas] = useState([]);

  useEffect(() => {
    axios.get(`http://barmatoys.loc/api/get/addBasket`).then((res) => {
      const persons = res.data;
      setToy(persons.data);
    });
  }, []);

  return Toy;
}

export default SearchData;
