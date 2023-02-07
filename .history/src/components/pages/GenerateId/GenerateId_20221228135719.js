/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import img from "../../SVG/list.svg";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const users = [
  {
    name: "Arpan",
    email: "Arpan@gmail.com",
    phone: "1225478965",
    city: "Delhi",
    Gender: "Male",
    Age: "24",
    Website: "Arpan.com",
    Rating: 5,
    wallet: "100",
    status: "yes",
  },
  {
    name: "Krishna",
    email: "Krishna@gmail.com",
    phone: "1234567979",
    city: "Delhi",
    Gender: "Male",
    Age: "28",
    Website: "Arpan.com",
    Rating: 2,
    wallet: "200",
    status: "yes",
  },
];

const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.email} </td>
                  <td> {i.phone} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-solid fa-eye"
                        style={{ color: "#099ffe", cursor: "pointer" }}
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
                          toast.success("Customer Deleted SuccessFully")
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
