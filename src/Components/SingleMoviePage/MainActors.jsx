import React from "react"
import TestCard from "./TestCard"
import Link from "next/link"

function MainActors({ creditsData }) {
  const slicedCast = creditsData.cast.slice(0, 5)
  const castElements = slicedCast.map((castMember) => {
    return (
      <Link href={`../actors/${castMember.id}`} key={castMember.id}>
       <TestCard
        imageURL={castMember.profile_path}
        actorName={castMember.name}
        characterName={castMember.character}
      />
      </Link>
     
    )
  })

  return (
    <div>
      <h1 className="text-xl pt-5 font-medium text-center pb-5">
        Main actors:
      </h1>

      <div className="flex justify-evenly text-center">{castElements}</div>
    </div>
  )
}

export default MainActors
