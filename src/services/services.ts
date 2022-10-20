import { getBooks } from "../axios/api";
import { bookListMapper } from "../mappers/bookList.mapper";

export const getAllBooks = async () => {
  let bookListData
  try {
    bookListData = await getBooks()?.then((res) => res?.data?.records?.map((book: any) => bookListMapper(book)))
  } catch (e) {
    console.error(e)
  }
  
  return bookListData 
}