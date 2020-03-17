import React, { useContext } from "react"
import { Col } from "react-bootstrap"
import LandingButton from "./LandingButton"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"

const LandingMainTextCol = () => {
  const { isMD, isLG } = useContext(WindowSizeContext)
  return (
    <Col className="d-flex align-items-center">
      <div>
        <div className={isMD ? "mb-5" : "mx-4 mb-5 text-center"}>
          {isMD && (
            <h1 className="d-flex text-white font-weight-bolder display-4">
              Welcome to DeckLog
            </h1>
          )}
          {!isMD && (
            <h1 className="text-white font-weight-bolder text-center mb-4">
              Welcome to DeckLog
            </h1>
          )}
          <h5 className=" d-flex  text-white">
            The simplest way to track and organize your MTG performance
          </h5>
        </div>

        <div
          className={
            isLG
              ? "d-flex align-items-center mx-auto"
              : "d-flex flex-column  mx-auto"
          }
        >
          <LandingButton type="signup" text="Get started now" />
          <LandingButton type="index" text="Explore our contents" />
        </div>
      </div>
    </Col>
  )
}

export default LandingMainTextCol
