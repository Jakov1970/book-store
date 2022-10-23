import { axiosInstance } from './apiSetup';

export const getBooks = () => axiosInstance?.get(`books`)

export const getBookById = (id: any) => axiosInstance?.get(`books/${id}`)

export const postBook = (book: any) => axiosInstance?.post(`/books`, {book: book})

export const patchBook = (id: any) => axiosInstance?.patch(`books/${id}`)

export const deleteBook = (id: any) => axiosInstance?.delete(`books/${id}`)