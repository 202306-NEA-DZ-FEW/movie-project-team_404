import React from "react"
import TestCard from "./TestCard"

function MainActors({ creditsData }) {
  const slicedCast = creditsData.cast.slice(0, 5)
  const castElements = slicedCast.map((castMember) => {
    return (
      <TestCard
        key={castMember.name}
        imageURL={castMember.profile_path}
        actorName={castMember.name}
        characterName={castMember.character}
      />
    )
  })

  return (
    <div>
      <h1 className="text-xl pt-5 font-medium text-center pt-16 pb-5">
        Main actors:
      </h1>

      <div className="flex justify-evenly text-center">{castElements}</div>
    </div>
  )
}

export default MainActors
