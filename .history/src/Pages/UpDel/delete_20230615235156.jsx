import React, { useState } from "react";
import style from "./upDel.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Delete(id, url) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [status, setStatus] = useState("");
  console.log(id);
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

  return (
    <div id="asdasdasd">
      <Link
        className={`${style.basketButtonDe} btn btn-danger `}
        to="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleShow}
      >
        Delete
      </Link>
      <Modal
        className={style.more}
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton className={style.button1}>
          <div className="col-sm-10 h2 ">Delete</div>
        </Modal.Header>

        <Modal.Body className={`${style.moreBody} container`}>
          <Modal.Title className={style.itemName}>
            Do you want to delete this employee
          </Modal.Title>
        </Modal.Body>
        <Modal.Footer className={style.footer}>
          <Button
            className={style.cancel}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button onClick={del} className={style.save} variant="primary">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
