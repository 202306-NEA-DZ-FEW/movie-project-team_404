import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const NavBar = () => {
  const [drawerChecked, setDrawerChecked] = useState(false)
  const [theme, setTheme] = useState("dark")

  const handleTheme = (e) => {
    e.target.checked ? setTheme("light") : setTheme("dark")
  }

  const handleDrawer = () => {
    setDrawerChecked((drawerChecked) => !drawerChecked)
  }

  const movies = [
    {
      name: "Now Playing ",
      url: "/movies?filter=now-playing",
    },
    {
      name: "Upcomming ",
      url: "/movies?filter=upcomming",
    },
    {
      name: "Popular ",
      url: "/movies?filter=popular",
    },
    {
      name: "Top Rate",
      url: "/movies?filter=top-rate",
    },
    {
      name: "Latest ",
      url: "/movies?filter=latest",
    },
  ]

  useEffect(() => {
    window?.localStorage.setItem("theme", theme)
    const localTheme = window?.localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])
  return (
    <div className="drawer sticky top-0 z-30  h-16 w-full">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        onChange={handleDrawer}
        checked={drawerChecked}
      />
      <div className="drawer-content  flex flex-col ">
        {/* Navbar */}
        <div
          className="w-full navbar bg-base-100  bg-opacity-90 h-20 backdrop-blur transition-all duration-100  text-base-content 
  shadow-md"
        >
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <div className="flex-0 px-2 mx-2 mt-0 text-xl ">
            <Image
              width="40"
              height="40"
              src="https://img.icons8.com/3d-fluency/94/documentary.png"
              alt="MovizHome"
              className="mx-2 mt-[-10px]"
            />
            <Link
              className="font-bold text-opacity-20 text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600"
              href="/"
            >
              MoviPlaza
            </Link>
          </div>
          <div className=" hidden lg:flex flex-1 ">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}

              <label className="">
                <li className="text-base">
                  <Link className="btn btn-ghost p-4 m-2" href="actors">
                    Actors
                  </Link>
                </li>
              </label>

              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost m-2">
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
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-60"
                >
                  <li>
                    {movies.map((movie) => (
                      <Link key={movie.url} href={movie.url}>
                        {movie.name}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className=" btn btn-ghost m-2">
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
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-60"
                >
                  <li>
                    <a>Top Rated</a>
                  </li>
                  <li>
                    <a>Trending </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="navbar-end ml-5 ">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="btn btn-ghost btn-circle mr-1">
              <label className="swap swap-rotate px-1">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleTheme} />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/*  side drawer */}

      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100">
          <ul className="menu menu-horizontal flex flex-col">
            {/* Navbar menu content here */}

            <label className=" flex-1">
              <li className="text-base" onClick={handleDrawer}>
                <Link className="btn btn-ghost p-4 m-2 flex-1 " href="actors">
                  Actors
                </Link>
              </li>
            </label>

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
                <li onClick={handleDrawer}>
                  <a>Top Rated</a>
                </li>
                <li onClick={handleDrawer}>
                  <a>Trending </a>
                </li>
              </ul>
            </div>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
