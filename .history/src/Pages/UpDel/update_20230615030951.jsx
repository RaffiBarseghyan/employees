import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Update() {
  const location = useLocation();

  const { from } = location.state;

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
    formData.append("id", from);
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees`, formData)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
        console.log(persons);
      });
  }, []);
  return <></>;
}

export default Update;
