import React, { Fragment, useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { palette } from "../helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons"
import { WindowSizeContext } from "../contexts/WindowSizeContext"
import LandingMainTextCol from "./Landing/LandingMainTextCol"
import LandingMainPicCol from "./Landing/LandingMainPicCol"
import LandingFeatureCard from "./Landing/LandingFeatureCard"
import { isMobile } from "react-device-detect"
const { stdGray } = palette

const Landing = () => {
  const { isXS, isMD } = useContext(WindowSizeContext)

  const gradientDivStyle = heightString => {
    return {
      backgroundColor: "rgb(38,99,204)",
      backgroundImage:
        "linear-gradient(270deg, rgba(38,99,204,1) 0%, rgba(24,105,250,1) 21%, rgba(45,148,254,1) 66%)",
      height: heightString
    }
  }

  return (
    <Fragment>
      <div style={gradientDivStyle("100vh")}>
        <Container className=" h-100 d-flex justify-content-center align-items-center">
          <Row>
            <LandingMainTextCol />
            {isMD && <LandingMainPicCol />}
          </Row>
        </Container>
      </div>
      <div style={gradientDivStyle(isXS || isMobile ? "17vh" : "30vh")}></div>
      <div
        className="d-flex align-items-center"
        style={{
          backgroundColor: stdGray,
          height: "25rem",
          textAlign: "center"
        }}
      >
        <Container className="d-flex flex-column">
          <LandingFeatureCard />
        </Container>
      </div>
      <div
        className="d-flex flex-column justify-content-end"
        style={gradientDivStyle(isXS ? "27vh" : "35vh")}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(159, 172, 194, 0.3)",
            height: "6vh",
            textAlign: "center"
          }}
        >
          <p className="text-white m-0">
            Created with <FontAwesomeIcon icon={faMortarPestle} /> in Miyazaki,
            Japan
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Landing
