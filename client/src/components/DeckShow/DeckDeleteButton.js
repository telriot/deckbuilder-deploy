import React, { useState, Fragment } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"
import axios from "axios"
import DeleteConfirmationModal from "../DeleteConfirmationModal"

const DeckEditButtonGroup = props => {
  let history = useHistory()
  let params = useParams()
  const [modalShow, setModalShow] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const deleteHandleClick = async () => {
    setIsDeleting(true)
    try {
      axios.delete(`/api/decks/${params.id}`)
      setIsDeleting(false)
      console.log("deck successfully deleted")
      history.push("/")
    } catch (error) {
      setIsDeleting(false)
      console.log("Server error", error)
    }
  }

  const classNameDisplay = () => {
    if (props.display && props.display === "block") {
      return "btn-sm btn-danger btn-block"
    } else {
      return "btn-sm btn-danger"
    }
  }

  return (
    <Fragment>
      <Button className={classNameDisplay()} onClick={() => setModalShow(true)}>
        Delete
      </Button>
      <DeleteConfirmationModal
        show={modalShow}
        setShow={setModalShow}
        func={deleteHandleClick}
        type="deck"
        isLoading={isDeleting}
      />
    </Fragment>
  )
}

export default DeckEditButtonGroup
