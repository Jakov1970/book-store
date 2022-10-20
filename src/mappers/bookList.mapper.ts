export const bookListMapper = (book: any) => {
    return {
      id: book?.id,
      title: book?.title,
      author: book?.nameOfAuthor,
      pagesNumber: book?.numOfPages,
      published: book?.yearOfBublishing, // here is yearOfPublishing, not yearOfBublishing :)
      quantity: book?.quantity,
      photo: book?.coverPhoto
    }
}