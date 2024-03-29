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
  const [wallet, setWallet] = useState(false);

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
                <Form.Label>How do you transfer data</Form.Label>
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
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  src={
                    "https://media.istockphoto.com/id/538162002/photo/dslr-camera-lens-zoom-side-view.jpg?s=170667a&w=0&k=20&c=VWDr4rJgTtdK-n6Pv8isLi-P6oX0kifCyxLAe_TROhI="
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
                <img
                  src={
                    "https://www.pngitem.com/pimgs/m/106-1063235_nikon-d810-slr-camera-top-view-transparent-png.png"
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
                <img
                  src={
                    "https://thumbs.dreamstime.com/b/film-camera-front-view-22359929.jpg"
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
              </div>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Website/Portfolio Link
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                HeroDkd.com
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Skill
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                PhotoGraphy
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Expertise
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Wedding/Pre wedding
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Other Expertise
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Travel/Nature
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Driving License
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  src={
                    "https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=170667a&w=is&k=20&c=jI11Y_DY6udlhE_x8hfddj2tKMhtjLZyKn8Fgv-CqTM="
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
                <img
                  src={
                    "https://support.tradeapp.com/hc/article_attachments/360007169758/Driving_back_EN.png"
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
              </div>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Driving License Number
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                RJ-13/DLC/12/ 123456
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Aadhaar Card
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  src={
                    "https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg"
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
                <img
                  src={
                    "https://5.imimg.com/data5/YS/PN/XY/SELLER-24419352/pvc-aadhaar-card-500x500.jpg"
                  }
                  alt=""
                  style={{ width: "100px" }}
                />
              </div>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Aadhaar Card Number
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                1245 1245 1245
              </p>
              <p
                style={{
                  fontSize: "1.6rem",
                  margin: "0",
                  fontWeight: "lighter",
                }}
              >
                Transfer data through
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  border: "1px solid #595959",
                  padding: "5px",
                  fontWeight: "lighter",
                }}
              >
                Online
              </p>
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
