import React, { useContext, useState, Fragment } from "react"
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { CommentContext } from "../../../../../contexts/CommentContext"
import axios from "axios"
import DeleteConfirmationModal from "../../../../DeleteConfirmationModal"

const CommentCard = props => {
  const comment = props.comment
  const { setCommentsArr, createComments } = useContext(CommentContext)
  const params = useParams()
  const [deletionTarget, setDeletionTarget] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleClick = e => {
    e.persist()
    console.log(e)
    setDeletionTarget(e)
    setModalShow(true)
  }

  const destroyComment = async e => {
    setIsDeleting(true)
    try {
      await axios.post(
        `/api/decks/${params.id}/comments/${e.target.dataset.commentid}`,
        {
          deckId: params.id,
          commentId: e.target.dataset.commentid
        }
      )
      setIsDeleting(false)
    } catch (error) {
      setIsDeleting(false)
      console.log("Server error", error)
    }

    setCommentsArr([])
    createComments(params)
  }

  return (
    <Fragment>
      <Button
        variant="outline-danger"
        size="sm"
        data-commentid={comment._id}
        onClick={e => handleClick(e)}
      >
        Delete
      </Button>
      <DeleteConfirmationModal
        show={modalShow}
        setShow={setModalShow}
        func={destroyComment}
        type="comment"
        target={deletionTarget}
        isLoading={isDeleting}
      />
    </Fragment>
  )
}

export default CommentCard
