import { useEffect, useState } from "react";
import { useRef } from "react";
import Form from "./useContexExample/FormUseContext";

const Practice = () => {
	const ref = useRef(null);
	const [on, setOn] = useState(false);
	// const [count]
	const [x, setX] = useState("#fff");
	const [message, setMessage] = useState("Form not Out");
	// const out = () => {
	// 	// return <p>{on && message}</p>;
	// 	// return <Form />;
	// 	setOn(true);
	// 	setX("#000");
	// };

	// const onClick = () => {

	// };

	useEffect(() => {
		const p = setTimeout(() => {
			// setOn("Connecting.............");
			setOn(false);
			// setMessage("Form Out");
			setX("#000");
			console.log("Form Out");
		}, 5000);

		// if (on >= 10)
		return () => {
			setOn(true);
			// clearTimeout(p);
			// // setTimeout(() => {
			// setMessage("Form disappears........");
			console.log("Form disappears........");
			// }, 1000);
		};
	}, []);

	// ref.current.focus();
	return (
		<>
			<h1>{message}</h1>
			{on && <Form />}
			<div style={{ backgroundColor: x }}>
				{/* <input type="text" ref={ref} /> */}
				<button
					onClick={() => {
						// clearInterval(p);
						setOn(false);
						setX("#fff");
						setMessage("Form disappears");
					}}>
					Click
				</button>
				{/* <h1>{message}</h1> */}
				{/* {on && out()} */}

				{/* {on && <h1>Yea</h1>} */}
			</div>
		</>
	);
};

export default Practice;
