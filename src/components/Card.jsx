import Image from "next/image"
import Link from "next/link"

const Card = ({ movie, imgConfig }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="">
      <div className="card card-compact w-[15vw] mx-auto">
        <figure>
          <Image
            src={imgConfig + movie.poster_path}
            width={500}
            height={200}
            alt="Picture of the author"
            priority={true}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[1vw] text-center">
            {movie.original_title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default Card
