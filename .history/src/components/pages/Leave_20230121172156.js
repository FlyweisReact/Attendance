/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {
  Table
} from "react-bootstrap";

const data = [
  {
   Name : "Lorem Ipsum" , 
   Date : "12/02/2023",
   Location : "Delhi" , 
   In : "08:00 Am" , 
   Out : "09:00 Pm"
  },
  {
   Name : "Lorem Ipsum" , 
   Date : "12/02/2023",
   Location : "Delhi" , 
   In : "08:00 Am" , 
   Out : "09:00 Pm"
  },
];

const Leave = () => {
 
    return (
        <>
      
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
                    <th>Date</th>
                    <th>Location</th>
                    <th>In</th>
                    <th>Out</th>
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
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>
        </>
      );
    };
export default Leave