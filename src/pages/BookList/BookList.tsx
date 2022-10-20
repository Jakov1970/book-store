import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { getBooks } from '../../axios/api';
import { getAllBooks } from '../../services/services';

export const BookList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const data: any = getAllBooks().then(res => console.log('res', res))
    console.log('data', data)
    
    setData(data)
  }, [])

  return (
    <div>BookList</div>
  )
}
