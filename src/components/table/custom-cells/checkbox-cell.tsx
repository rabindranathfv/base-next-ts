import { useState } from "react";

const CheckboxRenderer = () => {
    const [selectedRows, setSelectedRows] = useState<any>([]);
  
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, rowNode: any) => {
      if (event.target.checked) {
        setSelectedRows([...selectedRows, rowNode.data]);
      } else {
        setSelectedRows(selectedRows.filter((row: any) => row.id !== rowNode.data.id));
      }
    };
  
    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>, api: any) => {
      if (event.target.checked) {
        api.forEachNode((node: any) => {
          setSelectedRows([...selectedRows, node.data]);
        });
      } else {
        setSelectedRows([]);
      }
    };
  
    return (
      <div>
        <input type="checkbox" onChange={event => handleSelectAll(event, api)} />
        {api.forEachNode(node => (
          <input
            type="checkbox"
            checked={selectedRows.some(row => row.id === node.data.id)}
            onChange={event => handleCheckboxChange(event, node)}
          />
        ))}
      </div>
    );
  };
  
  // You also need to register the `checkboxRenderer` component as a cellRenderer in the grid options:
  const gridOptions = {
    frameworkComponents: {
      checkboxRenderer: CheckboxRenderer,
    },
    // other grid options...
  };
  