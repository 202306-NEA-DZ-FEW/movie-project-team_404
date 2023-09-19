import React from "react"
import Link from "next/link"
import ActorsCard from "../ActorsCard"

function MainActors({ creditsData }) {
  const slicedCast = creditsData.cast.slice(0, 5)
  const castElements = slicedCast.map((castMember) => {
    return (
      <div className="w-4/5 h-4/5" key={castMember.id}>
        <Link href={`/actors/${castMember.id}`}>
          <ActorsCard
            name={castMember.name}
            profile_path={castMember.profile_path}
            popularity={castMember.popularity}
          />
        </Link>
      </div>
    )
  })

  return (
    <div>
      <h1 className="font-bold text-opacity-20 text-2xl text-transparent mb-5 bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mt-10 py-18  text-center">
        Main actors:
      </h1>

      <div className="h- 500 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-10 mx-auto justify-items-center">
        {castElements}
      </div>
    </div>
  )
}

export default MainActors
