import React from "react"
import TestCard from "./TestCard"
import Link from "next/link"

function RelatedMovies({ relatedInformation }) {
  const relatedData = relatedInformation.results.map((movieInfo) => {
    return (
      <Link href={`../movies/${movieInfo.id}`} key={movieInfo.id}>
      <TestCard
        imageURL={movieInfo.poster_path}
        actorName={movieInfo.title}
      />
      </Link>
    )
  })

  return (
    <div>
      <h1 className="text-xl pt-5 font-medium text-center pb-5">
        Related movies:
      </h1>
      <div className="grid grid-cols-6 place-items-center">{relatedData}</div>
    </div>
  )
}

export default RelatedMovies
