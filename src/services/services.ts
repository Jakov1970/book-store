import { getBooks } from "../axios/api";
import { bookListMapper } from "../mappers/bookList.mapper";

export const getAllBooks = async () => {
  try {
      await getBooks()?.then((res) => {
        const bookListData = res?.data?.records?.map((book: any) => bookListMapper(book))
        // handle success
        return bookListData
      })
    } catch (e) {
      // handle error
      console.error(e)
    }
}