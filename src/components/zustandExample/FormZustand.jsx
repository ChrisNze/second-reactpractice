import React, { useEffect } from "react";
import useZustand from "./zustand";

const FormZustand = () => {
	const { firstName, lastName, age, changeFirstName, changeLastName, changeAge, addItems, expense, selectCategory, changeCategory } = useZustand();

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(expense);
	};

	return (
		<div>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="firstName">FirstName</label>
				<br />
				<input type="text" name="firstName" value={firstName} onChange={changeFirstName} />

				<br />
				<label htmlFor="lastName">LastName</label>
				<br />
				<input type="text" name="lastName" value={lastName} onChange={changeLastName} />
				<br />
				<label htmlFor="age">Age</label>
				<br />
				<input type="number" name="age" value={age} onChange={changeAge} />
				<br />
				<br />
				<select
					id=""
					onChange={(e) => {
						selectCategory(e);
					}}>
					<option value=""></option>
					<option value="Grocery">Grocery</option>
					<option value="breverages">Breverages</option>
					<option value="foods">Foods</option>
					<option value="milk">Milk</option>
				</select>
				<br />
				<br />
				<button className="btn btn-primary" role="button" onClick={addItems}>
					Submit
				</button>
				<button className="btn btn-secondary">Delete All</button>
				<button className="btn btn-danger">Clear</button>
			</form>
		</div>
	);
};

export default FormZustand;
