import MainActors from "@/components/SingleMoviePage/MainActors"
import MovieInformation from "@/components/SingleMoviePage/MovieInformation"
import RelatedMovies from "@/components/SingleMoviePage/RelatedMovies"
import TrailerLayout from "@/components/SingleMoviePage/TrailerLayout"
import { moviesFetcher } from "@/utils/api"

export default function MoviePage({
  movieData,
  trailerData,
  creditsData,
  relatedInformation,
}) {
  function handleScroll() {
    const element = document.getElementById("background-image")
    window.scroll({
      top: element.offsetHeight,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <TrailerLayout
        movieData={movieData}
        trailerData={trailerData}
        handleScroll={handleScroll}
      />
      <div>
        <MovieInformation movieData={movieData} creditsData={creditsData} />
        <MainActors creditsData={creditsData} />
        <RelatedMovies relatedInformation={relatedInformation} />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { movieId } = context.query

  const data = await moviesFetcher(`movie/${movieId}`)
  const trailer = await moviesFetcher(`movie/${movieId}/videos`)
  const credits = await moviesFetcher(`movie/${movieId}/credits`)
  const related = await moviesFetcher(`movie/${movieId}/similar`)

  return {
    props: {
      movieData: data,
      trailerData: trailer,
      creditsData: credits,
      relatedInformation: related,
    },
  }
}
