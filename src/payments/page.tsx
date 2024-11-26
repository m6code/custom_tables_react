import { LDataTable } from '@/payments/listing-data-table.tsx';
import { listingsColumns } from '@/payments/listings-columns.tsx';
import { listings } from '@/payments/listingData.tsx';

export default function DemoPage() {
  return (
    <div className="container mx-auto py-10">
      {/*<DataTable columns={columns} data={payments} />*/}
      <LDataTable
        columns={listingsColumns}
        data={listings.data}
        meta={listings.meta}
      />
    </div>
  );
}
