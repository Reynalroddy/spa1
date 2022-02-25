import React from "react";
import {
  useExpanded,
  useGroupBy,
  useSortBy,
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { GlobalFilter } from "./Search";

export default function ProductTable({ columns, data }) {
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Edit",
        Header: "Edit",
        Cell: ({ row }) => (
          <button onClick={() => alert("Editing: " + row.values.price)}>
            Edit
          </button>
        ),
      },
    ]);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = useTable(
    { columns, data },
    useGlobalFilter,

    useGroupBy,

    useSortBy,

    useExpanded,
    usePagination,
    tableHooks
  );

  const { pageIndex, pageSize } = state;
  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={state.globalFilter}
      />
      <div class="table-responsive">
        <table
          {...getTableProps()}
          className="table table-bordered table-dark table-striped"
        >
          <thead className="table-dark">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {/*   {column.canGroupBy && column.id === "category" ? (
                <span {...column.getGroupByToggleProps()}>
                  {" "}
                  {column.isGrouped ? "+ " : "- "}
                </span>
              ) : null} */}

                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          /* cell.isGrouped ? (
                    // If it's a grouped cell, add an expander and row count
                    <>
                      <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? "-" : "+"}
                      </span>{" "}
                      {cell.render("Cell")} ({row.subRows.length})
                    </>
                  ) : cell.isAggregated ? (
                    // If the cell is aggregated, use the Aggregated
                    // renderer for cell
                    cell.render("Aggregated")
                  ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                    // Otherwise, just render the regular cell */
                          cell.render("Cell")
                        }
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <span>
            go to page
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNo = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(pageNo);
              }}
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 15, 25].map((it) => {
              return (
                <option key={it} value={it}>
                  {it}
                </option>
              );
            })}
          </select>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>
          <span>
            page <b>{pageIndex + 1}</b> of {pageOptions.length}
          </span>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            prev
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            next
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
}
/* <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.canGroupBy && column.id === "category" ? (
                  <span {...column.getGroupByToggleProps()}>
                    {" "}
                    {column.isGrouped ? "+ " : "- "}
                  </span>
                ) : null}

                {column.render("Header")}
                <span> 
                  {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.isGrouped ? (
                      // If it's a grouped cell, add an expander and row count
                      <>
                        <span {...row.getToggleRowExpandedProps()}>
                          {row.isExpanded ? "-" : "+"}
                        </span>{" "}
                        {cell.render("Cell")} ({row.subRows.length})
                      </>
                    ) : cell.isAggregated ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      cell.render("Aggregated")
                    ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      cell.render("Cell")
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table> */
