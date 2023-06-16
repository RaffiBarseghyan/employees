import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateTast() {
  const location = useLocation();
  const navigate = useNavigate();

  const { from } = location.state;

  const [name, setName] = useState(from.name);
  const [description, setdescription] = useState(from.description);
  const [email, setEmail] = useState(from.email);
  const [position, setPosition] = useState(from.position);
  const [status, setStatus] = useState("");

  const nameval = (evt) => {
    setName(evt.target.value);
  };

  const descriptionval = (evt) => {
    setdescription(evt.target.value);
  };

  const emailval = (evt) => {
    setEmail(evt.target.value);
  };

  const positionval = (evt) => {
    setPosition(evt.target.value);
  };
  const upd = () => {
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        description: description,
        email: email,
        position: position,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Success`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigate(-1);
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
          value={name}
          onChange={nameval}
        />
        <input
          className="form-control m-2"
          type="text"
          id="lname"
          name="description"
          placeholder="description"
          value={description}
          onChange={descriptionval}
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

export default UpdateTast;
