import React from "react"
import TestCard from "./TestCard"

function RelatedMovies({ relatedInformation }) {
  const relatedData = relatedInformation.results.map((movieInfo) => {
    return (
      <TestCard
        key={movieInfo.id}
        imageURL={movieInfo.poster_path}
        actorName={movieInfo.title}
      />
    )
  })

  return (
    <div>
      <h1 className="text-xl pt-5 font-medium text-center pt-16 pb-5">
        Related movies:
      </h1>
      <div className="grid grid-cols-6 place-items-center">{relatedData}</div>
    </div>
  )
}

export default RelatedMovies
