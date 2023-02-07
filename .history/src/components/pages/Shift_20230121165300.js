/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Button, Modal, Form, Container, Table  ,FloatingLabel} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const data = [
  {
    ShiftName: "Lorem",
    ShiftBeginTime  : "09:00 Am" , 
    ShiftEndTime : "05:00 Pm" , 
    ShiftType : "Lorem" , 
    EarlyEntryAllowedMin : '30 Min.' , 
    LateEntryAloowedMin : "30 Min." , 
    EarlyExitMin : '30 Min' , 
    LateExitMin : '30 Min' , 
    fullHour : 8 , 
    weeklyOff1 : "Sunday" , 
    weeklyOff2 : "Monday" , 
    break1allowed : "yes" , 
    break2allowed : 'No'

  }
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
              Add Work Schedule
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Office Location</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select Office Location--</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Employee</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>--Select Office Location--</option>
                    <option>Rowan</option>
                    <option>Eliana</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                <Form.Label>Work Date</Form.Label>
                <Form.Control type='date'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                <Form.Label>Work Title</Form.Label>
                <Form.Control type='text'/>
                </Form.Group>
                <Form.Group className='mb-3'>
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
              All Work Schedule's
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

                <div style={{width : '100%' , overflowX : 'auto'}}>
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
                  <td> {i.office} </td>
                  <td> {i.Emplyee} </td>
                  <td> {i.WorkDate} </td>
                  <td> {i.WorkTitle} </td>
                  <td> {i.WorkDetail} </td>
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
  
export default HOC(Shift)