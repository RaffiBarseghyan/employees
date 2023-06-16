import React, { useEffect, useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateTask() {
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
    fetch(`https://rocky-temple-83495.herokuapp.com/tasks/${from.id}`, {
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
        <label htmlFor="name">
          Name
          <input
            className="form-control mt-2 "
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={nameval}
          />
        </label>

        <input
          type="text"
          id="lname"
          name="description"
          placeholder="description"
          value={description}
          onChange={descriptionval}
        />

        <label htmlFor="description">
          Description
          <textarea
            name="description"
            id="description"
            className="form-control mt-2"
          ></textarea>
        </label>
        <label htmlFor="startDate">
          <p>Start Date </p>
          <input
            className="form-control mt-2"
            type="date"
            id="startDate"
            name="startDate"
            placeholder="startDate"
          />
        </label>
        <label htmlFor="endDate">
          <p> End Date</p>
          <input
            className="form-control mt-2"
            type="date"
            id="endDate"
            name="endDate"
            placeholder="endDate"
          />
        </label>
        <label htmlFor="employeeId">
          Employee Id
          <select
            name="employeeId"
            id="employeeId"
            placeholder="employeeId"
            className="form-control mt-2"
            value={employeeId}
            onChange={employeeIdChange}
          >
            {data.map((item) => {
              return (
                <option name="employeeId" id="employeeId" value={item.id}>
                  {item.id}
                </option>
              );
            })}
          </select>
        </label>
        

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

export default UpdateTask;
