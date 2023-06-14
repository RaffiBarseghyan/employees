import React, { useState } from "react";
import style from "./upDel.module.scss";
import Swal from "sweetalert2";

function Update() {
  const del = () => {
    fetch(
      `https://rocky-temple-83495.herokuapp.com/employees/${
        Object.values(id)[0]
      }`,
      { method: "DELETE" }
    ).then(() => setStatus("Delete successful"));
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
  return <></>;
}

export default Update;
