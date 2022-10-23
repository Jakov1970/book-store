import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CEBookData } from '../../components/TableData'
import { prepareFormBook, validate } from '../../helpers/bookHelpers';
import { addNewBook } from '../../services/services';

export const CEBook: any = () => {
  const location = useLocation();
  const [form, setForm] = React.useState({
    title: '',
    nameOfAuthor: '',
    dateOfBirthAuthor: '',
    numOfPages: '',
    yearOfBublishing: '',
    quantity: '',
    coverPhoto: ''
  });

  const [error, setError] = React.useState('')
  const maxIsbn: any = location.state.maxIsbn

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()    
    const errors = validate(form)
    setError(errors)
    if (errors.length) {
    }  
    const preparedFormForSending: any = prepareFormBook(maxIsbn, form)
    addNewBook(preparedFormForSending)
  }


  return (
    <div>
        <div>
            CE BOOK
        </div>

        <form onSubmit={handleSubmit}>
          {
            CEBookData.map((item: any) => (
              <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                <label>{item.label}</label>
                <div>
                  {
                    React.createElement(item.component, {
                      placeholder: item.label,
                      type: item.type,
                      variant: 'filled',
                      id: item.name,
                      // value: item.name,
                      onChange: handleChange
                    })
                  }

                </div>
              </div>
            ))
          } 
          <button type="submit">Submit</button>
          {/* <Link to='/'> */}
            {/* <input type="submit" value="Submit" /> */}
          {/* </Link> */}

          {/* <Link to="/">
            <button>  
              Save
            </button>
          </Link> */}
        </form>
    </div>
  )
}
