import React from "react";
import { Logo } from "./images";
import { Container, Row, Col } from "react-bootstrap";
function Header() {
  return (
    <>
      <header>
        <Row className="gx-0">
          <Col>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Col>
          <Col>
            <div className="wallet-btn">
              <button className="btn btn-primary"> wallet button</button>
            </div>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default Header;
