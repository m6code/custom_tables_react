import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
  });

  const goPreviousPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: prevState.pageIndex - 1,
    }));
  };

  const goNextPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: prevState.pageIndex + 1,
    }));
  };

  const goFirstPage = () => {
    goToPage(0);
  };

  const goToPage = (page: number) => {
    setPagination((prevState) => ({
      ...prevState,
      pageIndex: page,
    }));
  };

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-[#EAEAEA]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="overflow-ellipsis">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="[&_tr:nth-child(even)]:bg-[#EAEAEA80]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="overflow-ellipsis">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="pagination-ctr flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (table.getCanPreviousPage()) goPreviousPage();
            // table.previousPage(); // only works if useState is not used
          }}
          disabled={!table.getCanPreviousPage()}
        >
          <ArrowLeft />
          Previous
        </Button>
        <Button
          variant={pagination.pageIndex === 0 ? 'default' : 'ghost'}
          size="sm"
          className="rounded-lg p-4"
          onClick={() => goFirstPage()}
        >
          1
        </Button>
        <Button
          variant={pagination.pageIndex === 1 ? 'default' : 'ghost'}
          size="sm"
          className="rounded-lg p-4"
          onClick={() => goToPage(1)}
        >
          2
        </Button>
        {}
        <div
          className={
            pagination.pageIndex < 2 ||
            pagination.pageIndex > table.getPageCount() - 3
              ? 'hidden'
              : 'visible'
          }
        >
          <Button variant="default" size="sm" className="rounded-lg p-4">
            {pagination.pageIndex + 1}
          </Button>
        </div>
        <span>...</span>
        <Button
          variant={
            pagination.pageIndex === table.getPageCount() - 2
              ? 'default'
              : 'ghost'
          }
          size="sm"
          className="rounded-lg p-4"
          onClick={() => goToPage(table.getPageCount() - 2)}
        >
          {table.getPageCount() - 1}
        </Button>
        <Button
          variant={
            pagination.pageIndex === table.getPageCount() - 1
              ? 'default'
              : 'ghost'
          }
          size="sm"
          className="rounded-lg p-4"
          onClick={() => goToPage(table.getPageCount() - 1)}
        >
          {table.getPageCount()}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (table.getCanNextPage()) goNextPage();
            // table.nextPage(); // works if state is not used
          }}
          disabled={!table.getCanNextPage()}
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
