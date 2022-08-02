import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Header, Footer, MailingList } from "../components/index";
import {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  Shape10,
} from "../components/images";

function Voting() {
  return (
    <div>
      <Header />
      <section id="community">
        <div className="sec-padding">
          <div className="custom-container">
            <Row className="gy-5">
              <Col lg={12}>
                <div className="box box-1">
                  <p>
                    All participants of the ICO are invited to participate in
                    trapdArt’s rst of a collection of community created art.
                  </p>
                  <p className="mt-3">
                    ICO participants will be able to mint the nished piece.
                  </p>
                </div>
              </Col>
              <Col lg={12}>
                <div className="box">
                  <p>
                    trapdArt Community Created Art #1 <br /> Minting available
                    to all ICO participants
                  </p>
                  <div className="inner-box first-box winner d-flex justify-content-center align-items-end">
                    <div className="inner-box-img mb-5">
                      <img src={Shape1} alt="image.png" />
                    </div>
                  </div>
                  <button className="btn primary-btn mb-5">Mint</button>
                </div>
              </Col>
            </Row>
          </div>
          <Container>
            <Row className="my-5 gy-5">
              <Col lg={12}>
                <div className="box">
                  <p>
                    trapdArt Community Created Art #1 - Stroke 3 <br /> Voting
                    Open until 13:00 UTC 8th Jan 2023
                  </p>
                  <Row>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape2} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3">Vote</button>
                      <p className="mb-3">Votes: 6</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape3} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3"> Vote</button>
                      <p className="mb-3">Votes: 12</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box d-flex justify-content-center align-items-center w-80">
                        <div className="inner-box-img ">
                          <img src={Shape4} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3"> Vote</button>
                      <p className="mb-3">Votes: 34</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12}>
                <div className="box">
                  <p>
                    trapdArt Community Created Art #1 - Stroke 2<br /> Voting
                    Closed
                  </p>
                  <Row>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape5} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3 invisible ">
                        Vote
                      </button>
                      <p className="mb-3">Votes: 6</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape6} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3 invisible">
                        {" "}
                        Vote
                      </button>
                      <p className="mb-3">Votes: 12</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box winner d-flex justify-content-center align-items-center w-80">
                        <div className="inner-box-img ">
                          <img src={Shape7} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn secondry-btn mb-3 w-50">
                        {" "}
                        Winner!
                      </button>
                      <p className="mb-3">Votes: 82</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12}>
                <div className="box">
                  <p>
                    trapdArt Community Created Art #1 - Stroke 1<br /> Voting
                    Closed
                  </p>
                  <Row>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape8} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3 invisible ">
                        Vote
                      </button>
                      <p className="mb-3">Votes: 6</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box winner d-flex justify-content-center align-items-center w-80">
                        <div className="inner-box-img ">
                          <img src={Shape9} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn secondry-btn mb-3 w-50">
                        {" "}
                        Winner!
                      </button>
                      <p className="mb-3">Votes: 82</p>
                    </Col>
                    <Col lg={4}>
                      <div className="inner-box w-80 d-flex justify-content-center align-items-center">
                        <div className="inner-box-img ">
                          <img src={Shape10} alt="image.png" className="w-25" />
                        </div>
                      </div>
                      <button className="btn primary-btn mb-3 invisible">
                        {" "}
                        Vote
                      </button>
                      <p className="mb-3">Votes: 12</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
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
