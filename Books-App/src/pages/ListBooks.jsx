import React from 'react'
import TableComponent from '../components/Table'
import books from '../constants/books.json'
function ListBooks() {
  const cols = [
    {
      label: 'Author',
      key: 'author',
      isClickable: false,
    },
    {
      label: 'Title',
      key: 'title',
      isClickable: true,
    },
  ]
  // display title and author and book and each book is clickable
  return (
    <div className='listbooks'>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Books List</h2>

      <TableComponent columns={cols} rows={books} />
    </div>
  )
}

export default ListBooks