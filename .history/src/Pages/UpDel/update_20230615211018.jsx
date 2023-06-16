import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Update() {
  const location = useLocation();

  const { from } = location.state;

  const [name, setName] = useState(from.name);
  const [surname, setsurname] = useState(from.surname);
  const [email, setEmail] = useState(from.email);
  const [position, setPosition] = useState(from.position);
  const [status, setStatus] = useState("");

  const nameval = (evt) => {
    setName(evt.target.value);
  };

  const surnameval = (evt) => {
    setsurname(evt.target.value);
  };

  const emailval = (evt) => {
    setEmail(evt.target.value);
  };

  const positionval = (evt) => {
    setPosition(evt.target.value);
  };
  // const upd = () => {
  //   let formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("surname", surname);
  //   formData.append("email", email);
  //   formData.append("position", position);

  //   fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
  //     method: "PATCH",
  //     body: formData,
  //   });

  //   // Swal.fire({
  //   //   position: "center",
  //   //   icon: "success",
  //   //   title: `Success`,
  //   //   showConfirmButton: false,
  //   //   timer: 1500,
  //   // });
  //   // setTimeout(() => {
  //   //   window.location.reload();
  //   // }, 1500);
  // };

  const del = () => {
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
      method: "DELETE",
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
      <form
        action="https://rocky-temple-83495.herokuapp.com/employees"
        method="post"
        target="_blank"
        className={`${style.employeeForm} container`}
      >
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          value={from.id}
        />
        <input
          className="form-control m-2"
          type="text"
          id="fname"
          name="name"
          placeholder="Name"
          value={name}
          onChange={nameval}
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="surname"
          placeholder="surname"
          value={surname}
          onChange={surnameval}
        />

        <input
          className="form-control m-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={emailval}
        />

        <input
          className="form-control m-2"
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          value={position}
          onChange={positionval}
        />

        <input
          className="btn btn-outline-success m-2"
          type="submit"
          value="Submit"
          onClick={del}
        />
      </form>
    </>
  );
}

export default Update;
