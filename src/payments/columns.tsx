import { ColumnDef } from '@tanstack/react-table';
import { Payment } from '@/payments/PaymentData.tsx';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 's_n',
    header: 'S/N',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];
