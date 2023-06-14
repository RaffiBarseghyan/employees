import React, { useState } from "react";
import style from "./upDel.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Delete(id) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const del = () => {
    console.log(Object.values(id)[0]);
    axios.get(
      `https://rocky-temple-83495.herokuapp.com/employees/${Object.values(id)[0]}`
    );
    window.location.reload();
  };

  return (
    <div id="asdasdasd">
      <Link
        className={`nav-link dropdown ${style.cart}`}
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
