import { useState, useEffect } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary';
import { Table } from '../../components/Table';
import { getAllBooks } from '../../services/services';

export const BookList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    initializePage()
  }, [])

  const initializePage = async () => {
    const books: any = await getAllBooks()
    setData(books)
  }

  console.log('data1', data)

  return (
    <ErrorBoundary>
      <Table data={data}/>
    </ErrorBoundary>
  )
}
