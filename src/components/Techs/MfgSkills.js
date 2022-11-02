import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImSigma } from "react-icons/im";
import { GiHighFive } from "react-icons/gi";
import { HiDesktopComputer } from "react-icons/hi";
import { AiOutlineAudit, AiOutlineAreaChart } from "react-icons/ai";
import { SiAdobeaudition } from "react-icons/si";
import { GoCircuitBoard } from "react-icons/go"
import { GiCircuitry } from "react-icons/gi";
import { FcStatistics, FcInspection, FcProcess } from "react-icons/fc";
import { TbDimensions } from "react-icons/tb";
import "./MfgSkills.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Lean Six Sigma</p> <ImSigma className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>5S </p> <GiHighFive className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Finish Goods Inspection</p> <AiOutlineAudit className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>SPC</p> <AiOutlineAreaChart className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Line Audits</p> <SiAdobeaudition className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>RohS, Reach, Prop65, 3TG</p> <FcStatistics className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>AOI Inspection</p> <GoCircuitBoard className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>SMT Inspection</p> <GiCircuitry className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Incoming Inspection</p> <FcInspection className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Process Improvement</p> <FcProcess className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>Metrologist</p> <TbDimensions className="mfg-icons"/> </Col>
        <Col xs={3} sm={3} className="mfg-icons-col"> <p>ERPs</p> <HiDesktopComputer className="mfg-icons"/> </Col>
    </Row>
  );
}

export default Techstack;