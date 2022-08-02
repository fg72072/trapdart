import React from "react";
import { Col, Row } from "react-bootstrap";
import { Header, Footer, MailingList } from "../components/index";

function Voting() {
  return (
    <div>
      <Header />
      <section id="voting">
        <div className="custom-container">
          <div className="sec-padding">
            <Row className="gy-5">
              <Col lg={12}>
                <div className="box box-1">
                  <p>
                    TRAP token holders can participate in polls to direct the
                    development and <br /> progression of the trapdArt platform.
                    Polls are discussed amongst the community in the Telegram
                    channel -{" "}
                    <a href="#" className="text-black">
                      {" "}
                      https://t.me/trapdArt{" "}
                    </a>
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="box">
                  <p>
                    Title <br /> Description <br /> Voting closes 31th Decemeber
                    2022
                  </p>
                  <div className="box-inner-btn d-flex flex-wrap justify-content-center ">
                    <button className="btn primary-btn">5%</button>
                    <button className="btn primary-btn">8%</button>
                    <button className="btn primary-btn">12%</button>
                    <button className="btn primary-btn">15%</button>
                  </div>
                  <div className="box-inner-calc ">
                    <div className="d-flex flex-column">
                      <p>5%: 23</p>
                      <p>12%: 12</p>
                    </div>
                    <div className="d-flex flex-column">
                      <p>8%: 34</p>
                      <p>15%: 12</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="box">
                  <p>
                    Title <br /> Description <br /> Voting closes 31th Decemeber
                    2022
                  </p>
                  <div className="box-inner-btn d-flex flex-wrap justify-content-center mt-4 ">
                    <button className="btn primary-btn">Yes</button>
                    <button className="btn primary-btn">No</button>
                  </div>
                  <div className="box-inner-calc my-3 py-1">
                    <div className="d-flex flex-column">
                      <p>Yes: 64</p>
                      <p>No: 88</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="box">
                  <p>
                    Title <br /> Description <br /> Voting closes 12th November
                    2022
                  </p>
                  <div className="box-inner-btn d-flex flex-wrap justify-content-center mt-4 ">
                    <button className="btn primary-btn">Yes</button>
                    <button className="btn primary-btn">No</button>
                  </div>
                  <div className="box-inner-calc my-3 py-1">
                    <div className="d-flex flex-column">
                      <p>Yes: 34</p>
                      <p>No: 12</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="box">
                  <p>
                    Title <br /> Description <br />
                  </p>
                  <div className="box-inner-btn w-60 d-flex flex-wrap justify-content-center mt-4 ">
                    <button className="btn secondry-btn voting-closed">
                      Voting Closed
                    </button>
                  </div>
                  <div className="box-inner-calc my-3 py-1">
                    <div className="d-flex flex-column">
                      <p>Yes: 34</p>
                      <p>No: 12</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <MailingList />
          <MailingList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Voting;
