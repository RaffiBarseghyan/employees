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
  const [startDate, setstartDate] = useState(from.startDate);
  const [endDate, setendDate] = useState(from.endDate);
  const [employeeId, setemployeeId] = useState(from.employeeId);

  const [status, setStatus] = useState("");

  const nameval = (evt) => {
    setName(evt.target.value);
  };

  const descriptionval = (evt) => {
    setdescription(evt.target.value);
  };

  const startDateval = (evt) => {
    setstartDate(evt.target.value);
  };

  const endDateval = (evt) => {
    setendDate(evt.target.value);
  };

  const employeeIdval = (evt) => {
    setemployeeId(evt.target.value);
  };
  const upd = () => {
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${from.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        employeeId: employeeId,
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
          type="startDate"
          id="startDate"
          name="startDate"
          placeholder="startDate"
          value={startDate}
          onChange={startDateval}
        />

        <input
          className="form-control m-2"
          type="text"
          id="endDate"
          name="endDate"
          placeholder="endDate"
          value={endDate}
          onChange={endDateval}
        />

        <input
          className="form-control m-2"
          type="text"
          id="employeeId"
          name="employeeId"
          placeholder="employeeId"
          value={employeeId}
          onChange={employeeIdval}
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
