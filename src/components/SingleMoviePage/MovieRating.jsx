import React from "react"

const Rating = ({ rating }) => {
  rating = rating / 2
  const normalizedRating = Math.min(10, Math.max(0, rating))

  // Calculate the number of filled stars
  const wholeStars = Math.floor(normalizedRating)
  const decimalPart = normalizedRating - wholeStars

  // Create an array to store the stars
  const stars = []

  // Create filled stars for the whole part
  for (let i = 0; i < wholeStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-400 text-xl">
        ★
      </span>,
    )
  }

  // Create empty stars
  if (decimalPart > 0) {
    stars.push(
      <span key="half" className="text-gray-400 text-xl">
        ☆
      </span>,
    )
  }

  // Fill the remaining stars with empty stars
  while (stars.length < 5) {
    stars.push(
      <span key={stars.length} className="text-gray-400 text-xl">
        ☆
      </span>,
    )
  }

  return <div className="flex">{stars}</div>
}

export default Rating
