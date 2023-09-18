import Link from "next/link"

const SideDrawer = ({ movies, handleDrawer, genres }) => {
  const mobileGenre = genres.slice(0, 10)
  return (
    <>
      {/*  side drawer */}

      <div className="drawer-side ">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100">
          <ul className="menu menu-horizontal flex flex-col">
            {/* Navbar menu content here */}
            <div className="dropdown dropdown-bottom dropdown-start">
              <label tabIndex={0} className=" btn btn-ghost m-2 w-full">
                Genres
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu m-2 shadow bg-base-200 rounded-box w-full"
              >
                <li>
                  {genres.map((genre) => (
                    <Link key={genre.id} href={`movies?filter=${genre.name}`}>
                      {genre.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-bottom dropdown-start">
              <label tabIndex={0} className=" btn btn-ghost m-2 w-full">
                Movies
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu m-2 shadow bg-base-200 rounded-box w-full"
              >
                <li onClick={handleDrawer}>
                  {movies.map((movie) => (
                    <Link key={movie.url} href={movie.url}>
                      {movie.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
            <label className=" flex-1">
              <li className="text-base" onClick={handleDrawer}>
                <Link className="btn btn-ghost p-4 m-2 flex-1 " href="actors">
                  Actors
                </Link>
              </li>
            </label>
          </ul>
        </ul>
      </div>
    </>
  )
}

export default SideDrawer
