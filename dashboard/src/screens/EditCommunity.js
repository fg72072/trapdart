import { useState } from "react";
import { Col, Container, Row, Form, Table } from "react-bootstrap";
import Logo from '../assets/images/logo.png'

function EditCommunity() {
    const [title , setTitle] = useState('trapdArt Community Created Art #1 - Stroke 3')
    const [description , setDescription] = useState('Voting Open until 13:00 UTC 8th Jan 2023')
    return <>
        <Container fluid className="main-height">
            <section className="page-margin-top ">
                <Row>
                    <Col lg={6}>
                        <Form className="community-form">
                            <h5 className="section-title">Edit Community</h5>
                            <Form.Group className="mb-3 mt-3" controlId="tilte">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="token">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={4} type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mt-4" >
                                <button className='custom-btn secondary-btn' >Update</button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <Form className="community-form">
                          <h5 className="section-title">Add Round</h5>
                            <Form.Group className="mb-3 mt-3" controlId="whitelist">
                                <Form.Label >Upload Image</Form.Label>
                                <Form.Control type="file"  />
                                <Form.Text className="text-muted">
                                Note: upload picture.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mt-4" >
                                <button className='custom-btn secondary-btn' >Submit</button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <h5 className="section-title">List Rounds</h5>
                    <Col lg={12}>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Votes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><img src={Logo} width="100"/></td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </section>
        </Container>
    </>
}
export default EditCommunity;