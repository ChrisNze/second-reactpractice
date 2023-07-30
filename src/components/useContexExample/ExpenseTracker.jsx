import { useContext } from "react";
import TaskContainer from "./TaskContext";

const ExpenseTracker = () => {
	const { valueNum, deleteItem, sum } = useContext(TaskContainer);
	return (
		<table className="table table-bordered">
			{valueNum.length !== 0 ? (
				<>
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
						{valueNum.map((item, index) => (
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
							<td>${sum.toFixed(2)}</td>
							<td></td>
						</tr>
					</tfoot>
				</>
			) : (
				<p className="text-danger">Item not found</p>
			)}
		</table>
	);
};

export default ExpenseTracker;
