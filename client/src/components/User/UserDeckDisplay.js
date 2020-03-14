import React, { useState, useEffect, useContext, Fragment } from "react"
import DeckCard from "../DeckCard"
import axios from "axios"
import DeckDisplay from "./DeckDisplay"
import LoadingSpinner from "../LoadingSpinner"
import { UserContext } from "../../contexts/UserContext"
import { WindowSizeContext } from "../../contexts/WindowSizeContext"

const UserDeckDisplay = props => {
  const { setDecksLoading, decksLoading } = useContext(UserContext)
  const { isXS } = useContext(WindowSizeContext)
  const [decksDisplay, setDecksDisplay] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [deckSearchParams, setDeckSearchParams] = useState({
    sortOrder: "date"
  })

  useEffect(() => {
    getDecks()
  }, [page, deckSearchParams])

  const getDecks = async () => {
    try {
      setDecksLoading(true)
      const response = await axios.get(`/api/users/${props.params.id}/decks`, {
        params: {
          page,
          author: props.params.id,
          sortOrder: deckSearchParams.sortOrder
        }
      })
      let list = []
      for (let deck of response.data.docs) {
        const {
          _id,
          name,
          format,
          matches,
          comments,
          colors,
          matchups,
          sideGuides
        } = deck
        list.push(
          <DeckCard
            id={_id}
            name={name}
            format={format}
            key={`deckCard${_id}`}
            matches={matches}
            comments={comments}
            colors={colors}
            matchups={matchups}
            sideGuides={sideGuides}
          />
        )
      }
      setPages(response.data.totalPages)
      setDecksDisplay(list)
      setDecksLoading(false)
    } catch (error) {
      setDecksLoading(false)
      console.error(error.response)
    }
  }

  return (
    <Fragment>
      {decksLoading ? (
        <LoadingSpinner
          animation="border"
          variant="primary"
          style={isXS ? "sm" : "lg"}
        />
      ) : (
        <DeckDisplay
          page={page}
          setPage={setPage}
          pages={pages}
          deckSearchParams={deckSearchParams}
          setDeckSearchParams={setDeckSearchParams}
          decksDisplay={decksDisplay}
        />
      )}
    </Fragment>
  )
}

export default UserDeckDisplay
