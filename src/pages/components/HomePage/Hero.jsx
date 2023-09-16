const Hero = ({ movie }) => {
  const { title, backdrop_path, overview } = movie
  const backgroundImg = `https://image.tmdb.org/t/p/original/${backdrop_path}`

  return (
    <section
      className="bg-cover bg-center h-screen flex items-center relative"
      style={{ backgroundImage: `url(${backgroundImg})`, position: "relative" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 "></div>

      <div className="absolute bottom-0 left-0 px-8 py-2 text-white  z-10 bg-gray-700 bg-opacity-70 rounded w-full">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <p className="mt-4  text-sm xl:text-md  sm:text-base">{overview}</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-4 rounded-full transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  )
}
export default Hero
