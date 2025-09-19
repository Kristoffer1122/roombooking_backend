// app/page.tsx
export const dynamic = "force-dynamic";

import UserTable from "./comps/UserTable"
import BookingTable from "./comps/Bookings"
import TableSkeleton from "./skeletons/tableskeleton"
import { Suspense } from "react"

export default function Home() {
	return (
		<div>
			<Suspense fallback={<TableSkeleton />}>
				<UserTable />
			</Suspense>
			<Suspense fallback={<TableSkeleton />}>
				<BookingTable />
			</Suspense>
		</div>
	);
}
