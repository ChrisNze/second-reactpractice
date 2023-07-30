import useCategory from "./hooks/useCategory";
import useZustand from "./zustand";

const Testing = () => {
	const { firstName, changeFirstName } = useZustand();
	const categoryArr = useCategory();
	console.log("Rendering");
	return (
		<>
			<input type="text" value={firstName} onChange={changeFirstName} />
			<button className="btn btn-primary">Add</button>
			<button className="btn btn-secondary">Reset</button>
			<button className="btn btn-primary">Decrease</button>

			<p>No of Items added {categoryArr.length}</p>
		</>
	);
};

export default Testing;
