/** @format */

import React, { useState, useCallback, useEffect } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Auth } from "../Auth";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate()
  const [modalShow, setModalShow] = React.useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [employeeRole, setEmployeeRole] = useState([]);
  const [EofficeLocation, setOfficeLocation] = useState([]);
  const [EfetchDepartment, setFetchDepartment] = useState([]);
  const [EfetchStates, setFetchStates] = useState([]);
  const [EfetchDistrict, setFetchDistrict] = useState([]);
  const [EfetchTaluka, setFetchTaluka] = useState([]);
  const [EfetchPHC, setFetchPHC] = useState([]);
  const [EfetchSC, setFetchSC] = useState([]);
  const [EfetchMedicalOffice, setFetchMedicalOffice] = useState([]);
  const [ id, setId] = useState("")

  // Fetch User Detail
  const fetchDataHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/emp/all"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const EmployeeRoleFetch = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/roles",
        Auth
      );
      setEmployeeRole(data);
    } catch (err) {
      console.log(err);
    }
  };

  const officeLocationFetch = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/officeLocations",
        Auth
      );
      setOfficeLocation(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDepartment = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/departments",
        Auth
      );
      setFetchDepartment(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStates = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/states",
        Auth
      );
      setFetchStates(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDistrict = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/districts",
        Auth
      );
      setFetchDistrict(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTaluka = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/talukas",
        Auth
      );
      setFetchTaluka(data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchPHC = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/phcs",
        Auth
      );
      setFetchPHC(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSC = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/scs",
        Auth
      );
      setFetchSC(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMedicalOffice = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/officers",
        Auth
      );
      setFetchMedicalOffice(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataHandler();

    if(modalShow === true) {
      EmployeeRoleFetch();
      officeLocationFetch();
      fetchDepartment();
      fetchStates();
      fetchDistrict();
      fetchTaluka();
      fetchPHC();
      fetchSC();
      fetchMedicalOffice();
    }
  }, [fetchDataHandler , modalShow]);

  // Add Customer
  function MyVerticallyCenteredModal(props) {
    const [employeeName, setEmployeeName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [EmployeeRole, setEmployeeRole] = useState("");
    const [OfficeLocation, setOfficeLocation] = useState("");
    const [Department, setDepartment] = useState("");
    const [Designation, setDesignation] = useState("");
    const [EmployeeCode, setEmployeeCode] = useState("");
    const [BasicSalary, setbasicSalary] = useState("");
    const [State, setState] = useState("");
    const [District, setDistrict] = useState("");
    const [Taluka, setTaluka] = useState("");
    const [PHC, setPHC] = useState("");
    const [SC, setSC] = useState("");
    const [MedicalOfficer, setMedicalOfficer] = useState("");
    const [ password , setPassword ] = useState("")

    const AddEmployee = async (e) => {
      e.preventDefault();
      const formD = {
        employeeName,
        Mobile,
        Email,
        Address,
        EmployeeCode,
        EmployeeRole,
        OfficeLocation,
        Department,
        Designation,
        BasicSalary,
        State,
        District,
        Taluka,
        PHC,
        SC,
        MedicalOfficer,
        password
      };
      try {
        const { data } = await axios.post(
          "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/emp/add",
          formD
        );
        console.log(data);
        toast.success("Employee Added");
        fetchDataHandler();
        props.onHide();
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={AddEmployee}>
              <Form.Group className="mb-3">
                <Form.Label>Employee Name: (Required)</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => setEmployeeName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile: (Required)</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email: (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address: (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Employee Role: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setEmployeeRole(e.target.value)}
                >
                  <option>--Select Role--</option>
                  {employeeRole?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.role}>
                        {i.role}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Office Location: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setOfficeLocation(e.target.value)}
                >
                  <option>--Select Location--</option>
                  {EofficeLocation?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.officeLocation}>
                        {i.officeLocation}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option>--Select Department--</option>
                  {EfetchDepartment?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.department}>
                        {i.department}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Designation: (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Employee Code: (Required)</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => setEmployeeCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Basic Salary: (Required)</Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => setbasicSalary(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>State: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setState(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchStates?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.state}>
                        {i.state}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>District: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchDistrict?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.district}>
                        {i.district}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Taluka: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setTaluka(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchTaluka?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.taluka}>
                        {i.taluka}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>PHC: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setPHC(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchPHC?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.PHC}>
                        {i.PHC}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>SC: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setSC(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchSC?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.SC}>
                        {i.SC}{" "}
                      </option>
                    </>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Medical Officer: (Required)</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  required
                  onChange={(e) => setMedicalOfficer(e.target.value)}
                >
                  <option>--Select--</option>
                  {EfetchMedicalOffice?.data?.map((i, index) => (
                    <>
                      <option key={index} value={i.medicalOfficer}>
                        {i.medicalOfficer}{" "}
                      </option>
                    </>
                  ))}
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

  function uploadExcel() {
    const target = document.getElementById("excel");
    target.click();
  }

  // SearchBar
  const filterData = !query
    ? data?.data
    : data?.data?.filter(
        (i) =>
          i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.Email?.toLowerCase().includes(query?.toLowerCase())
      );

  const deleteHandler = async (id) => {
    try {
      const data = await axios.delete(
        `https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/emp/delete/${id}`
      );
      console.log(data)
      fetchDataHandler();
      toast.success("Employee Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  const changeStatus = async() => {
    try{
      const { data } = await axios.put(`https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users/status/${id}`)
      console.log(data)
      alert('Statsu Chaged')
      fetchDataHandler()
    }catch(e){
      console.log(e)
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
            All Employee's (Total : {data?.data?.length})
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
                setModalShow(true)
              }}
            >
              Add Employee
            </Button>
          </div>
        </div>

        <div style={{marginBottom : '2%'}}>
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
            margin : 'auto ' ,
            width: "900px" ,
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>S</th>
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
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.phone} </td>
                  <td> {i.email} </td>
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
                  <td> {i.active}     <i
                        className="fa-solid fa-edit"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setId(i._id)
                          changeStatus()} }
                        ></i>  </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                      <i
                        className="fa-solid fa-eye"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => navigate(`/viewCustomer/${i._id}`)}
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
