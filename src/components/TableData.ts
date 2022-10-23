// import { Input, Select } from "@chakra-ui/react";

import { Input } from "@mui/material";

const fieldStyle: any = {
  // w: 'auto',
  display: 'flex',
  flexDirection: 'column',
  p: 5,
  color: 'black'
  // justifyContent: 'left'
}

export const CEBookData = [
  {
    label: 'Naslov',
    name: 'title',
    required: true,
    component: Input,
    style: { ...fieldStyle, w: '400px' }
  },
  {
    label: 'Ime autora',
    name: 'nameOfAuthor',
    required: true,
    component: Input,
    style: { ...fieldStyle, w: '400px' }
  },
  {
    label: 'Datum rodjenja autora',
    name: 'dateOfBirthAuthor',
    required: true,
    component: Input,
    type: 'datetime-local',
    style: { ...fieldStyle, w: '400px' }
  },
  {
    label: 'Broj stranica',
    name: 'numOfPages',
    required: true,
    component: Input,
    style: { ...fieldStyle, w: '500px' }
  },
  {
    label: 'Godina izdavanja',
    name: 'yearOfBublishing',
    required: true,
    component: Input,
    style: { ...fieldStyle, w: '500px' }
  },
  {
    label: 'Broj primeraka',
    name: 'quantity',
    required: true,
    component: Input,
    style: { ...fieldStyle, w: '500px' }
  },
  {
    label: 'Naslovna slika',
    name: 'coverPhoto',
    required: true,
    component: Input,
    type: 'file',
    style: { ...fieldStyle, w: '500px', h: '300px' }
  }
];
