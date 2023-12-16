

// {
    // "id": 1,
    // "first_name": "Isador",
    // "last_name": "Kruger",
    // "email": "ikruger0@huffingtonpost.com",
    // "gender": "Male",
    // "dob": "2023-04-28T11:19:35Z"
//   },

import moment from "moment";

export const columnDef = [
    {
        accessorKey:'id',
        header:'Header ID'
    },
    {
        accessorKey:'first_name',
        header:'Header First Name'
    },
  
    {
        accessorKey:'last_name',
        header:'Header Last Name'
    },
    // {
    //     accessorFn:(row)=> `${row.first_name} - ${row.last_name}`,
    //     header:'Full NAme'
    // },
    {
        accessorKey:'email',
        header:'Header Email ID'
    },
    {
        accessorKey:'gender',
        header:'Header Gender'
    },
    {
        accessorKey:'dob',
        header:'Date OF Birth',
        cell:({getValue})=> moment(new Date(getValue())).format('DD-MM-YYYY'),
    },
]