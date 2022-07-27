import React from "react";
import { Header, Footer } from "../components/index";
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
                <div className="main">
                  <div className="img d-flex justify-content-center">
                    <img src={BannerLogo} alt="Banner-img.png" />
                  </div>
                  <div className="content text-center">
                    <h3 className="my-4">The People’s Digital Marketplace</h3>
                    <div className="buttons">
                      <button className="btn primary-btn my-3">
                        Read Whitepaper
                      </button>
                      <button className="btn secondry-btn my-3">
                        Read Whitepaper
                      </button>
                    </div>
                    <div className="long-bar">
                      <div className="primary-btn grey my-1">
                        Round 1 of ICO starts October 1st 2022. Connect wallet
                        and click to check eligibility
                      </div>
                      <div className="secondry-btn black my-2">
                        Round 1 of ICO starts October 1st 2022. Connect wallet
                        and click to check eligibility.
                      </div>
                      <div className="primary-btn my-2">
                        You are whitelisted!
                      </div>
                      <div className="secondry-btn black my-2">
                        Round 1 of ICO starts October 1st 2022. Connect wallet
                        and click to check eligibility.
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
