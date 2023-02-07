/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Form } from "react-bootstrap";
import img from "../../SVG/list.svg";
import warning from "../../SVG/yellow-circle-exclamation-mark-icon-warning-sign-vector-13227823 1.png";
import { toast } from "react-toastify";

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
  const [edit, setEdit] = useState(false);
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
                <Form.Control type="text" />
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
                <Form.Select aria-label="Default select example" required>
                  <option>--Select Location--</option>
                  <option>Delhi</option>
                  <option>Hyderabad</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select Department--</option>
                  <option>Health</option>
                  <option>Marketing</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Designation: (Optional)</Form.Label>
                <Form.Control type="text" />
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
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>District: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Taluka: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PHC: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>SC: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Medical Officer: (Required)</Form.Label>
                <Form.Select aria-label="Default select example" required>
                  <option>--Select--</option>
                  <option></option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="outline-success"
                onClick={() => {
                  toast.success("Employee Added");
                  props.onHide();
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

  function uploadExcel() {
    const target = document.getElementById("excel");
    target.click();
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
      />
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
            All Employee's (Total : {data.length})
            <hr style={{ width: "70%" }} />
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="file" id="excel" style={{ display: "none" }} />
            <Button
              style={{
                backgroundColor: "#feabb5",
                color: "#fff",
                borderRadius: "0",
                border: "1px solid #1a364f",
                padding: "10px",
              }}
            >
             Export Excel
            </Button>
            <Button
              style={{
                backgroundColor: "#1f4881",
                color: "#fff",
                borderRadius: "0",
                border: "1px solid #1f4881",
                padding: "10px",
              }}
              onClick={() => uploadExcel()}
            >
              Add Employee using Excel
            </Button>

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
              Add Employee
            </Button>
          </div>
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
                <th>Resign</th>
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
                    <Button
                      style={{
                        backgroundColor: "#3f63fd",
                        color: "#fff",
                        borderRadius: "0",
                        border: "1px solid #3f63fd",
                        padding: "10px",
                      }}
                      onClick={() => toast.success('Resigned Successfully')}
                    >
                      Resign
                    </Button>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
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
                        onClick={() => toast.success("Employee Deleted")}
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
