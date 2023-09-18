import Link from "next/link"
import { useState } from "react"

const Hero = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
    )
  }
  console.log(movies[0].title)
  // console.log(movie)
  // const { title, backdrop_path, overview } = movies
  let backgroundImg = `https://image.tmdb.org/t/p/original/${movies[currentIndex].backdrop_path}`

  return (
    <div className="carousel w-full  mt-4 flex items-center relative">
      <div className="carousel-item relative w-full h-[87vh] ">
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-neutral-900 "></div>
        <img
          src={backgroundImg}
          className="w-full"
          alt={`Movie ${movies[currentIndex].title}`}
        />
        <div className="absolute bottom-0 left-0 px-8 py-2 text-white  z-10 w-full ">
          <h1 className="text-xl md:text-3xl font-bold ">
            {movies[currentIndex].title}
          </h1>
          <p className="my-4 sm:text-base text-sm text-justify">
            {movies[currentIndex].overview}
          </p>

          <Link
            href={`movies/movie/${movies[currentIndex].id}`}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 my-22 rounded-full transition duration-300 ease-in-out"
          >
            Watch The Trailer
          </Link>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
          <button onClick={handlePrev} className="btn btn-circle">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>

    //   <section
    //     className="bg-cover  bg-center  h-[88vh] mt-4 flex items-center relative"
    //     style={{
    //       backgroundImage: `url(${backgroundImg})`,
    //       position: "relative",
    //     }}
    //   >
    //     <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-neutral-800"></div>

    // <div className="absolute bottom-0 left-0 px-8 py-2 mb-4 text-white  z-10 w-full">
    //   <h1 className="text-4xl font-bold ">{title}</h1>
    //   <p className="my-4  text-sm xl:text-md  sm:text-base">{overview}</p>

    //   <Link
    //     href={`movies/${movie.id}`}
    //     className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 my-22 rounded-full transition duration-300 ease-in-out"
    //   >
    //     Watch The Trailer
    //   </Link>
    // </div>
    //   </section>
  )
}
export default Hero
