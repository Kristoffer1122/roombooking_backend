import { supabase } from "../lib/supabaseClient";

export default async function UserTable() {

	const { data: users, error } = await supabase
		.from("users")
		.select("*");

	if (error) {
		console.error("Error fetching users:", error);
		return <div>Error loading users</div>;
	}

	return (
		<div className="p-4 ">
			<h2 className="text-xl font-bold mb-4">User List</h2>
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-200 text-black">
						<th className="border border-gray-300 px-4 py-2">ID</th>
						<th className="border border-gray-300 px-4 py-2">User Name</th>
						<th className="border border-gray-300 px-4 py-2">User Password</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user: any) => (
						<tr key={user.id}>
							<td className="border border-gray-300 px-4 py-2">{user.id}</td>
							<td className="border border-gray-300 px-4 py-2">{user.user_name}</td>
							<td className="border border-gray-300 px-4 py-2">{user.user_password}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

