const MovieCard = ({ title, poster_path }) => {
  return (
    <div
      className="card mx-auto shadow-xl h-[100%] w-[70vw] sm:w-[25vw] md:w-[20vw] xl:w-[15vw] 2xl:w-[15vw]
      border hover:scale-105 transition-transform duration-300 hover:border-blue-500 transition-border duration-300"
    >
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} poster`}
        />
      </figure>
      <div className="card-body p-4 grid place-content-center text-center">
        <h2 className="card-title sm:text-[2vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[1.2vw]">
          {title}
        </h2>
      </div>
    </div>
  )
}
export default MovieCard
