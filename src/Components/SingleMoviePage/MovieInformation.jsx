import React from "react"
import MovieRating from "./MovieRating"

function MovieInformation({ movieData, creditsData }) {
  const getLanguage = (languageCode) => {
    const lang = new Intl.DisplayNames(["en"], { type: "language" })
    return lang.of(languageCode)
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl pt-5 font-semibold">{movieData.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 text-left">
          <div>
            <h1 className="text-xl pt-16 pb-5 font-medium text-center">
              Informations:
            </h1>
            <p className="text-lg px-20">
              <b className="pr-3">Runtime:</b> {movieData.runtime}
            </p>
            <p className="text-lg px-20">
              <b className="pr-3">Language:</b>{" "}
              {getLanguage(movieData.original_language)}
            </p>
            <p className="text-lg px-20">
              <b className="pr-3">Release Date:</b> {movieData.release_date}
            </p>
            <p className="text-lg px-20">
              <b className="pr-3">Number of votes:</b> {movieData.vote_count}
            </p>
            <div className="flex">
              <p className="text-lg pl-20 ">
                <b className="pr-3">Rating:</b>
              </p>
              <MovieRating rating={movieData.vote_average} />
            </div>
            <p className="px-20">
              <b className="pr-3">Director:</b>{" "}
              {creditsData.crew[0].original_name}
            </p>
            <p className="text-lg px-20">
              <b className="pr-3">Production company:</b>{" "}
              {movieData.production_companies[0].name}{" "}
            </p>
            <img
              className="pl-20"
              src={
                "https://image.tmdb.org/t/p/w92/" +
                movieData.production_companies[0].logo_path
              }
              alt="Logo"
            />
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-xl pt-16 pb-5 font-medium">Overview:</h1>
              <p className="text-lg px-20 text-left">{movieData.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInformation
