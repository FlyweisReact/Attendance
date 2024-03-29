/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Modal, Form, Container } from "react-bootstrap";
import img from "../../SVG/list.svg";

const users = [
  {
    name: "Wedding/Pre-wedding",
    PG: "4599.91",
    VG: "6533.87",
    DG: "4578.54",
  },
  {
    name: "Maternity/Baby Photoshoot",
    PG: "4599.91",
    VG: "6533.87",
    DG: "4578.54",
  },
  {
    name: "Birthday party (Kids)",
    PG: "4599.91",
    VG: "6533.87",
    DG: "4578.54",
  },
  {
    name: "Birthday party(Adult)",
    PG: "4599.91",
    VG: "6533.87",
    DG: "4578.54",
  },
];

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pricing Section
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label> Name </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label> Description </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Photo Guy Actual Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Photo Guy Expected Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Video Guy Actual Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Video Guy Expected Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Drone Guy Actual Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Drone Guy Expected Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <br />
            <Button variant="outline-dark">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const Payment = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

<div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Pricing Section <br />
          <span style={{ fontSize: "14px" }}>Pricing List</span>
        </p>
      </div>


      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Pricing Section
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add
          </Button>
        </div>
   

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th> PhotoGuy </th>
            <th>VideoGuy </th>
            <th>DroneGuy </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td>Lorem Ipsum Lorem Ipsunm</td>
              <td>
                {" "}
                ₹{i.PG}
                <p style={{ textDecoration: "line-through" }}> ₹4521</p>
              </td>
              <td>
                ₹ {i.VG}
                <p style={{ textDecoration: "line-through" }}> ₹4521</p>{" "}
              </td>
              <td>
                {" "}
                ₹{i.DG}
                <p style={{ textDecoration: "line-through" }}> ₹4521</p>{" "}
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => toast.success(" Deleted ")}
                  />
                  <AiFillEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => setModalShow(true)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </section>
    </>
  );
};

export default HOC(Payment);
