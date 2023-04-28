import React, { useState } from 'react'

import { useSession, signOut } from "next-auth/react"
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import DataTableAG from '../src/components/table/table-ag-grid';
import { randomCreatedDate, randomTraderName, randomUpdatedDate, randomInt } from '@mui/x-data-grid-generator';
import { v4 as uuidv4 } from 'uuid';
// import { getSession } from 'next-auth/react'

import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchText from '../src/components/search-bar/search-bar';
import { Chip } from '@mui/material';


const rowsD = [
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 25,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 36,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 19,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 28,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
    {
      id: uuidv4(),
      name: randomTraderName(),
      lastName: randomTraderName(),
      age: 23,
      dateCreated: randomCreatedDate(),
      lastLogin: randomUpdatedDate(),
      tempMinBefore: randomInt(-10, 15),
      TempMaxBefore:  randomInt(35, 100),
      tempMaxCurrent: randomInt(35,100),
      tempMinCurrent: randomInt(35,100),
      altitude: randomInt(1850,10000),
    },
  ];

const handleDelete = (event: any, cell: any) => {
// Delete logic here
    event.stopPropagation();
    console.log('HANDLE DELETE on PAGE DASH TABLE ***', event)
    const dataRow = cell.data
    console.log("🚀 ~ file: dashboard-table.tsx:189 ~ handleDelete ~ dataRow:", dataRow)
};

const handleUpdate = (event: any, cell: any) => {
        event.stopPropagation();
        console.log('HANDLE UPDATE**** on PAGE DASH TABLE ***', event)
        const dataRow = cell
        console.log("🚀 ~ file: dashboard-table.tsx:196 ~ handleUpdate ~ dataRow:", dataRow)
    };

const columns = [
    {
        headerName: '',
        headerCheckboxSelection: true,
        checkboxSelection: true,
        width: 20
      },
{
    field: 'id',
    headerName: 'ID',
    flex: 1,
    cellRendererFramework: (cellValues: any) => {
        const { altitude, id, name, tempMinBefore, TempMaxBefore, tempMaxCurrent, tempMinCurrent  } = cellValues.data
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', border: 'solid 2px red' }}>
                <Chip size="small" label={`${id}`} />
                <Chip size="small" label={`${name}`} />
                <Chip size="small" label={`T Min: ${tempMinBefore}`} />
                <Chip size="small"label={`T Max: ${TempMaxBefore}`} />
                <Chip size="small" label={`T Min Ac: ${tempMinCurrent}`} />
                <Chip size="small" label={`T Max Ac: ${tempMaxCurrent}`} />
                <Chip size="small" label={`Alt: ${altitude}`} />
          </div>
        )
    },
},
{
    headerName: 'Personal Info',
    flex: 1,
    children: [
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            flex: 1
        },
        {
            field: 'lastName',
            headerName: 'lastName',
            editable: true,
            flex: 1
        },
        {
            field: 'age',
            headerName: 'Age',
            editable: true,
            width: 70
        },
    ]
},
{
    headerName: 'Authentication Info',
    flex: 1,
    children: [
        {
            field: 'dateCreated',
            headerName: 'Date Created',
            flex: 1
        },
        {
            field: 'lastLogin',
            headerName: 'Last Login',
            flex: 1
        },
    ]
},
{
    field: 'fullName',
    headerName: 'Full name',
    flex: 1,
    cellRendererFramework: (cellValues: any) => {
        return <IconButton size="small"><AccountBoxIcon />{ cellValues.data.name} { cellValues.data.lastName}</IconButton>
    },
},
{
    field: 'actions',
//   type: 'actions',
    headerName: 'Actions',
    flex: 1,
    cellRendererFramework: (cellValues: any) => {
        return <>
            <IconButton onClick={(event) => handleDelete(event, cellValues)}>
                <DeleteIcon />
            </IconButton>
            <IconButton onClick={(event) => handleUpdate(event, cellValues)}>
                <EditIcon />
            </IconButton>
            <IconButton>
                <Link href={`#${cellValues.data.id}`}><LinkIcon /></Link>
            </IconButton>
        </>
    },
    },
];

export default function Dashboard() {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { data } = useSession()

  const logout = () => {
    console.log("SALIENDO")
    signOut()
  }

  const handleSearch = (query: string) => {
    const filteredData = rowsD.filter((row) =>
      Object.values(row).some((value) => {
          console.log("🚀 ~ file: dashboard-table.tsx:295 ~ Object.values ~ value:", typeof value === 'number' && value === parseFloat(query))
        return typeof value === 'number' ? value === parseFloat(query) : value.toString().toLowerCase().includes(query.toLowerCase())
      })
    );
    console.log("🚀 ~ file: dashboard-table.tsx:295 ~ handleSearch ~ filteredData:", filteredData)
    setFilteredData(filteredData);
  };

  return (
    <div>
      { data?.user ?
          (<div>
            <h5>Dashboard - SigOut section</h5>
            <button type="button" onClick={logout}>SigOut</button>
          </div>)
          : (<div>
            <h1>DASHBOARD AG GRID TABLE</h1>
            <SearchText onSearch={handleSearch} />
            <DataTableAG rowsData={filteredData.length > 0 ? filteredData : rowsD} columnsDefs={columns} />
          </div> )
        }
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  // const session = await getSession(context)

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      // session,
    },
  }
}
