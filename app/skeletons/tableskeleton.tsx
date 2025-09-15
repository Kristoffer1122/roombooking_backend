
export default function TableSkeleton() {
	return (
		<div className="p-4 animate-pulse">
			<div className="h-6 w-32 bg-gray-300 rounded mb-4" />

			<div className="overflow-hidden rounded-lg border border-gray-300">
				<table className="min-w-full border-collapse">
					<thead>
						<tr className="bg-gray-200">
							{Array.from({ length: 3 }).map((_, i) => (
								<th
									key={i}
									className="border border-gray-300 px-4 py-2"
								>
									<div className="h-4 w-20 bg-gray-300 rounded" />
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{Array.from({ length: 5 }).map((_, rowIdx) => (
							<tr key={rowIdx}>
								{Array.from({ length: 3 }).map((_, colIdx) => (
									<td
										key={colIdx}
										className="border border-gray-300 px-4 py-2"
									>
										<div className="h-4 w-full bg-gray-200 rounded" />
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

