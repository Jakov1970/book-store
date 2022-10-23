import { getBooks, postBook } from "../axios/api";
import { findMaxIsbn } from "../helpers/bookHelpers";
import { bookListMapper } from "../mappers/bookList.mapper";

export const getAllBooks = async () => {
  let bookListData
  let maxIsbn
  let allData

  try {
    bookListData = await getBooks()?.then((res) => res?.data?.records?.map((book: any) => bookListMapper(book)))
    maxIsbn = findMaxIsbn(bookListData)
    allData = { bookListData, maxIsbn }
  } catch (e) {
    console.error(e)
  }  
  return allData || {}
}

export const addNewBook = async (data: any) => {
  let newBook = data
  console.log(newBook);
  try {
    await postBook(newBook)
  } catch (error) {
    console.error(error)
  }
}