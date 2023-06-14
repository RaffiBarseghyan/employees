import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Update() {
  const location = useLocation();

  const { from } = location.state;

  const [name, setName] = useState(from.name);
  const [surname, setsurname] = useState(from.surname);
  const [email, setEmail] = useState(from.email);
  const [position, setPosition] = useState(from.position);
  const [status, setStatus] = useState("");

  const upd = () => {
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
      name: name,
      method: "UPDATE",
    }).then(() => setStatus("Delete successful"));
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Success`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <div className={`${style.employeeForm} container`}>
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          placeholder="Name"
          defaultValue={name}
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="surname"
          placeholder="surname"
          defaultValue={surname}
        />

        <input
          className="form-control m-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          defaultValue={email}
        />

        <input
          className="form-control m-2"
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          defaultValue={position}
        />

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
          onClick={upd}
        />
      </div>
    </>
  );
}

export default Update;
