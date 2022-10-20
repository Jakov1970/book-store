import { axiosInstance } from './apiSetup';

export const getBooks = () => axiosInstance?.get(`books`)

export const getBookById = (id: any) => axiosInstance?.get(`books/${id}`)

export const postBook = () => axiosInstance?.post(`books`)

export const patchBook = (id: any) => axiosInstance?.patch(`books/${id}`)

export const deleteBook = (id: any) => axiosInstance?.delete(`books/${id}`)