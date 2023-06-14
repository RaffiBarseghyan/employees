import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import axios from "axios";

function Update() {

    const [data, setdata] = useState([]);


//   const del = () => {
//     fetch(
//       `https://rocky-temple-83495.herokuapp.com/employees/${
//         Object.values(id)[0]
//       }`,
//       { method: "DELETE" }
//     ).then(() => setStatus("Delete successful"));
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: `Success`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     setTimeout(() => {
//       window.location.reload();
//     }, 1500);
//   };

  useEffect(() => {
    let formData = new FormData();
    formData.append("prodId", from.target.("a-key"));
    axios.get(`https://rocky-temple-83495.herokuapp.com/employees`),
      formData.then((res) => {
        const persons = res.data;
        setdata(persons);
      });
  }, []);
  return <></>;
}

export default Update;
