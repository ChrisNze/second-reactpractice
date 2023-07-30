import React, { useState } from "react";

const ExpandableText = ({ children }) => {
	const [expandable, setExpandable] = useState(true);
	const limit = 300;
	if (!children) return null;

	if (children.length <= limit) {
		return children;
	}
	const summary = expandable ? children.substring(0, limit) + "..." : children;
	return (
		<div>
			{summary}
			<button className="btn btn-primary" style={{ marginLeft: "3px" }} onClick={() => setExpandable(!expandable)}>
				{expandable ? "Read More" : "Show Less"}
			</button>

			{/* <h1 className="display-3">Completed</h1> */}
		</div>
	);
};

export default ExpandableText;
