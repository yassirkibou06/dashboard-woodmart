import React from 'react'
import CardsHome from './CardsHome'

const AllCardsList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
    </div>
  )
}

export default AllCardsList