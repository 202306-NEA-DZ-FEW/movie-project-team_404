import React from "react"

function TrailerLayout({
  movieBackdrop,
  moviePoster,
  movieTitle,
  youtubeKey,
  handleScroll,
}) {
  return (
    <div
      id="background-image"
      className={
        "card card-side shadow-xl h-screen w-full bg-no-repeat bg-cover rounded-none relative "
      }
      style={{
        backgroundImage:
          "url(" + "https://image.tmdb.org/t/p/original/" + movieBackdrop + ")",
      }}
    >
      <div className="backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 grid-flow-row bg-black/10 w-full h-screen bg-gradient-to-b from-transparent to-neutral-900 to-90% absolute place-items-center">
        <figure className="col-span-1 pl-10">
          <img
            className="rounded-xl"
            src={"https://image.tmdb.org/t/p/w500/" + moviePoster}
            alt={movieTitle}
          />
        </figure>

        <div className="col-span-2 w-full h-full grid  place-items-center">
          <h1 className="text-4xl font-semibold text-white">{movieTitle}</h1>
          <iframe
            className="aspect-video w-5/6 rounded-xl relative"
            src={"https://www.youtube.com/embed/" + youtubeKey}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button
        className="btn btn-circle btn-outline !absolute bottom-5 right-1/2 bg-slate-200 text-lg"
        onClick={handleScroll}
      >
        🠟
      </button>
    </div>
  )
}

export default TrailerLayout
