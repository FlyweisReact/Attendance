/** @format */

import React, { useState, useCallback , useEffect } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";


const Customers = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [ employeeRole , setEmployeeRole ] = useState([])
  const [ EofficeLocation , setOfficeLocation ] = useState([])
  const [ EfetchDepartment , setFetchDepartment ] = useState([])
  const [ EfetchStates , setFetchStates ] = useState([])
  const [ EfetchDistrict , setFetchDistrict ] = useState([])
  const [ EfetchTaluka , setFetchTaluka ] = useState([])
  const [ EfetchPHC , setFetchPHC ] = useState([])
  const [ EfetchSC , setFetchSC ] = useState([])
  const [ EfetchMedicalOffice , setFetchMedicalOffice ] = useState([])

  // Admin Token
  const AdminToken = localStorage.getItem("token");

  // Fetch User Detail
  const fetchDataHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/emp/all"
      );
    setData(data.data)  
    } catch (err) {
      console.log(err);
    }
  }, []);

  const EmployeeRoleFetch = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/roles",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setEmployeeRole(data);
    } catch (err) {
      console.log(err);
    }
  }

  const officeLocationFetch = async () => {
    try{
      const { data } = await axios.get("https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/officeLocations" , {
        headers : {
          Authorization : `Bearer ${AdminToken}`
        }
      })
      setOfficeLocation(data)
    }catch(err){
      console.log(err)
    }
  }

  const fetchDepartment = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/departments",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchDepartment(data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchStates = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/states",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchStates(data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchDistrict = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/districts",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchDistrict(data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchTaluka = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/talukas",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchTaluka(data);
    } catch (err) {
      console.log(err);
    }
  }
  const fetchPHC = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/phcs",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchPHC(data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchSC = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/scs",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchSC(data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchMedicalOffice = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/officers",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setFetchMedicalOffice(data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    fetchDataHandler()
    EmployeeRoleFetch()
    EmployeeRoleFetch()
    EmployeeRoleFetch()
    EmployeeRoleFetch()
    EmployeeRoleFetch()
    EmployeeRoleFetch()
  },[fetchDataHandler])

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
            {edit ? (
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Office Location: (Required)</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select Location--</option>
                    <option>Delhi</option>
                    <option>Hyderabad</option>
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
            ) : (
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
            )}
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

      const deleteHandler = async (id ) => {
        try{
          const data = await axios.delete(`https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/emp/delete/${id}`)
          fetchDataHandler()
          toast.success('Employee Deleted')
        }catch(err){
          console.log(err)
        }
      }

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
        <div
          style={{
            width: "87%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
            All Employee's (Total : {data.length})
            <hr style={{ width: "70%" }} />
          </span>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="file" id="excel" style={{ display: "none" }} />
            <Button
              style={{
                backgroundColor: "#4099ff",
                color: "#fff",
                borderRadius: "0",
                border: "1px solid #4099ff",
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
                backgroundColor: "#aa5de1",
                color: "#fff",
                borderRadius: "0",
                border: "1px solid #aa5de1",
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
        <div
          style={{
            overflow: "auto",
            width: "80%",
            maxWidth: "100%",
            marginLeft: "5%",
            marginTop: "2%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Mobile</th>
                <th> Email</th>
                <th>Basic Salary</th>
                <th>Department</th>
                <th> Designation</th>
                <th>Employee Code</th>
                <th>State</th>
                <th>District</th>
                <th>Taluka</th>
                <th>PHC</th>
                <th>SC</th>
                <th>Medical Officer</th>
                <th>Office Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.EmployeeName} </td>
                  <td> {i.Mobile} </td>
                  <td> {i.Email} </td>
                  <td> {i.BasicSalary} </td>
                  <td> {i.Department} </td>
                  <td> {i.EmployeeCode} </td>
                  <td> {i.Designation} </td>
                  <td> {i.State} </td>
                  <td> {i.District} </td>
                  <td> {i.Taluka} </td>
                  <td> {i.PHC} </td>
                  <td> {i.SC} </td>
                  <td> {i.MedicalOfficer} </td>
                  <td> {i.OfficeLocation} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
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
