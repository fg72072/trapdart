import React from "react";
import { Logo, metamask } from "./images";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";
import {  useEffect} from 'react';
function Header(props) {

  const {
    active,
    activate,
    account
} = useWeb3React();

  return (
    <>
      <header>
        <Navbar className="mobile-header d-none" expand="lg">
          <Navbar.Brand>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-start">
              <li>
                <Link to={"/community"}>Community Art</Link>
              </li>
              <li>
                <Link to={"/voting"}>Voting</Link>
              </li>
              <li>
                <div className="wallet-btn">
                {
                !active ?
                  <button className="btn primary-btn flex-btn"  onClick={()=>{
                                        
                                        connectWallet(activate, props.setErrorMessage);
                                    }}> <span>Connect wallet</span><img src={metamask}/></button>
                : <button className="btn primary-btn flex-btn" > <span>Connected</span> <img src={metamask}/></button>
                                  }
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row className="gx-0 pc-header">
          <Col lg={2} md={2} sm={2}>
            <div className="logo ">
              <Link to="/">
                <img src={Logo} alt="Logo" className="ml-3" />
              </Link>
            </div>
          </Col>
          <Col lg={10} md={10} sm={10}>
            <nav>
              <ul className="d-flex align-items-center  pl-3">
                <li>
                  <Link to={"/community"}>Community Art</Link>
                </li>
                <li>
                  <Link to={"/voting"}>Voting</Link>
                </li>
                <li>
                  <div className="wallet-btn">
                  { 
                !active || account==undefined?
                  <button className="btn primary-btn flex-btn"  onClick={()=>{
                                        
                                        connectWallet(activate, props.setErrorMessage);
                                    }}> <span>Connect wallet</span><img src={metamask}/></button>
                : <button className="btn primary-btn flex-btn" > <span>Connected</span> <img src={metamask}/></button>
                                  }
                  </div>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </header>
    </>
  );
}

export default Header;
