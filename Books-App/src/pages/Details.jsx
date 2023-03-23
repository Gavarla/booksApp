import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import books from '../constants/books.json'
function Details() {
  const [book, setBook] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    const book = books.filter((ele) => ele.title === id)
    setBook(book[0])
  }, [])
  
  return (
    <div className="max-w-[25rem] my-0 mx-auto">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Books Details</h2>
      {
        Object.keys(book).length > 0 ? 
          <ul className="max-w-md space-y-1  list-disc list-inside ">
            <li>
                Book title is { book.title }
            </li>
            <li>
                Book author is { book.author }
            </li>
          </ul>
          : 'No Books Available now.'
      }
</div>
  )
}

export default Details