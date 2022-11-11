import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap' 

const login = () => {
  return (
    <div class="mt-5 t-5">
      <h1 className='nav_brand text-center' >Shalom</h1>
      <Container className="mt-3 pt-3 ">
        <section >
        <Row className="justify-content-md-center">
          <Col md={8} lg={6} className="border p-5">
        <Form>
            <div className="text-center">
            <h2 className='mb-4 fw-bolder'>Welcome back</h2>
            <p >Please enter your account details</p>
            </div>
          
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" className="p-2"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-4 pb-2">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" className="p-2"></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Submit</Button>
        </Form>          
          </Col>

        </Row>
        </section>
      </Container>
    </div>
  )
}

export default login