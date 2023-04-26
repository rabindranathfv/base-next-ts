import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import CancelIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

import {
  GridColDef,
  GridRowsProp,
  DataGrid,
  GridRowId,
  GridCellModes,
  GridEventListener,
  GridCellModesModel,
  GridValueGetterParams,
  GridActionsCellItem,
  GridPreProcessEditCellProps
} from '@mui/x-data-grid';

import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import Link from 'next/link';

interface EditToolbarProps {
    selectedCellParams?: SelectedCellParams;
    cellModesModel: GridCellModesModel;
    setCellModesModel: (value: GridCellModesModel) => void;
    cellMode: 'view' | 'edit';
  }

interface SelectedCellParams {
id: GridRowId;
field: string;
}

const handleDelete = (event, cell) => {
  // Delete logic here
  event.stopPropagation();
  console.log('HANDLE DELETE FUNCTION HERE ***', event,cell)
};

const handleUpdate = () => {
  // Update logic here
};

const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      renderCell: (cellValues) => {
        return <Link href={`#${cellValues.row.id}`}>{cellValues.row.id}</Link>;
      }
    },
    { field: 'name', headerName: 'Name', flex: 1, editable: true },
    {
      field: 'lastName', headerName: 'lastName',
      flex: 1, editable: true,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
      const hasError = params.props.value.length < 3;
        return { ...params.props, error: hasError };
      },
    },
    {
      field: 'age', headerName: 'Age',
      type: 'number', editable: true,
      preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
        const hasError = params.props.value < -1;
        return { ...params.props, error: hasError };
      },
    },
    {
      field: 'dateCreated',
      headerName: 'Date Created',
      type: 'date',
      flex: 1,
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      type: 'dateTime',
      flex: 1
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        flex: 1,
        valueGetter: (params: GridValueGetterParams) => {
            return `${params.row.name || ''} - ${params.row.lastName || ''}`
        },
        preProcessEditCellProps: (params: GridPreProcessEditCellProps) => {
          console.log("🚀 ~ file: table.tsx:77 ~ params:", params)
          const hasError = params.props.value === '';
          console.log("🚀 ~ file: table.tsx:78 ~ hasError:", hasError)
          return { ...params.props, error: hasError };
        },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      cellClassName: 'actions',
      renderCell: (cellValues) => {
        const { id } = cellValues.row
        return <>
          <IconButton onClick={(event) => handleDelete(event, cellValues)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <Link href={`#${cellValues.row.id}`}><LinkIcon /></Link>
          </IconButton>
        </>
      },
    },
  ];


// const rows: GridRowsProp = [
const rowsD = [
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: uuidv4(),
    name: randomTraderName(),
    lastName: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

function EditToolbar(props: EditToolbarProps) {
  const { selectedCellParams, cellMode, cellModesModel, setCellModesModel } = props;

  const handleSaveOrEdit = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    if (cellMode === 'edit') {
      console.log('EDITADO************')
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.View } },
      });
    } else {
      setCellModesModel({
        ...cellModesModel,
        [id]: { ...cellModesModel[id], [field]: { mode: GridCellModes.Edit } },
      });
    }
  };

  const handleCancel = () => {
    if (!selectedCellParams) {
      return;
    }
    const { id, field } = selectedCellParams;
    setCellModesModel({
      ...cellModesModel,
      [id]: {
        ...cellModesModel[id],
        [field]: { mode: GridCellModes.View, ignoreModifications: true },
      },
    });
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // Keep the focus in the cell
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        p: 1,
      }}
    >
      <p>{  JSON.stringify(props, null, 2) }</p>
      <Button
        onClick={handleSaveOrEdit}
        onMouseDown={handleMouseDown}
        disabled={!selectedCellParams}
        variant="outlined"
      >
        {cellMode === 'edit' ? 'Save' : 'Edit'}
      </Button>
      <Button
        onClick={handleCancel}
        onMouseDown={handleMouseDown}
        disabled={cellMode === 'view'}
        variant="outlined"
        sx={{ ml: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}

export default function DataTable() {

  const [data, setData] = React.useState<any[]>([]);
  const [rows, setRows] = React.useState<any[]>([]);
  const [searchText, setSearchText] = React.useState('');
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 4,
    page: 0,
  });
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<SelectedCellParams | null>(null);
  const [cellModesModel, setCellModesModel] = React.useState<GridCellModesModel>({});

  React.useEffect(() => {
    setData(rowsD)
    setRows(rowsD)
    console.log('ROWS DATA IN TABLE***', rows)
  }, [])


  const handleCellFocus = React.useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const row = event.currentTarget.parentElement;
      const id = row!.dataset.id!;
      const field = event.currentTarget.dataset.field!;
      setSelectedCellParams({ id, field });
    },
    [],
  );

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return 'view';
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || 'view';
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
      if (cellMode === 'edit') {
        // Prevents calling event.preventDefault() if Tab is pressed on a cell in edit mode
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode],
  );

    // search external
  function escapeRegExp(value: string) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  const requestSearch = (searchValue: string) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = data.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
    console.log("🚀 ~ file: table.tsx:431 ~ requestSearch ~ filteredRows: RESULTS****", filteredRows)
    setRows(filteredRows);
  };

  return (
    <div style={{ height: 500, marginLeft: 10, marginRight: 20, flex: '100%' }}>
      <Box>
                    <TextField
                        variant="standard"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value); requestSearch(e.target.value) }}
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: <SearchIcon fontSize="small" color="action" />,
                            endAdornment: (
                                <IconButton
                                    title="Clear"
                                    aria-label="Clear"
                                    size="small"
                                    style={{ visibility: searchText ? 'visible' : 'hidden', borderRadius: "57%", paddingRight: "1px", margin: "0", fontSize: "1.25rem" }}
                                    onClick={(e) => {setSearchText(''); setRows(data)} }
                                >
                                    <ClearIcon fontSize="small" color="action" />
                                </IconButton>
                            ),
                        }}
                        sx={{
                            width: { xs: 1, sm: 'auto' }, m: (theme) => theme.spacing(1, 0.5, 1.5),
                            '& .MuiSvgIcon-root': {
                                mr: 0.5,
                            },
                            '& .MuiInput-underline:before': {
                                borderBottom: 1,
                                borderColor: 'divider',
                            },
                        }}
                    />
                </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: {
            cellMode,
            selectedCellParams,
            setSelectedCellParams,
            cellModesModel,
            setCellModesModel,
          },
          cell: {
            onFocus: handleCellFocus,
          },
        }}
      />
    </div>
  );
}