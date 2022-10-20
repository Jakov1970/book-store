import React from 'react'
import { axiosInstance } from './apiSetup';

export const getBooks = () => axiosInstance?.get(`books`)

export const getBookById = (id: any) => axiosInstance?.get(`books/${id}`)