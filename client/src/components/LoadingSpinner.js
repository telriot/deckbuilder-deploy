import React from "react"
import { Spinner } from "react-bootstrap"

const LoadingSpinner = props => {
  const { animation, style, variant } = props
  const setStyle = size => {
    switch (size) {
      case "lg":
        return { width: "150px", height: "150px" }
      case "md":
        return { width: "100px", height: "100px" }
      case "sm":
        return { width: "50px", height: "50px" }
      default:
        return { width: "30px", height: "30px" }
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner
        animation={animation}
        role="status"
        variant={variant}
        style={setStyle(style)}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoadingSpinner
