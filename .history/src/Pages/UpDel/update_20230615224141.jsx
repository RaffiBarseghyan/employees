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
  const upd = () => {


    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        position: position,
      }),
    });
    fetch("http://www.example.com/books/1", { // note we are going to /1
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
      },
    body: JSON.stringify(
      {
        "likes": 5           // we are changing the "likes" value to 5
      }
    )
  });
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: `Success`,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1500);
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
          onClick={upd}
        />
      </div>
    </>
  );
}

export default Update;
