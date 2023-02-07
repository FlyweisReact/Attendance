/** @format */

import React, { useState, useCallback, useEffect } from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  // Admin Token
  const AdminToken = localStorage.getItem("token");

  // FetchDepartment
  const FetchDepartment = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/departments",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [AdminToken]);

  useEffect(() => {
    FetchDepartment();
  }, [FetchDepartment]);

   // Delete Role
   const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/departments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      toast.success(`${data?.msg}`);
      FetchDepartment();
    } catch (err) {
      console.log(err);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [department, setDepartment] = useState("");

    // Add Role
    const AddDepartment = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/departments",
          {
            department,
          }
        );
        toast.success(data?.msg);
        FetchDepartment();
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
            Add Department
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={AddDepartment}>
              <Form.Group className="mb-3">
                <Form.Label> Deparment </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setDepartment(e.target.value)}
                />
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

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
            All Department's
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
            onClick={() => setModalShow(true)}
          >
            Add New
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((i, index) => (
              <tr key={index}>
                <td> {i.department} </td>
                <td>
                  <AiFillDelete
                    color="red"
                    cursor={"pointer"}
                    onClick={() => deleteHandler(i._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default HOC(GenerateId);
