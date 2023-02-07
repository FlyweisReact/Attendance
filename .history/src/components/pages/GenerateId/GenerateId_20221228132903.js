/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import { AiFillDelete } from "react-icons/ai";
import img from "../../SVG/list.svg";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  // Add Hero
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
            {edit ? "Edit Hero" : "Add Hero"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number </Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group>

              </Form.Group>
              <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <br />
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

  return (
    <>
      {/* Modals--------------------- */}{" "}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />{" "}
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
          width: "84%",
          marginLeft: "10px",
          minHeight: "70vh",
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

        <div
          style={{
            overflowX: "auto",
            width: "95%",
            padding: "10px",
            marginLeft: "2.5%",
          }}
        >
          <tabel id="new">
            <thead>
              <tr>
                <th>Profile Image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Camera / Drone</th>
                <th>Eqiument Specification</th>
                <th>Gadget Photo</th>
                <th>Website/Porfolio</th>
                <th>Prefrence</th>
                <th>expertise</th>
                <th>Driving License</th>
                <th>Driving License Number</th>
                <th>Aadhaar Card</th>
                <th>Tranfer Data Through</th>
                <th>Ready to travel Out</th>
                <th>Willing to travel within a radius 30-50KM</th>
                <th>Approve / DissApprove</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={
                      "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)"
                    }
                    alt=""
                    className="fast-food"
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      cursor: "pointer",
                    }}
                  />
                </td>
                <td>Hero</td>
                <td>Male</td>
                <td>5412369874</td>
                <td>12/02/2204</td>
                <td>Sony</td>
                <td>canon Mark 4, 50mm lens</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://www.sony.co.in/image/866e0cf8ceadb357257bdad65453b5c4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1094190_BB_00_FB/image.jpg?x=400&y=4000"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Sony.In</td>
                <td>PhotoGraphy</td>
                <td>Birthday Party , Portrait Fhasion , Product E-Com</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Dhjas41278</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Online</td>
                <td>Yes</td>
                <td>No</td>{" "}
                <td>
                  <select style={{ border: "1px solid black" }}>
                    <option
                      style={{ backgroundColor: "Green", color: "white" }}
                    >
                      Approve
                    </option>
                    <option style={{ backgroundColor: "red", color: "white" }}>
                      DisApprove
                    </option>
                  </select>
                </td>
                <td>
                  <AiFillDelete
                    color="red"
                    cursor={"pointer"}
                    style={{ width: "20px", height: "20px" }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src={
                      "https://c.ndtvimg.com/2020-09/v262v3i8_raftaar-_625x300_09_September_20.jpg?im=Resize=(1230,900)"
                    }
                    alt=""
                    className="fast-food"
                    style={{
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </td>
                <td>Hero</td>
                <td>Male</td>
                <td>5412369874</td>
                <td>12/02/2204</td>
                <td>Sony</td>
                <td>canon Mark 4, 50mm lens</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://www.sony.co.in/image/866e0cf8ceadb357257bdad65453b5c4?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://www.reliancedigital.in/medias/SONY-W810-Point-and-shoot-Camera-491099230-26?context=bWFzdGVyfGltYWdlc3wxOTc2MnxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDU1Lzk1NzUyNTA5MTk0NTQuanBnfDU1NWIwNTJiMThlY2E0YzNiNTZhOGQwYWM3MWYxZjVjZmI5YzI0MWY1MDNjYTNhMzE5NTlmMmUwZTk2ZTIwNGY"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1094190_BB_00_FB/image.jpg?x=400&y=4000"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Sony.In</td>
                <td>PhotoGraphy</td>
                <td>Birthday Party , Portrait Fhasion , Product E-Com</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Dhjas41278</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <img
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                    alt=""
                    className="fast-food"
                  />
                  <img
                    src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/aadhaar_card11-sixteen_nine.jpg?size=948:533"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>Online</td>
                <td>Yes</td>
                <td>No</td>
                <td>
                  <select style={{ border: "1px solid black" }}>
                    <option
                      style={{ backgroundColor: "Green", color: "white" }}
                    >
                      Approve
                    </option>
                    <option style={{ backgroundColor: "red", color: "white" }}>
                      DisApprove
                    </option>
                  </select>
                </td>
                <td>
                  <AiFillDelete
                    color="red"
                    cursor={"pointer"}
                    style={{ width: "20px", height: "20px" }}
                  />
                </td>
              </tr>
            </tbody>
          </tabel>
        </div>
      </section>
    </>
  );
};
export default HOC(GenerateId);
