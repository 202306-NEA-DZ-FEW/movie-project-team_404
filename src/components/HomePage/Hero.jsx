import Link from "next/link"
import { useEffect, useState } from "react"

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

  // Auto-slide effect
  useEffect(() => {
    // Function to go to the next slide
    const autoSlide = () => {
      handleNext()
    }

    // Set an interval to call autoSlide every 3 seconds
    const intervalId = setInterval(autoSlide, 5000)

    // Clear the interval when the component unmounts or when currentIndex changes
    return () => {
      clearInterval(intervalId)
    }
  }, [currentIndex])

  const movieAtIndex = movies[currentIndex]

  let backgroundImg = `https://image.tmdb.org/t/p/original/${movieAtIndex.backdrop_path}`

  return (
    <div className="carousel w-full  mt-4 flex items-center relative">
      <div className="carousel-item relative w-full   h-[87vh] ">
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-neutral-900 "></div>
        <img
          src={backgroundImg}
          className="w-full object-fit"
          alt={`Movie ${movieAtIndex.title}`}
        />
        <div className="absolute bottom-0 left-0 px-6 mb-6 py-2 text-white  z-10 w-full ">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold  lg:text-3xl">
            {movieAtIndex.title}
          </h1>
          <p className="my-4 sm:text-base  md:text-base lg:text-lg xl:text-xl truncate">
            {movieAtIndex.overview}
          </p>

          <Link
            href={`movies/movie/${movieAtIndex.id}`}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 my-22 rounded-full transition duration-300 ease-in-out"
          >
            See More
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
  )
}
export default Hero
