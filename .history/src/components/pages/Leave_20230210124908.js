/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table , Modal , Container , Form , Button } from "react-bootstrap";
import axios from "axios";
import { Auth } from "./Auth";
import {toast} from 'react-toastify'

const Leave = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/leaves",
        Auth
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  function MyVerticallyCenteredModal(props) {
   
    const AddRole = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/roles",
      
        );
        toast.success(data?.msg)
        fetchData()
        props.onHide()
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
          <Modal.Title id="contained-modal-title-vcenter">Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={AddRole}>
              <Form.Group className="mb-3">
                <Form.Label> Role </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Button
                variant="outline-success"
                type="submit"
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
            All Leave's
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        <div style={{ width: "100%", overflowX: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>{i.userId?.name} </td>
                  <td>{i.userId?.email} </td>
                  <td>{i.userId?.phone} </td>
                  <td>{i.startDay} </td>
                  <td>{i.endDay} </td>
                  <td>{i.reason} </td>
                  <td>{i.status} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};
export default HOC(Leave);
