const SearchBox = ({ search, handleSearch }) => {
  return (
    <>
      <div className="form-control hidden lg:flex">
        <div className="">
          <input
            type="text"
            placeholder="Search ..."
            autocomplete="off"
            class="cursor-pointer opacity-0 mr-3 relative bg-transparent rounded-full pl-5 outline-none border-[2px] border-gray-500 h-12 w-12 placeholder-transparent z-10 font-semibold focus:opacity-100 focus:cursor-auto focus:text-gray-700  focus:flex-1  focus:placeholder-gray-500 focus:bg-white focus:pr-12 focus:w-56 transition-all duration-500 transform"
            onChange={handleSearch}
            value={search}
          />
          <button className="mr-8 absolute right-10 btn btn-ghost btn-circle  border-[1px] border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        </div>
      </div>
    </>
  )
}

export default SearchBox
