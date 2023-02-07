/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {
  Button,
  Modal,
  Form,
  Container,
  Table,
  FloatingLabel,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const data = [
  {
    ShiftName: "Lorem",
    ShiftBeginTime: "09:00 Am",
    ShiftEndTime: "05:00 Pm",
    ShiftType: "Lorem",
    EarlyEntryAllowedMin: "30 Min.",
    LateEntryAloowedMin: "30 Min.",
    EarlyExitMin: "30 Min",
    LateExitMin: "30 Min",
    fullHour: 8,
    weeklyOff1: "Sunday",
    weeklyOff2: "Monday",
    break1allowed: "yes",
    break2allowed: "Yes",
    Break1Time: "02:00 Am",
    Break1EndTime: "02:30 PM",
    Break2Time: "03:00 Am",
    Break2EndTime: "03:30 Pm",
  },
  {
    ShiftName: "Lorem",
    ShiftBeginTime: "09:00 Am",
    ShiftEndTime: "05:00 Pm",
    ShiftType: "Lorem",
    EarlyEntryAllowedMin: "30 Min.",
    LateEntryAloowedMin: "30 Min.",
    EarlyExitMin: "30 Min",
    LateExitMin: "30 Min",
    fullHour: 8,
    weeklyOff1: "Sunday",
    weeklyOff2: "Monday",
    break1allowed: "yes",
    break2allowed: "Yes",
    Break1Time: "02:00 Am",
    Break1EndTime: "02:30 PM",
    Break2Time: "03:00 Am",
    Break2EndTime: "03:30 Pm",
  },
];

const Shift = () => {
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
            Add Shift
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
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Shift End Time:</Form.Label>
                <Form.Control type="text" />
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
                  <option>Monday</option>
                  <option>Monday</option>
                  <option>Monday</option>
                  <option>Monday</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Work Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Work Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Work Description</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Description"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
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
            All Shift's
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
                <th>Shift Name</th>
                <th>Shift Begin Time</th>
                <th>Shift End Time</th>
                <th>Shift Type</th>
                <th>Early Entry Allowed Min.</th>
                <th>Late Entry Allowed Min.</th>
                <th>LEarly Exit Allowed Min.</th>
                <th>Late Exit Allowed Min.</th>
                <th>Min. Full Day Hours</th>
                <th>Weekly Off Day 1</th>
                <th>Weekly Off Day 2</th>
                <th>Break 1 Allowed</th>
                <th>Break 2 Allowed</th>
                <th>Break 1 Begin Time</th>
                <th>Break 1 End Time</th>
                <th>Break 2 Begin Time</th>
                <th>Break 2 End Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td> {i.ShiftName} </td>
                  <td> {i.ShiftBeginTime} </td>
                  <td> {i.ShiftEndTime} </td>
                  <td> {i.ShiftType} </td>
                  <td> {i.EarlyEntryAllowedMin} </td>
                  <td> {i.LateEntryAloowedMin} </td>
                  <td> {i.EarlyExitMin} </td>
                  <td> {i.LateExitMin} </td>
                  <td> {i.fullHour} </td>
                  <td> {i.weeklyOff1} </td>
                  <td> {i.weeklyOff2} </td>
                  <td> {i.break1allowed} </td>
                  <td> {i.break2allowed} </td>
                  <td> {i.Break1Time} </td>
                  <td> {i.Break1EndTime} </td>
                  <td> {i.Break2Time} </td>
                  <td> {i.Break2EndTime} </td>
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

export default HOC(Shift);
