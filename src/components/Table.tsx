import React, { useState } from 'react'

export const Table = (data: any) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchBooks = (e: any) => setSearchInput(e.target.value)

  const filteredBooks = data?.data?.filter((book: any) => book?.title?.toLowerCase()?.includes(searchInput?.toLowerCase()))

  return (
    <div>
        <input
          type='search'
          placeholder='Search books' 
          onChange={handleSearchBooks}
        />       
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Number of pages</th>
                </tr>
            </thead>
            <tbody>
                {filteredBooks.map((book: any) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.pagesNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
  )
}
