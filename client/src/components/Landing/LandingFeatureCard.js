import React, { useContext, Fragment } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
import LandingCard from "./LandingCard"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"
import { AuthContext } from "../../contexts/AuthContext"
import { palette } from "../../helpers"
import AuthModal from "../Navbar/AuthModal"

const LandingFeatureCard = () => {
  const { isXS, isLG } = useContext(WindowSizeContext)
  const { signupModalShow, setSignupModalShow, handleOnHide } = useContext(
    AuthContext
  )
  const { stdBlue } = palette
  return (
    <Card
      className={isLG ? "p-5 border-0" : "p-4 border-0"}
      style={{
        borderRadius: "0.5rem",
        boxShadow: "4px 4px 4px rgba(68, 68, 68, 0.6)"
      }}
    >
      <div>
        {isLG && (
          <h1 className="font-weight-bold text-dark">
            Simple, effective tools
          </h1>
        )}
        {!isLG && !isXS && (
          <h2 className="font-weight-bold text-dark">
            Simple, effective tools
          </h2>
        )}
      </div>
      {isLG && (
        <Row>
          <Col>
            <LandingCard section="deckbuilder" title="Intuitive Deckbuilding" />
          </Col>
          <Col>
            <LandingCard section="matchup" title="Immediate Matchup Overview" />
          </Col>
          <Col>
            <LandingCard section="sideboard" title="Clear Sideboard Guides" />
          </Col>
        </Row>
      )}
      {!isLG && (
        <Fragment>
          <LandingCard section="deckbuilder" title="Intuitive Deckbuilding" />
          <LandingCard section="matchup" title="Immediate Matchup Overview" />
          <LandingCard section="sideboard" title="Clear Sideboard Guides" />
        </Fragment>
      )}
      <Button
        size={isLG ? "lg" : ""}
        className="mx-auto mt-2"
        variant="outline-primary"
        style={{ borderRadius: "0.5rem", border: `2px solid ${stdBlue}` }}
        onClick={() => setSignupModalShow(true)}
      >
        Sign up and start logging!
      </Button>
      <AuthModal
        show={signupModalShow}
        onHide={() => handleOnHide("Signup")}
        type={"Signup"}
      />
    </Card>
  )
}

export default LandingFeatureCard
