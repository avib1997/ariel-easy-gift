import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import './SumPage.css'

const SumPage = () => {
  const columns = [
    {
      name: 'First Name',
      selector: row => row.FirstName,
      sortable: true
    },
    {
      name: 'Last Name',
      selector: row => row.LastName,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      right: true
    },
    {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
      right: true
    },
    {
      name: 'Amount',
      selector: row => row.Amount,
      sortable: true,
      right: true
    }
  ]

  const data = [
    {
      id: 1,
      FirstName: 'Yoni',
      LastName: 'Cohen',
      email: 'Yoni@gmail.com',
      phone: '052-1294567',
      Amount: 100
    },
    {
      id: 2,
      FirstName: 'David',
      LastName: 'Bro',
      email: 'David@gmail.com',
      phone: '052-1234597',
      Amount: 10
    },
    {
      id: 3,
      FirstName: 'Matan',
      LastName: 'Yosef',
      email: 'Matan@gmail.com',
      phone: '052-9234567',
      Amount: 200
    },
    {
      id: 4,
      FirstName: 'Jack',
      LastName: 'Sparrow',
      email: 'Jack@gmail.com',
      phone: '052-1233567',
      Amount: 1000
    },
    {
      id: 5,
      FirstName: 'Alex',
      LastName: 'Albert',
      email: 'Alex@gmail.com',
      phone: '052-1334567',
      Amount: 1
    },
    {
      id: 6,
      FirstName: 'Yoni',
      LastName: 'Cohen',
      email: 'Yoni@gmail.com',
      phone: '052-1294567',
      Amount: 100
    },
    {
      id: 7,
      FirstName: 'David',
      LastName: 'Bro',
      email: 'David@gmail.com',
      phone: '052-1234597',
      Amount: 10
    },
    {
      id: 8,
      FirstName: 'Matan',
      LastName: 'Yosef',
      email: 'Matan@gmail.com',
      phone: '052-9234567',
      Amount: 200
    },
    {
      id: 9,
      FirstName: 'Jack',
      LastName: 'Sparrow',
      email: 'Jack@gmail.com',
      phone: '052-1233567',
      Amount: 1000
    },
    {
      id: 10,
      FirstName: 'Alex',
      LastName: 'Albert',
      email: 'Alex@gmail.com',
      phone: '052-1334567',
      Amount: 1
    },
    {
      id: 11,
      FirstName: 'Yoni',
      LastName: 'Cohen',
      email: 'Yoni@gmail.com',
      phone: '052-1294567',
      Amount: 100
    },
    {
      id: 12,
      FirstName: 'David',
      LastName: 'Bro',
      email: 'David@gmail.com',
      phone: '052-1234597',
      Amount: 10
    },
    {
      id: 13,
      FirstName: 'Matan',
      LastName: 'Yosef',
      email: 'Matan@gmail.com',
      phone: '052-9234567',
      Amount: 200
    },
    {
      id: 14,
      FirstName: 'Jack',
      LastName: 'Sparrow',
      email: 'Jack@gmail.com',
      phone: '052-1233567',
      Amount: 1000
    },
    {
      id: 15,
      FirstName: 'Alex',
      LastName: 'Albert',
      email: 'Alex@gmail.com',
      phone: '052-1334567',
      Amount: 1
    },
    {
      id: 16,
      FirstName: 'Yoni',
      LastName: 'Cohen',
      email: 'Yoni@gmail.com',
      phone: '052-1294567',
      Amount: 100
    },
    {
      id: 17,
      FirstName: 'David',
      LastName: 'Bro',
      email: 'David@gmail.com',
      phone: '052-1234597',
      Amount: 10
    },
    {
      id: 18,
      FirstName: 'Matan',
      LastName: 'Yosef',
      email: 'Matan@gmail.com',
      phone: '052-9234567',
      Amount: 200
    },
    {
      id: 19,
      FirstName: 'Jack',
      LastName: 'Sparrow',
      email: 'Jack@gmail.com',
      phone: '052-1233567',
      Amount: 1000
    },
    {
      id: 20,
      FirstName: 'Alex',
      LastName: 'Albert',
      email: 'Alex@gmail.com',
      phone: '052-1334567',
      Amount: 1
    }
  ]

  const [records, setRecords] = useState(data)

  function handleFilter(e) {
    const newData = data.filter(row => {
      return (
        row.FirstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.LastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.Amount.toString().includes(e.target.value.toLowerCase())
      )
    })
    setRecords(newData)
  }

  return (
    <div className="SumPageContainer">
      <h1 style={{ color: 'white', fontSize: '40px', marginBottom: '20px' }}>
        Summary of gifts
      </h1>
      <div className="text-end">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="search-input" type="text" onChange={handleFilter} />
      </div>
      <div className="table-container">
        <DataTable
          columns={columns}
          data={records}
          sortableRows
          selectableRows
          fixedHeader
          pagination
          className="table"
        />
      </div>
    </div>
  )
}

export default SumPage
