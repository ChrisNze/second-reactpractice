import useCategory from "./hooks/useCategory";
import useZustand from "./zustand";

const ExpenseTrackerZustand = () => {
	const { expenseCategory, deleteItem } = useZustand();
	const { categoryArr, sumAmount } = useCategory();

	return (
		<>
			{categoryArr.length !== 0 ? (
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>S/N</th>
							<th>Description</th>
							<th>Amount</th>
							<th>Category</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{categoryArr.map((item, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.description}</td>
								<td>{item.amount}</td>
								<td>{item.category}</td>
								<td>
									<button className="btn btn-outline-danger" onClick={() => deleteItem(item)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>

					<tfoot>
						<tr>
							<td>Total</td>
							<td></td>
							<td>${sumAmount}</td>
							<td></td>
						</tr>
					</tfoot>
				</table>
			) : (
				<p className="text-danger">{expenseCategory} not found</p>
			)}
		</>
	);
};

export default ExpenseTrackerZustand;
