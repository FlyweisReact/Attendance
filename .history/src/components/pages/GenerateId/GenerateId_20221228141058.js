/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import img from "../../SVG/list.svg";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import warning from "../../SVG/yellow-circle-exclamation-mark-icon-warning-sign-vector-13227823 1.png";

const users = [
  {
    name: "Arpan",
    email: "Arpan@gmail.com",
    phone: "1225478965",
    servie: "Photography",
    Rating: 5,
    status: "yes",
  },
  {
    name: "Krishna",
    email: "Krishna@gmail.com",
    servie: "Videography",
    phone: "1234567979",
    Rating: 2,
    status: "yes",
  },
];

const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);

  // Add Hero
  function MyVerticallyCenteredModal(props) {
    function selectImage(id) {
      const target = document.getElementById(`${id}`);
      target.click();
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit Hero" : "Add Hero"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Gender</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Which Camera/Drone do you use</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select your Prefrence</option>
                  <option>Sony</option>
                  <option>Canon</option>
                  <option>Nikon</option>
                  <option>DJI</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Equipment Specification</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gadget Photos</Form.Label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("top")}
                  >
                    Side view
                  </button>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("side")}
                  >
                    Top view
                  </button>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("front")}
                  >
                    Front view
                  </button>
                </div>
                <input type="file" id="top" style={{ display: "none" }} />
                <input type="file" id="side" style={{ display: "none" }} />
                <input type="file" id="front" style={{ display: "none" }} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Website/Portfolio link</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Skill</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select your Prefrence</option>
                  <option>Photography</option>
                  <option>Videography</option>
                  <option>Photography & Videography</option>
                  <option>Aerial Videography & PhotoGraphy</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Expertise</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select your Prefrence</option>
                  <option>Wedding/Pre wedding</option>
                  <option>Maternity/Baby Photoshoot</option>
                  <option>Birthday Party (Adults)</option>
                  <option>Birthday Party (Kids)</option>
                  <option>Special Occasion / Function</option>
                  <option>Portriat/Fashion</option>
                  <option>Product/E-Com</option>
                  <option>Real Estate/Interior</option>
                  <option>Corporate/Industrial</option>
                  <option>Social Medial/Youtube</option>
                  <option>Travel/Nature</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Other Expertise</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Driving License</Form.Label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("DrivingFront")}
                  >
                    Front Side
                  </button>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("DrivingBack")}
                  >
                    Back Side
                  </button>
                </div>
                <input
                  type="file"
                  id="DrivingFront"
                  style={{ display: "none" }}
                />
                <input
                  type="file"
                  id="DrivingBack"
                  style={{ display: "none" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Driving License Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aadhaar Card</Form.Label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("AadhaarFront")}
                  >
                    Front Side
                  </button>
                  <button
                    style={{ border: "1px solid #bfbfbf", padding: "10px" }}
                    type="button"
                    onClick={() => selectImage("AadhaarBack")}
                  >
                    Back Side
                  </button>
                </div>
                <input
                  type="file"
                  id="AadhaarFront"
                  style={{ display: "none" }}
                />
                <input
                  type="file"
                  id="AadhaarBack"
                  style={{ display: "none" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Aadhaar Card Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>How do you transfer sata</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select your Prefrence</option>
                  <option>SD card to Laptop</option>
                  <option>Pendrive</option>
                  <option>Data Cable & Sd Card Reader</option>
                  <option>Online</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="outline-success"
                onClick={() => {
                  setModalShow(false);
                  toast.success("Customer added Successfully");
                }}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  // Edit Stutus
  function StatusModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <div style={{ width: "100px", display: "block", margin: "auto" }}>
              <img src={warning} alt="" style={{ width: "100%" }} />
            </div>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "lighter",
                marginTop: "1%",
              }}
            >
              Disable Hero?
            </h2>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              if press yes then disable Hero!
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  border: "1px solid #f0f0f0",
                  backgroundColor: "#f0f0f0",
                  fontSize: "1.6rem",
                  padding: "10px",
                }}
                onClick={() => setOpen(false)}
              >
                No
              </button>
              <button
                style={{
                  border: "1px solid #4099ff",
                  backgroundColor: "#4099ff",
                  fontSize: "1.6rem",
                  padding: "10px",
                  color: "#fff",
                }}
                onClick={() => {
                  toast.success("User Disable Successfully");
                  setOpen(false);
                }}
              >
                Yes
              </button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  // View Coustomer Modal
  function ViewModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container>
            <h2 style={{ fontWeight: "lighter" }}>Hero</h2>
            <div>
              <div style={{ width: "250px" }}>
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>

              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Name
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Narinder Chiranjeevi
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Email
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Narinder@gmail.com
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Phone Number
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                7854963214
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                City
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Delhi
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Gender
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Male
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                DOB
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                12/02/2001
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Website
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Narinder.com
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Wallet
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                ₹100
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Camera
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Sony
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Equipment Specification
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
              In publishing and graphic design
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Gadget Photos
              </p>
              <div style={{display : 'flex' , gap : '10px'}}>
                <img src={'https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-32..v1638904093.jpg'} alt='' style={{width : '100px'}}/>
                <img src={'data:image/jpeg;base64,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'} alt='' style={{width : '100px'}} />
                <img src={'https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-32..v1638904093.jpg'} alt=''  style={{width : '100px'}}/>
              </div>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  const filterData = !query
    ? users
    : users.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.phone?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      {/* Modals--------------------- */}{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <StatusModal show={open} onHide={() => setOpen(false)} />
      <ViewModal show={view} onHide={() => setView(false)} />
      {/* ------------------------------------ */}
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
          Hero's List <br />
          <span style={{ fontSize: "14px" }}>All Hero's List</span>
        </p>
      </div>
      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Hero's
            <hr style={{ width: "70%" }} />
          </span>
          <Button
            style={{
              backgroundColor: "#4099ff",
              color: "#fff",
              borderRadius: "0",
              border: "1px solid #4099ff",
              padding: "10px",
            }}
            onClick={() => {
              setModalShow(true);
              setEdit(false);
            }}
          >
            Add Hero's
          </Button>
        </div>

        <div style={{ float: "right", color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "250px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Name , Phone number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <br />

        <div style={{ marginTop: "4%", overflow: "auto", width: "100%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th> Phone Number </th>
                <th> Service </th>
                <th> Rating </th>
                <th> Status </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td> {i.servie} </td>
                  <td> {i.Rating} </td>
                  <td>
                    {i.status === "yes" ? (
                      <label className="switch">
                        <input
                          type={"checkbox"}
                          checked
                          onClick={() => setOpen(true)}
                        />
                        <span className="slider"></span>
                      </label>
                    ) : (
                      <label className="switch">
                        <input
                          type={"checkbox"}
                          onClick={() => setOpen(true)}
                        />
                        <span className="slider"></span>
                      </label>
                    )}
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-solid fa-eye"
                        style={{ color: "#099ffe", cursor: "pointer" }}
                        onClick={() => setView(true)}
                      ></i>
                      <i
                        class="fa-solid fa-pen-to-square"
                        style={{ color: "#267cb5", cursor: "pointer" }}
                        onClick={() => {
                          setModalShow(true);
                          setEdit(true);
                        }}
                      ></i>
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() =>
                          toast.success("Hero Deleted SuccessFully")
                        }
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};
export default HOC(GenerateId);
