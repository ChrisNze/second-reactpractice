import { useContext } from "react";
import TaskContainer from "./TaskContext";

const FormUseContext = () => {
	const { valueNum, firstName, lastName, age, changeFirstName, changeLastName, changeAge, addItems, filterExpense, setExpense, clearAll } =
		useContext(TaskContainer);
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="firstName">FirstName</label>
				<br />
				<input
					type="text"
					name="firstName"
					value={firstName}
					onChange={(e) => {
						changeFirstName(e);
					}}
				/>
				{/* {firstName === "" && <p className="text-danger">Please, enter your firstName</p>}
				{firstName.length > 4 && <p className="text-danger">Name should be less than 4</p>} */}
				{/* {error} */}
				{/* {firstName === "" && <p className="text-danger">Please, enter your firstName</p>} */}
				<br />
				<label htmlFor="lastName">LastName</label>
				<br />
				<input type="text" name="lastName" value={lastName} onChange={(e) => changeLastName(e.target.value)} />
				{/* {lastName === "" && <p className="text-danger">Please, enter your lastName</p>} */}
				<br />
				<label htmlFor="age">Age</label>
				<br />
				<input type="number" name="age" value={age} onChange={(e) => changeAge(e.target.value)} />
				<br />
				<br />
				<select id="" onChange={(e) => filterExpense(e.target.value)}>
					<option value=""></option>
					<option value="Grocery">Grocery</option>
					<option value="breverages">Breverages</option>
					<option value="foods">Foods</option>
					<option value="milk">Milk</option>
				</select>
				<br />
				<br />
				{/* {age === "" && <p className="text-danger">Please, enter your age</p>} */}
				<button className="btn btn-primary" role="button" onClick={addItems}>
					Submit
				</button>
				<button className="btn btn-secondary" onClick={() => setExpense([])}>
					Delete All
				</button>
				<button className="btn btn-danger" onClick={clearAll}>
					Clear
				</button>
			</form>
		</div>
	);
};

export default FormUseContext;
