import React, { useState, useContext, Fragment } from "react"
import { useParams } from "react-router-dom"
import { SideGuideContext } from "../../../../contexts/SideGuideContext"
import { ButtonToolbar, Button } from "react-bootstrap"
import SideDataModal from "./SideDataModal"
import SideDataEditModal from "./SideDataEditModal"
import DeleteConfirmationModal from "../../../DeleteConfirmationModal"
import axios from "axios"

const SideDataModalButton = () => {
  const params = useParams()
  const { matchupGuide, setSideGuides } = useContext(SideGuideContext)
  const [modalShow, setModalShow] = useState(false)
  const [editModalShow, setEditModalShow] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const deleteSideGuide = async () => {
    try {
      setIsDeleting(true)
      await axios.post(
        `/api/decks/${params.id}/sideguides/${matchupGuide._id}`,
        {
          deckId: params.id,
          sideGuideId: matchupGuide._id
        }
      )
    } catch (error) {
      console.log("Server error", error)
      setIsDeleting(false)
    }
    try {
      const response = await axios.get(`/api/decks/${params.id}/sideguides/`, {
        params: { deckId: params.id }
      })
      setSideGuides(response.data)
      setIsDeleting(false)
    } catch (error) {
      console.error(error.message)
      setIsDeleting(false)
    }
  }

  return (
    <Fragment>
      <ButtonToolbar className="d-flex justify-content-center my-2">
        <Button
          className="mx-1"
          size="sm"
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          New guide
        </Button>
        <Button
          className="mx-1"
          size="sm"
          variant="secondary"
          onClick={() => setEditModalShow(true)}
        >
          Edit
        </Button>
        <Button
          className="mx-1"
          onClick={() => setDeleteModalShow(true)}
          variant="danger"
          size="sm"
        >
          Delete
        </Button>
        <SideDataModal show={modalShow} onHide={() => setModalShow(false)} />
        <SideDataEditModal
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
        />
      </ButtonToolbar>
      <DeleteConfirmationModal
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        func={deleteSideGuide}
        type="sideboard guide"
        isLoading={isDeleting}
      />
    </Fragment>
  )
}

export default SideDataModalButton
