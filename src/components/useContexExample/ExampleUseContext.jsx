import { useContext } from "react";
import TaskContainer from "./TaskContext";

const ExampleUseContext = () => {
	const { valueNum } = useContext(TaskContainer);
	return (
		<>
			<p>
				Number of items:<span className="btn btn-primary">{valueNum.length}</span>{" "}
			</p>
		</>
	);
};

export default ExampleUseContext;
