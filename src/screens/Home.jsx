import React from "react";
import { Header, Footer, MailingList } from "../components/index";
import { Container, Row, Col } from "react-bootstrap";
import { BannerLogo } from "../components/images";

function Home() {
  return (
    <div>
      <Header />
      {/* ========================Home-Banner===================  */}
      <section id="banner">
        <div className="custom-container">
          <div className="sec-padding">
            <Row>
              <Col lg={12}>
                <div className="main mt-5">
                  <div className="img d-flex justify-content-center">
                    <img src={BannerLogo} alt="Banner-img.png" />
                  </div>
                  <div className="content text-center">
                    <h3 className="my-4">The People’s Digital Marketplace</h3>
                    <div className="buttons">
                      <button className="btn primary-btn my-3">
                        Read Whitepaper
                      </button>
                      <button className="btn secondry-btn mb-5">
                        Read Whitepaper
                      </button>
                    </div>
                    <div className="long-bar">
                      <div className="grey my-1">
                        <button className="btn primary-btn  w-100">
                          Round 1 of ICO starts October 1st 2022. Connect wallet
                          and click to check eligibility
                        </button>
                      </div>
                      <div className=" black my-2 ">
                        <button className="btn secondry-btn w-100">
                          Round 1 of ICO starts October 1st 2022. Connect wallet
                          and click to check eligibility.
                        </button>
                      </div>
                      <div className="my-2">
                        <button className="primary-btn">
                          You are whitelisted!
                        </button>
                      </div>
                      <div className="black my-2">
                        <button className="btn secondry-btn">
                          {" "}
                          Not eligible - check Twitter or Telgram to get
                          whitelisted
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* ============================Home-Boxes===================== */}
      <section id="boxes">
        <div className="custom-container">
          <div className="sec-padding">
            <Row className="gy-5">
              <Col lg={12}>
                <div className="main mt-5 blur-div">
                  <div className="box">
                    <p>
                      Round 1 of ICO ends 31st October 2022 or when sold out
                    </p>
                    <p>1000 TRAP = 0.02407 ETH</p>
                    <p>Max buy per wallet = 10 ETH</p>
                    <p>Round 1 tokens remaining: 8000000/8888888</p>
                    <div className="bar-1 w-100  h-3 my-2"></div>
                    <div className="form my-3">
                      <form>
                        <div className="inputs">
                          <label
                            name="trap_tokens"
                            htmlFor="trap_tokens"
                            className="mx-lg-3"
                          >
                            TRAP Tokens :
                            <input
                              type="text"
                              id="trap_tokens"
                              className="trap-token"
                            />
                          </label>
                          <label
                            name="cost_eths"
                            htmlFor="cost_eths"
                            className="ml-2 "
                          >
                            Cost in ETH :
                            <input type="text" id="cost_eths" />
                          </label>
                        </div>
                        <div className="button my-3">
                          <button type="submit" className="btn primary-btn">
                            Buy TRAP Tokens
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="main">
                  <div className="box">
                    <p>
                      Round 1 of ICO ends 31st October 2022 or when sold out
                    </p>
                    <p>1000 TRAP = 0.02407 ETH</p>
                    <p>Max buy per wallet = 10 ETH</p>
                    <p>Round 1 tokens remaining: 8000000/8888888</p>
                    <div className="bar w-100  h-3 my-2"></div>
                    <div className="button my-3">
                      <button className="btn secondry-btn black ">
                        {" "}
                        Whitelist only - Check Twitter or Telgram to get
                        whitelisted
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="main">
                  <div className="box">
                    <p>
                      Round 1 of ICO ends 31st October 2022 or when sold out
                    </p>
                    <p>1000 TRAP = 0.02407 ETH</p>
                    <p>Max buy per wallet = 10 ETH</p>
                    <p>Round 1 tokens remaining: 8000000/8888888</p>
                    <div className="bar w-100  h-3 my-2"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* ==============================Mailing-list====================== */}
      <section id="mailing-list">
        <div className="sec-padding">
          <div className="custom-container-big">
            <Row>
              <Col>
                <div className="main-mailing-list">
                  <div className="send-portfolio">
                    <div className="btn secondry-btn w-100">
                      Interested artists please send your portfolio and social
                      media accounts to
                      <a href="mailto:artists@trapdart.com">
                        {" "}
                        artists@trapdArt.com
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <MailingList />
          <MailingList />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
