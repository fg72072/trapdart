import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Telegram, Twitter } from "./images";

function Footer() {
  return (
    <div>
      <footer>
        <Row className="align-items-center justify-sm-center flex-column-reverse flex-md-row">
          <Col lg={3} md={3} sm={12}>
            <div className="copy-right">
              <span>© trapdigital 2022</span>
            </div>
          </Col>
          <Col lg={9} md={9} sm={12}>
            <div className="wallet-btn  footer-icons">
              <span className="mx-3 ">
                <img src={Telegram} alt="telegram.png" className="mx-2" />
                Telegram
              </span>
              <span>
                <img src={Twitter} alt="telegram.png" className="mx-2" />
                Twitter
              </span>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Footer;
