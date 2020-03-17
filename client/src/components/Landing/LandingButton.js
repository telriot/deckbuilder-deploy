import React, { useState, useContext, Fragment } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"
import { palette } from "../../helpers"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"
import { AuthContext } from "../../contexts/AuthContext"
import AuthModal from "../Navbar/AuthModal"

const LandingButton = props => {
  const { text, type } = props
  const [hover, setHover] = useState(false)
  const history = useHistory()
  const { stdBlue } = palette
  const { isXS } = useContext(WindowSizeContext)
  const { signupModalShow, setSignupModalShow, handleOnHide } = useContext(
    AuthContext
  )

  const buttonStyle = {
    color: hover ? stdBlue : "white",
    backgroundColor: hover ? "white" : "transparent",
    borderRadius: "8px",
    border: `2px solid white`
  }
  const handleClick = () => {
    if (type === "index") {
      history.push("/index")
    } else if (type === "signup") {
      setSignupModalShow(true)
    }
  }

  return (
    <Fragment>
      <Button
        style={buttonStyle}
        className={isXS ? "my-2 mx-5" : "m-2"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => handleClick()}
      >
        {text}
      </Button>
      <AuthModal
        show={signupModalShow}
        onHide={() => handleOnHide("Signup")}
        type={"Signup"}
      />
    </Fragment>
  )
}

export default LandingButton
