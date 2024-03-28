import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlBasket } from "react-icons/sl";
import { Button , Modal, ModalHeader} from "react-bootstrap";
import { useState } from "react";

function Header(){
  const [showModal,setShowModal] =useState(false)
  const handelShow=()=>{
    setShowModal(true)
  }
  const handelClose=()=>{
    setShowModal(false)
  }
    return(
<div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Your Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Button variant="outline-light" size="sm" onClick={handelShow}>
        <SlBasket/>
        سبد خرید
        </Button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">shop</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Modal show={showModal} onHide={handelClose} dir='rtl'>
      <ModalHeader closeButton closeVariant="dark">
        <Modal.Title>سبد خرید</Modal.Title>
        <Modal.Body>محصولات</Modal.Body>
      </ModalHeader>
    </Modal>
</div>
    )
}
export default Header;