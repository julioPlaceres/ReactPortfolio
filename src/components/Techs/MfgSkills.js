import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImSigma } from "react-icons/im";
import { GiHighFive } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";
import { AiOutlineAudit, AiOutlineAreaChart } from "react-icons/ai";
import { SiAdobeaudition } from "react-icons/si";
import { GoCircuitBoard } from "react-icons/go"
import { GiCircuitry } from "react-icons/gi";
import { FcInspection, FcProcess } from "react-icons/fc";
import { TbDimensions } from "react-icons/tb";
import "./MfgSkills.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Lean Six Sigma</h6> <ImSigma /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>5S </h6> <GiHighFive /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Finish Goods Inspection</h6> <AiOutlineAudit /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>SPC</h6> <AiOutlineAreaChart /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Line Audits</h6> <SiAdobeaudition /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>RohS, Reach, Prop65, 3TG</h6> <FcStatistics/> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>AOI Inspection</h6> <GoCircuitBoard/> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>SMT Inspection</h6> <GiCircuitry/> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Incoming Inspection</h6> <FcInspection /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Process Improvement</h6> <FcProcess /> </Col>
        <Col xs={4} md={2} className="mfg-icons"> <h6>Metrologist</h6> <TbDimensions /> </Col>
    </Row>
  );
}

export default Techstack;