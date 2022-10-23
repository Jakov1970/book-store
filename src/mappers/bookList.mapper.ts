export const bookListMapper = (book: any) => {
    return {
      id: book?.id,
      isbn: book?.isbn,
      title: book?.title,
      author: book?.nameOfAuthor,
      authorBirthDate: book?.dateOfBirthAuthor,
      pagesNumber: book?.numOfPages,
      published: book?.yearOfBublishing, // here is yearOfPublishing, not yearOfBublishing :)
      quantity: book?.quantity,
      photo: book?.coverPhoto
    }
}