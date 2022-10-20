import React from 'react'

export const Table = (data: any) => {
  return (
    <div>
        Table
        
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Number of pages</th>
                </tr>
            </thead>
            <tbody>
                {data.data.map((book: any) => (
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
