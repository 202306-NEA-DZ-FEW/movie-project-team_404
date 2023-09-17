import React from "react"

function TestCard({ imageURL, actorName, characterName }) {
  return (
    <div className="w-auto">
      <img
        src={"https://image.tmdb.org/t/p/w185/" + imageURL}
        alt={actorName}
      />
      <div className="">
        <h2 className="text-lg">
          <b>{actorName}</b>
        </h2>
        <p>as {characterName}</p>
      </div>
    </div>
  )
}

export default TestCard
