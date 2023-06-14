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
    axios
      .get(`https://rocky-temple-83495.herokuapp.com/employees/${from}`)
      .then((res) => {
        const persons = res.data;
        setdata(persons);
        console.log(persons);
      });
  }, []);
  return (
    <>
      <div
        className={`${style.employeeForm} container`}
      >
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          placeholder="Name"
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Lastname"
        />

        <input
          className="form-control m-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <input
          className="form-control m-2"
          type="text"
          id="Position"
          name="Position"
          placeholder="Position"
        />

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
        />
      </div>
    </>
  );
}

export default Update;
