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


const Attendance = () => {
  return (
    <div>Attendance</div>
  )
}

export default Attendance