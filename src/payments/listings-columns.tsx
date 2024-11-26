import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ListingsResponseDatum } from '@/payments/listingData.tsx';

export const listingsColumns: ColumnDef<ListingsResponseDatum>[] = [
  // {
  //   accessorKey: 's_n',
  //   header: () => <div className="text-left">S/N</div>,
  //   cell: ({ row }) => {
  //     return <div className="p-0 text-left">{row.getValue('s_n')}</div>;
  //   },
  // },
  {
    accessorKey: 'unit_name',
    header: 'Unit Name',
    cell: ({ row }) => {
      return row.original.attributes.property_unit.data.attributes.property
        .name;
    },
  },
  {
    accessorKey: 'street_address',
    header: 'Street Address',
    cell: ({ row }) => {
      return row.original.attributes.property_unit.data.attributes.property
        .street_address;
    },
  },
  // {
  //   accessorKey: 'amount',
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'));
  //     const formatted = new Intl.NumberFormat('en-NG', {
  //       style: 'currency',
  //       currency: 'NGN',
  //     }).format(amount);
  //
  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
