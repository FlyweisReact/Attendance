/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {
  Button,
  Modal,
  Form,
  Container,
  Table
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const data = [
  {
   Name : "Lorem Ipsum" , 
   Date : "12/02/2023",
   Location : "Delhi" , 
   In : "08:00 Am" , 
   Out : "09:00 Pm"
  },
];


const Attendance = () => {
    const [modalShow, setModalShow] = React.useState(false);

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
              Add Attendance
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Shift Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Shift Begin Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Shift End Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Shift Type:</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select--</option>
                    <option>Day</option>
                    <option>Night</option>
                  </Form.Select>
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Early Entry Allowed Minutes:</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Late Entry Allowed Minutes:</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Early Exit Allowed Minutes:</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Late Exit  Allowed Minutes:</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Min Full Day Hours:</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Weekly Off Day 1:</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select--</option>
                    <option>None</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Weekly Off Day 2:</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select--</option>
                    <option>None</option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </Form.Select>
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 1 Allowed:</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select--</option>
                    <option>No</option>
                    <option>Yes</option>
                  </Form.Select>
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 2 Allowed:</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select--</option>
                    <option>No</option>
                    <option>Yes</option>
                  </Form.Select>
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 1 Begin Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 1 End  Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 2 Begin Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Form.Group className="mb-3">
                  <Form.Label>Break 2 End  Time:</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
  
                <Button
                  variant="outline-success"
                  onClick={() => {
                    toast.success("Added");
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
              All Attendance's
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
  
          <div style={{ width: "100%", overflowX: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>In</th>
                  <th>Out</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i, index) => (
                  <tr key={index}>
                  <td>{i.Name} </td>
                  <td>{i.Date} </td>
                  <td>{i.Location} </td>
                  <td>{i.In} </td>
                  <td>{i.Out} </td>
                    <td>
                      <AiFillDelete
                        color="red"
                        cursor={"pointer"}
                        onClick={() => toast.success(" Deleted ")}
                      />
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

export default HOC(Attendance)