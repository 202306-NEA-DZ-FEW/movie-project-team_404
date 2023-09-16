import Link from "next/link"

const Footer = () => {
  const team_members = [
    {
      name: "Imad Eddine Kettaf",
      github: "https://github.com/breezyback",
    },
    {
      name: "Habchi Sid Ali",
      github: "https://github.com/HabchiSidAli",
    },
    {
      name: "Walid Lamraoui",
      github: "https://github.com/dzc0d3r",
    },
    {
      name: "Hocine",
      github: "https://github.com/hocine1212",
    },
    {
      name: "Hamid Ahmidat",
      github: "https://github.com/HamidAhmidat",
    },
    {
      name: " Ibrahim Hadj ",
      github: "https://github.com/BrahimHM",
    },
  ]
  return (
    <>
      <footer className="footer p-10 bg-base-100 ">
        <aside className="mx-auto my-auto">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="text-lg ">
            <span className="font-bold text-opacity-20 text-2xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600">
              MoviPlaza
            </span>
            <br />
            The real home of movies{" "}
          </p>
        </aside>
        <nav className="mx-auto">
          <header className="footer-title mx-auto mb-5">Team Members</header>
          <div className="grid grid-cols-2 gap-3 sm:gap-2 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 mb-2  ">
            {team_members.map((member) => (
              <Link
                key={member.github}
                href={member.github}
                className="p-3 mx-2  border-[1px] border-cyan-500 rounded-lg hover:border-cyan-700  hover:scale-105 duration-300 transition-all ease-in-out "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className="fill-current mx-auto mb-3"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
                <p className="text-center mt-4 mb-5 font-semibold">
                  {member.name}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer
