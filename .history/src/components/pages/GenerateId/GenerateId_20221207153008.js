/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Modal, Form, Container } from "react-bootstrap";

const users = [
  {
    image : 'https://st.depositphotos.com/2101611/4338/v/950/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg',
    name : 'Akhilesh' , 
    
  }
];

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
          Add Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label> Image </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label> Service Name </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Price </Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <br />
            <Button variant="outline-dark">Submit</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

const GenerateId = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Hero's
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Hero's
          </Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Profile Image</th>
            <th> Name </th>
            <th> Phone Number </th>
            <th> Email </th>
            <th> Date of Birth </th>
            <th>City </th>
            <th>Website </th>
            <th> Gender </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td>
                <img
                  src="https://www.learnaboutlogistics.com/wp-content/uploads/2016/07/photodune-6221194-customer-service-team-s-e1468394369939-742x353.jpg"
                  className="fast-food"
                  alt=""
                />
              </td>
              <td> {i.name} </td>
              <td> {i.price} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Service Deleted SuccessFully")
                    }
                  />
                  <AiFillEdit
                    color="blue"
                    cursor="pointer"
                    onClick={() => setModalShow(true)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default HOC(GenerateId);
