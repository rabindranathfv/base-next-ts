import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  SortChangedEvent,
  FilterChangedEvent,
  PaginationChangedEvent,
  CellValueChangedEvent,
  SelectionChangedEvent,
} from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

type Props = {
  rowsData: any[];
  columnsDefs: ColDef[];
};

const DataTableAG: React.FC<Props> = ({ rowsData, columnsDefs }) => {
    const [rowData, setRowData] = useState(rowsData);
    const [columnDefs] = useState(columnsDefs);
    const [gridApi, setGridApi] = useState<GridApi>();

    useEffect(() => {
      setRowData(rowsData)
    }, [rowsData])

    const defaultColDef = useMemo(() => ({ sortable: true }), [])

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setGridApi(params.api);
        const cols = params.columnApi.getColumns();
        cols?.forEach(function (col: any) {
          const colDef = col.getColDef();
        //   console.log(
        //     colDef.headerName,
        //     JSON.stringify(colDef)
        //   );
        });
      }, []);

      const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
        const selectedRows = event.api.getSelectedRows()
        console.log("🚀 ~ file: table-ag-grid.tsx:47 ~ onSelectionChanged ~ selectedRows:", selectedRows)
      }, []);

    const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
        console.log("🚀 ~ file: table-ag-grid.tsx:50 ~ onCellValueChange ~ event:", event)
      },[])

    const onSortChanged = () => {
    // TODO: Handle sort changed event
    };

    const onPaginationChanged = () => {
    // TODO: Handle pagination changed event
    };

    const paginationNumberFormatter = useCallback((params) => {
        return '[' + params.value.toLocaleString() + ']';
      }, []);

    return (
        <div className="ag-theme-alpine" style={{height: 600, flex: 1}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                rowSelection={'single'}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                onSelectionChanged={onSelectionChanged}
                onCellValueChanged={onCellValueChanged}
                suppressRowClickSelection={true}
                animateRows={true}
                pagination={true}
                paginationNumberFormatter={paginationNumberFormatter}
                paginationAutoPageSize={true}
                >
            </AgGridReact>
        </div>
    );
};

export default DataTableAG;