/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Form } from "react-bootstrap";
import img from "../../SVG/list.svg";
import warning from "../../SVG/yellow-circle-exclamation-mark-icon-warning-sign-vector-13227823 1.png";

const data = [
  {
    name: "Employee 1",
    mobile: "4512635412",
    Email: "Employee1@gmail.com",
    Address: "District",
    role: "User",
    location: "Delhi",
    Department: "Health CHO",
    Designation: "hydrabad",
    EmployeeCode: "4512",
    Salary: "20,000",
    State: "Maharastra",
    District: "Mumbai",
    Taluka: "Lorem Ipsum",
    PHC: "Lorem Ipsum",
    SC: "Lorem Ipsum",
    Medical: "Lorem Ipsum",
  },
  {
    name: "Employee 1",
    mobile: "4512635412",
    Email: "Employee1@gmail.com",
    Address: "District",
    role: "User",
    location: "Delhi",
    Department: "Health CHO",
    Designation: "hydrabad",
    EmployeeCode: "4512",
    Salary: "20,000",
    State: "Maharastra",
    District: "Mumbai",
    Taluka: "Lorem Ipsum",
    PHC: "Lorem Ipsum",
    SC: "Lorem Ipsum",
    Medical: "Lorem Ipsum",
  },
];

const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [query, setQuery] = useState("");

  // Add Customer
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
            {edit ? "Edit Customer" : "Add Employee"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Employee Name: (Required)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile: (Required)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email: (Optional)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address: (Optional)</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Employee Role: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select Role--</option>
                  <option>User</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>HOD</option>
                  <option>Attendance Manager</option>
                  <option>Medical Officer</option>
                  <option>Reginoal Manager</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Office Location: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select Location--</option>
                  <option>Delhi</option>
                  <option>Hyderabad</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select Department--</option>
                  <option>Health</option>
                  <option>Marketing</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Designation: (Optional)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Employee Code: (Required)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Basic Salary: (Required)</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>State: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>District: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Taluka: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PHC: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>SC: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Medical Officer: (Required)</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Button variant="outline-success" type="submit">
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
              Disable user?
            </h2>
            <p
              style={{
                fontSize: "1.6rem",
                fontWeight: "lighter",
                textAlign: "center",
              }}
            >
              if press yes then disable user!
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
                type="button"
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
            <h2 style={{ fontWeight: "lighter" }}>Customer</h2>
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
              ></p>
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
              ></p>
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
              ></p>
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
              ></p>
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
              ></p>
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
              ></p>
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
              ></p>
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
              ></p>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  // Add Wallet Modal
  function AddWallet(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ backgroundColor: "#66adff", border: "1px solid #66adff" }}
        >
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#fff" }}
          >
            Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Wallet Amount:
                </Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="Enter Amount"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Choose Option (Add or Deduct Money ):{" "}
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Add or Deduct Money</option>
                  <option value="addbalance">Add Amount</option>
                  <option value="removebalance">Deduct Amount</option>
                </Form.Select>
              </Form.Group>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    width: "100px",
                    backgroundColor: "#4099ff",
                    fontSize: "18px",
                    color: "#fff",
                    padding: "10px",
                  }}
                  type="submit"
                >
                  Submit
                </button>
                <button
                  style={{
                    width: "100px",
                    backgroundColor: "#f0f0f0",
                    fontSize: "18px",
                    color: "black",
                    padding: "10px",
                  }}
                  onClick={() => setWallet(false)}
                >
                  Close
                </button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  // SearchBar
  const filterData = !query
    ? data
    : data.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.Email?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      {" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
      <StatusModal show={open} onHide={() => setOpen(false)} />
      <ViewModal show={view} onHide={() => setView(false)} />
      <AddWallet show={wallet} onHide={() => setWallet(false)} />
      {/* ---------------------- */}
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
          Customer List <br />
          <span style={{ fontSize: "14px" }}>All Customer List</span>
        </p>
      </div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "20px",
          width: "98%",
          marginLeft: "10px",
        }}
        className="response"
      >
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Customers (Total : {data.length})
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
            Add Customers
          </Button>
        </div>

        <div>
          <div style={{ color: "black" }}>
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
        </div>

        {/* Table */}
        <div style={{ overflow: "auto", marginTop: "2%" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Mobile</th>
                <th> Email</th>
                <th> Address </th>
                <th> Employee Role </th>
                <th> Office Location </th>
                <th>Department</th>
                <th> Designation</th>
                <th>Employee Code</th>
                <th>Basic Salary</th>
                <th>State</th>
                <th>District</th>
                <th>Taluka</th>
                <th>PHC</th>
                <th>SC</th>
                <th>Medical Officer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.mobile} </td>
                  <td> {i.Email} </td>
                  <td> {i.Address} </td>
                  <td> {i.role} </td>
                  <td> {i.location} </td>
                  <td> {i.Department} </td>
                  <td> {i.Designation} </td>
                  <td> {i.EmployeeCode} </td>
                  <td> {i.Salary} </td>
                  <td> {i.State} </td>
                  <td> {i.District} </td>
                  <td> {i.Taluka} </td>
                  <td> {i.PHC} </td>
                  <td> {i.SC} </td>
                  <td> {i.Medical} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        className="fa-solid fa-eye"
                        style={{ color: "#099ffe", cursor: "pointer" }}
                        onClick={() => {
                          setView(true);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#267cb5", cursor: "pointer" }}
                        onClick={() => {
                          setModalShow(true);
                          setEdit(true);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(Customers);