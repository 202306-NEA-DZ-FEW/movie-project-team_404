import { useState, useEffect } from "react"

const TeamMemberCard = ({ team_members }) => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (showChild) {
    return (
      <>
        {/* <div class="group relative w-96">
                    <img class="w-full object-cover"
                        src="https://www.kindacode.com/wp-content/uploads/2022/06/t-shirt-example.png" />
                    <div
                        class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
                        <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Continue Shopping</a>
                    </div>
                </div> */}
        {team_members.map((member) => (
          <div
            key={member.github}
            className="group relative border rounded-md  mx-2 hover:border-teal-600 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className="w-full object-cover mx-auto mb-3 mt-7"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>

            <p className="text-center p-1  mt-2 mb-2">{member.name}</p>
            <div class="rounded-md bg-opacity-95 absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-base-300 opacity-0 group-hover:h-full group-hover:opacity-100 duration-700 transition-all">
              <h1 class="text-sm text-center p-1 font-bold">{member.name}</h1>
              <a
                target="_blank"
                class="mt-5 rounded-full  btn btn-info btn-sm duration-700 transition-all"
                href={member.github}
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default TeamMemberCard
