import React from "react"
import { Col, Container, Image } from "react-bootstrap"
import Smartphone from "../../../src/smartphonemockup500.png"

const LandingMainPicCol = () => {
  return (
    <Col>
      <Container className="text-center">
        <Image src={Smartphone}></Image>
      </Container>
    </Col>
  )
}

export default LandingMainPicCol
