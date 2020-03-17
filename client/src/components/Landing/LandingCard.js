import React, { useContext } from "react"
import { Card } from "react-bootstrap"
import { palette } from "../../helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"
import { faListAlt } from "@fortawesome/free-solid-svg-icons"
import { faPercentage } from "@fortawesome/free-solid-svg-icons"
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"

const LandingCard = props => {
  const { section } = props
  const { stdBlue } = palette
  const { isMD, isLG } = useContext(WindowSizeContext)

  const iconStyle = isLG
    ? { color: stdBlue, fontSize: "4rem", margin: "0.5rem" }
    : isMD
    ? { color: stdBlue, fontSize: "1.7rem", margin: "0.5rem" }
    : { color: stdBlue, fontSize: "1.5rem", margin: "0.5rem" }

  const listIcon = <FontAwesomeIcon icon={faListAlt} style={iconStyle} />
  const matchupIcon = <FontAwesomeIcon icon={faPercentage} style={iconStyle} />
  const sideGuideIcon = (
    <FontAwesomeIcon icon={faExchangeAlt} style={iconStyle} />
  )

  const renderIcon = str => {
    switch (str) {
      case "matchup":
        return matchupIcon
      case "sideboard":
        return sideGuideIcon
      default:
        return listIcon
    }
  }

  const renderH4 = str => {
    switch (str) {
      case "matchup":
        return isMD ? (
          <h4 className="text-dark my-2 font-weight-bold">Match Logger</h4>
        ) : (
          <h5 className="text-dark my-2 font-weight-bold">Match Logger</h5>
        )
      case "sideboard":
        return isMD ? (
          <h4 className="text-dark my-2 font-weight-bold">Side Guides</h4>
        ) : (
          <h5 className="text-dark my-2 font-weight-bold">Side Guides</h5>
        )
      default:
        return isMD ? (
          <h4 className="text-dark my-2 font-weight-bold">Deck Builder</h4>
        ) : (
          <h5 className="text-dark my-2 font-weight-bold">Deck Builder</h5>
        )
    }
  }

  const renderText = str => {
    switch (str) {
      case "matchup":
        return (
          <p className="text-dark mb-0">
            Pin down your results and keep track of your performance
          </p>
        )
      case "sideboard":
        return (
          <p className="text-dark mb-0">
            Explore individual matchups and find the data you need before the
            next game!
          </p>
        )
      default:
        return (
          <p className="text-dark mb-0">
            No-frills deck editor to keep your lists up to date with the current
            meta
          </p>
        )
    }
  }

  if (isLG) {
    return (
      <Card className="my-5 border-0 mx-2">
        <Card.Header
          style={{ backgroundColor: "#F0F1F2" }}
          className="border-0 mx-2"
        >
          {renderIcon(section)}
          {renderH4(section)}
        </Card.Header>
        <Card.Body
          style={{ borderRadius: "8px", backgroundColor: "#F8F9FA" }}
          className="d-flex flex-column align-items-center border-0 mx-2 pt-4 pb-5 px-3"
        >
          <div
            style={{
              border: "0",
              height: "0.125rem",
              width: "3.875rem",
              backgroundColor: "rgb(249,183,25)",
              backgroundImage:
                "linear-gradient(90deg, rgba(249,183,25,1) 0%, rgba(252,153,65,1) 11%, rgba(244,2,2,1) 90%)",
              marginBottom: "1.25rem"
            }}
          ></div>
          {renderText(section)}
        </Card.Body>
      </Card>
    )
  }
  if (!isLG) {
    return (
      <Card className="d-flex border-0 my-3">
        <Card.Header
          style={{ backgroundColor: "#F0F1F2" }}
          className="d-flex justify-content-center align-items-center border-0 mx-2 py-2"
        >
          {renderIcon(section)}
          {renderH4(section)}
        </Card.Header>
        <Card.Body
          style={{ borderRadius: "8px", backgroundColor: "#F8F9FA" }}
          className="d-flex flex-column align-items-center border-0 mx-2 py-2 px-3"
        >
          {renderText(section)}
        </Card.Body>
      </Card>
    )
  }
}

export default LandingCard
