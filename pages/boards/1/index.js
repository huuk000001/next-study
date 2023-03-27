import { gql, useQuery } from '@apollo/client'
import React from 'react'

const FETCH_BOARD = gql`
  query {
    fetchBoard(number:1){
      writer
      title
      contents
    }
  }
`

const BoardDetailPage = () => {
  const {data} = useQuery(FETCH_BOARD)

  console.log(data)
  
  return (
    <div>BoardDetailPage</div>
  )
}

export default BoardDetailPage