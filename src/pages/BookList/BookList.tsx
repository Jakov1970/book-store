import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import { Table } from '../../components/Table';
import { getAllBooks } from '../../services/services';

export const BookList = () => {
  const [data, setData] = useState([])
  const [maxIsbn, setMaxIsbn] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    initializePage()
  }, [])

  const initializePage = async () => {
    const books: any = await getAllBooks()

    setData(books?.bookListData || [])
    setMaxIsbn(books.maxIsbn)
  }

  const toCEBook = () => {
    navigate('/ce-book',{state:{ maxIsbn: maxIsbn }});
  }

  return (
    <ErrorBoundary>
      <Table data={data} />
      
      <button onClick={() => toCEBook()}>Add new book</button>
    </ErrorBoundary>
  )
}
