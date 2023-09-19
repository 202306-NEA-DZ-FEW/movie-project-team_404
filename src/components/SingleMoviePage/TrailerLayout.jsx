import React from "react"

function TrailerLayout({ movieData, trailerData, handleScroll }) {
  // Find the movie trailer among the list of movies
  const trailer = trailerData.results.find((item) => item.type === "Trailer")

  return (
    <div
      id="background-image"
      className={
        "card card-side shadow-xl h-screen w-full bg-no-repeat bg-cover rounded-none relative"
      }
      style={{
        backgroundImage:
          "url(" +
          "https://image.tmdb.org/t/p/original/" +
          movieData.backdrop_path +
          ")",
      }}
    >
      <div className="backdrop-blur-sm bg-black/10 w-full h-screen bg-gradient-to-b from-transparent to-teal-950 to-90% absolute text-center ">
        <h1 className="font-bold text-opacity-20 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mt-20 text-center">
          {movieData.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center w-full h-4/5 object-fill">
          <figure className="col-span-1 pl-10 flex items-center h-96 w-48 md:h-auto md:w-auto">
            {/* Movie poster */}
            <img
              className="rounded-xl object-fill"
              src={"https://image.tmdb.org/t/p/w342/" + movieData.poster_path}
              alt={movieData.title}
            />
          </figure>

          <div className="col-span-2 w-full grid place-items-center object-fill">
            {/* Movie trailer */}
            <iframe
              className="aspect-video w-5/6 rounded-xl relative"
              src={"https://www.youtube.com/embed/" + trailer.key}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* Scroll down btutton */}
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
