import React, { useMemo, useState } from 'react'
import {columnDef} from './columns'
import dataJson from '../table.json'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

function Main8() {

const [sortingData,setSortingData] = useState([])
const [filteringData,setFilteringData] = useState('')

let finalTableData = useMemo(()=>dataJson,[])
let finalColumnData = useMemo(()=>columnDef,[])

const tableInstance = useReactTable({
    columns:finalColumnData,
    data:finalTableData,
    getCoreRowModel:getCoreRowModel(),
    getSortedRowModel:getSortedRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    manualPagination: true,
  
    state:{
        // for sort
        sorting:sortingData,
        // for filter
        globalFilter:filteringData
    },
    onSortingChange:setSortingData,
    onGlobalFilterChange:setFilteringData
})

  return (
    <div>
        <input 
        type="text" 
        className='form-control border-primary border-4' placeholder='Search Data....' 
        value={filteringData}
        onChange={e=>setFilteringData(e.target.value)}
        />
<table className='table'>
    <thead>
       {
        tableInstance.getHeaderGroups().map(headerEl=>{
            return <tr key={headerEl.id}>
                {
                    headerEl.headers.map(columnEl=>{
                     return <th 
                     key={columnEl.id} 
                     colSpan={columnEl.colSpan} 
                     onClick={columnEl.column.getToggleSortingHandler()}
                     >
                            {
                                // console.log(columnEl)
                                flexRender(
                                    columnEl.column.columnDef.header,
                                    columnEl.getContext()
                                )
                            }
                            {/* for sorting data */}

{
    {asc:'⬆️',desc:'⬇️'}[columnEl.column.getIsSorted() ?? null ]
}

                        </th>
                    })
                }
            </tr>
        })
       }
    </thead>
    <tbody>
 {
// console.log(tableInstance.getRowModel())
tableInstance.getRowModel().rows.map(rowEl=>{
    return <tr key={rowEl.id}>
        {
            // console.log(rowEl.getVisibleCells())
            rowEl.getVisibleCells().map(cellEl=>{
                return <td id={cellEl.id}>
                    {
                        flexRender(
                            cellEl.column.columnDef.cell,
                            cellEl.getContext()
                        )
                    }
                </td>
            })
        }
    </tr>
})
 }
    </tbody>
</table>

<div className="border border-danger p-4">

<button 
className='btn btn-info' 
onClick={()=>tableInstance.setPageIndex(0)} 
disabled={!tableInstance.getCanPreviousPage()}
>First Page</button>

<button 
className='btn btn-secondary ms-2' 
onClick={()=>tableInstance.previousPage()} 
disabled={!tableInstance.getCanPreviousPage()}
>previousPage Page</button>

<button 
className='btn btn-warning ms-2' 
onClick={()=>tableInstance.nextPage()}
disabled={!tableInstance.getCanNextPage()}
>Next  Page</button>

<button className='btn btn-success ms-2' 
onClick={()=>tableInstance.setPageIndex(tableInstance.getPageCount() -1 )}
disabled={!tableInstance.getCanNextPage()}
> Last  Page</button>

</div>
{/* {console.log(tableInstance)} */}

<br /><br /><br /><br />

<ul>
    <li> Current Page Number = {tableInstance.options.state.pagination.pageIndex} </li>
    <li> Total pages =  {tableInstance.getPageCount()} </li>
</ul>
<input 
type="number"
defaultValue={tableInstance.options.state.pagination.pageIndex}
onChange={e=>tableInstance.setPageIndex(e.target.value)}
/>

<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br /><br />
    </div>
  )
}

export default Main8