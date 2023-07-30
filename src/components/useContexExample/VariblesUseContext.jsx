import React, { useState } from "react";
import TaskContainer from "./TaskContext";

const VariblesUseContext = ({ children }) => {
	const [filterExpensesValue, setFilterExpenses] = useState("");
	const [expense, setExpense] = useState([
		{ id: 1, description: "Biscuit", amount: 100, category: "Grocery" },
		{ id: 2, description: "Biscuit", amount: 200, category: "breverages" },
		{ id: 3, description: "Biscuit", amount: 300, category: "foods" },
		{ id: 4, description: "Biscuit", amount: 400, category: "milk" },
	]);

	const [person, setPerson] = useState({
		firstName: "",
		lastName: "",
		age: "",
	});

	const { firstName, lastName, age } = person;

	const valueNum = filterExpensesValue ? expense.filter((item) => item.category === filterExpensesValue) : expense;

	const clearAll = () => {
		valueNum.forEach((cur) => (cur.description = ""));
		// console.log(clear);
		setExpense(valueNum);
	};

	const changeFirstName = (e) => {
		setPerson({ ...person, firstName: e.target.value });
	};
	const changeLastName = (e) => {
		setPerson({ ...person, lastName: e.target.value });
	};
	const changeAge = (e) => {
		setPerson({ ...person, age: e.target.value });
	};

	const addItems = () => {
		const newItem = {
			id: valueNum.length + 1,
			description: firstName,
			amount: parseInt(age),
			category: lastName,
		};

		setExpense([...expense, newItem]);
		setPerson({
			firstName: "",
			lastName: "",
			age: "",
		});
	};

	// console.log(expense);

	const deleteItem = (id) => {
		const items = expense.filter((item) => item !== id);
		setExpense(items);
	};

	const filterExpense = (itemValue) => {
		setFilterExpenses(itemValue);
	};

	let sum = 0;

	valueNum.forEach((cur) => (sum = cur.amount + sum));
	return (
		<TaskContainer.Provider
			value={{
				valueNum,
				sum,
				deleteItem,
				firstName,
				lastName,
				age,
				changeFirstName,
				changeLastName,
				changeAge,
				addItems,
				filterExpense,
				setExpense,
				clearAll,
			}}>
			{children}
		</TaskContainer.Provider>
	);
};

export default VariblesUseContext;
