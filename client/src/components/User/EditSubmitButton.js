import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Button } from "react-bootstrap"

const EditSubmitButton = () => {
  const { isLoading, userLoading } = useContext(UserContext)
  return (
    <div>
      <Button
        disabled={isLoading || userLoading}
        variant="primary"
        type="submit"
      >
        Save changes
      </Button>
    </div>
  )
}

export default EditSubmitButton
