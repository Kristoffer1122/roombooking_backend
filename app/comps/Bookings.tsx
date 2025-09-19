import { supabase } from "../lib/supabaseClient";

export default async function RoomTable() {

	const { data: rooms, error } = await supabase
		.from("bookings")
		.select("*");
	console.log("Rooms:", rooms);
	console.log("Bookings:", rooms);

	if (error) {
		console.error("Error fetching rooms:", error);
		return <div>Error loading rooms</div>;
	}

	return (
		<div className="p-4 ">
			<h2 className="text-xl font-bold mb-4">Room List</h2>
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-200 text-black">
						<th className="border border-gray-300 px-4 py-2">ID</th>
						<th className="border border-gray-300 px-4 py-2">Booked Until</th>
						<th className="border border-gray-300 px-4 py-2">Booked Since</th>
						<th className="border border-gray-300 px-4 py-2">Booked By</th>
					</tr>
				</thead>
				<tbody>
					{rooms?.map((room: any) => (
						<tr key={room.id}>
							<td className="border border-gray-300 px-4 py-2">{room.id}</td>
							<td className="border border-gray-300 px-4 py-2">{room.booking_date_start}</td>
							<td className="border border-gray-300 px-4 py-2">{room.booking_date_end}</td>
							<td className="border border-gray-300 px-4 py-2">{room.booked_by}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

