export const validate = (form: any) => {
    console.log('form', form)
    // we are going to store errors for all fields
    // in a signle array
    const errors: any = [];
  
    if (form.title.length === 0) {
      errors.push("Name can't be empty");
    }
  
    // if (email.length < 5) {
    //   errors.push("Email should be at least 5 charcters long");
    // }
    // if (email.split("").filter((x) => x === "@").length !== 1) {
    //   errors.push("Email should contain a @");
    // }
    // if (email.indexOf(".") === -1) {
    //   errors.push("Email should contain at least one dot");
    // }
  
    // if (password.length < 6) {
    //   errors.push("Password should be at least 6 characters long");
    // }
  
    return errors;
  }

  export const findMaxIsbn = (data: any) => Math.max(...data.map((book: any) => book?.isbn))

  export const prepareFormBook = (maxIsbn: any, form: any) => {
    const dateOfBirth =  form.dateOfBirthAuthor.slice(0, 10)
    return {
      isbn: maxIsbn + 1,
      title: form.title,
      nameOfAuthor: form.nameOfAuthor,
      dateOfBirthAuthor: dateOfBirth,
      numOfPages: form.numOfPages,
      yearOfBublishing: form.yearOfBublishing,
      quantity: form.quantity,
      coverPhoto: form.coverPhoto
    }
  }