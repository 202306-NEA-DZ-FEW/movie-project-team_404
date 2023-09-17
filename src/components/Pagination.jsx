import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Pagination = ({ pages, currentPage }) => {
  const currentPath = usePathname()
  let [buttonsList, setButtonsList] = useState([])

  currentPage = parseInt(currentPage)
  console.log(pages)

  useEffect(() => {
    if (currentPage === pages) {
      setButtonsList([currentPage - 2, currentPage - 1, currentPage])
    } else if (currentPage > 1) {
      const previousPage = currentPage - 1
      const nextPage = currentPage + 1
      setButtonsList([previousPage, currentPage, nextPage])
    } else if (currentPage === 1) {
      setButtonsList([currentPage, currentPage + 1, currentPage + 2])
    }
  }, [currentPage, pages])

  return (
    <div className="flex justify-center py-5">
      <div className="join mx-auto">
        {renderList(buttonsList, currentPath, currentPage)}
      </div>
    </div>
  )
}

function renderList(buttonsList, currentPath, currentPage) {
  let linksList = []

  for (let i = 0; i < buttonsList.length; i++) {
    let className = "join-item btn"

    if (currentPage == buttonsList[i])
      className = "join-item btn" + " btn-success"

    linksList.push(
      <Link
        className={className}
        href={currentPath + `?page=${buttonsList[i]}`}
        key={buttonsList[i]}
      >
        {buttonsList[i]}
      </Link>,
    )
  }

  return linksList
}

export default Pagination
