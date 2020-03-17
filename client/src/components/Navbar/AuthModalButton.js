import React, { useContext, Fragment } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { NavItem } from "react-bootstrap"
import AuthModal from "./AuthModal"

const AuthModalButton = props => {
  const { type } = props
  const {
    loginModalShow,
    setLoginModalShow,
    signupModalShow,
    setSignupModalShow,
    handleOnHide
  } = useContext(AuthContext)

  return (
    <Fragment>
      <NavItem
        onClick={
          type === "Login"
            ? () => setLoginModalShow(true)
            : () => setSignupModalShow(true)
        }
      >
        {type}
      </NavItem>
      <AuthModal
        show={type === "Login" ? loginModalShow : signupModalShow}
        onHide={() => handleOnHide(type)}
        type={type}
      />
    </Fragment>
  )
}

export default AuthModalButton
