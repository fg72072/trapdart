import { useState } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommunityModal from "../components/CommunityModal";

function Community() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Container fluid className="main-height">
            <section className="page-margin-top ">
                <div className="how-it-work">
                    <h5 className="section-title">Community</h5>
                    <button className="custom-btn secondary-btn" onClick={handleShow}>Add New</button>
                </div>
                <Row className="mt-4">
                    <Col lg={12}>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>trapdArt Community Created Art #1 - Stroke 3</td>
                                    <td>Voting Open until 13:00 UTC 8th Jan 2023</td>
                                    <td>
                                        <Link to="/edit-community/1" className="custom-btn secondary-btn text-dark">View</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </section>
            <CommunityModal show={show} handleClose={handleClose}/>
        </Container>
    </>
}
export default Community;