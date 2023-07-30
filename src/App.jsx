import { Link } from "react-router-dom";
import Example from "./components/useContexExample/ExampleUseContext";
import ExpenseTracker from "./components/useContexExample/ExpenseTracker";
import Form from "./components/useContexExample/FormUseContext";
import VariblesUseContext from "./components/useContexExample/VariblesUseContext";
import ExpenseTrackerZustand from "./components/zustandExample/ExpenseTrackerZustand";
import FormZustand from "./components/zustandExample/FormZustand";
import Testing from "./components/zustandExample/Testing";

function App() {
	// const [person, setPerson] = useState({
	// 	firstName: "Chris",
	// 	lastName: "",
	// 	address: {
	// 		city: "Portharcourt",
	// 		zipCode: 500102,
	// 		countryCode: {
	// 			code: 223,
	// 			dist: {
	// 				day: "Mon",
	// 			},
	// 		},
	// 	},
	// });

	// const [val, setVal] = useState("");
	// const [arr, setArr] = useState([
	// 	{ id: 1, firstName: "Chris", lastName: "Nze" },
	// 	{ id: 2, firstName: "Christian", lastName: "Nzeanorue" },
	// ]);
	// const [num, setNum] = useState(arr.length);

	// const changeName = () => {
	// 	// setPerson({
	// 	// 	...person,
	// 	// 	firstName: "Nze",
	// 	// 	address: {
	// 	// 		...person.address,
	// 	// 		zipCode: 102222,
	// 	// 		countryCode: { ...person.address.countryCode, code: 223455555, dist: { ...person.address.countryCode.dist, day: "Tue" } },
	// 	// 	},
	// 	// });
	// 	// const newArr = arr.map((item) => (item === "happy" ? "Chris" : item));

	// 	const newArr = {
	// 		id: val,
	// 		firstName: val,
	// 		lastName: "",
	// 	};

	// 	setArr([...arr, newArr]);
	// };

	// console.log(arr);
	// const deleteItem = (id) => {
	// 	const del = arr.map((item) => item);
	// 	const dell = del.filter((x) => x.id !== id);
	// 	// const del = arr.filter((item) => item !== id);
	// 	// console.log(del);
	// 	setArr(dell);
	// 	setNum(arr.length - 1);
	// };

	return (
		<>
			{/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
			<button
				onClick={() => {
					changeName();
					setNum(arr.length + 1);
				}}>
				Click me
			</button> */}
			{/* <h1> */}
			{/* {person.firstName} {person.address.zipCode} {person.address.countryCode.code} {person.address.countryCode.dist.day} */}
			{/* {arr.map((item, index) => ( */}
			{/* <p className="btn btn-primary" key={item.id} onClick={() => deleteItem(item.id)}> */}
			{/* {index + 1} {item.firstName} */}
			{/* </p> */}
			{/* ))} */}
			{/* </h1> */}
			{/* {num} */}
			{/*
      //////////////////////////////////////////////////

			<ExpenseTracker value={value} deleteItem={deleteItem} sum={sum} /> */}
			{/* /////////////////////// */}

			{/* UseContext Part */}

			{/* <VariblesUseContext> */}
			{/* <Practice />  */}
			{/* <Form /> */}
			{/* <ExpenseTracker /> */}
			{/* <Example /> */}
			{/* <Testing /> */}
			{/* </VariblesUseContext> */}

			{/* Zustand Part */}
			<FormZustand />
			<ExpenseTrackerZustand />
			<Testing />
			<Link to="/">Home</Link>
		</>
	);
}

export default App;

// import React from "react";
// import { useState } from "react";
// import TaskContainer from "./components/TaskContext";
// import Example from "./components/Example";

// const App = () => {
// 	const [person, setPerson] = useState({
// 		firstName: "Christian",
// 		lastName: "Nze",
// 		age: 30,
// 	});

// 	// const [person1, setPerson1] = useState("Chris");
// 	const { firstName, lastName, age } = person;
// 	return (
// 		<>
// 			<TaskContainer.Provider value={{ firstName, lastName, age }}>
// 				<Example />
// 			</TaskContainer.Provider>
// 		</>
// 	);
// };

// export default App;
