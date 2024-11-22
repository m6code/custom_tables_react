import { columns } from './columns';
import { DataTable } from './data-table';
import { payments } from '@/payments/PaymentData.tsx';

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
