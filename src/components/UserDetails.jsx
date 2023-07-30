import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ExpandableText from "./ExpandableText";

const UserDetails = () => {
	const params = useParams();
	const location = useLocation();
	// console.log(params);
	// console.log(location);

	return (
		<div>
			<h1>User {params.id} Page</h1>
			{/* <h1>{location.key}</h1> */}
			{params.id === "1" && <p>Officaial page for User 1 and your unique key is {location.key}</p>}
			{params.id === "2" && <p>User 2 and your unique key is {location.key}</p>}
			{params.id === "3" && <p>page for User 3 and your unique key is {location.key}</p>}

			<ExpandableText>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia earum sunt ullam eius voluptatibus similique. Eius distinctio, at
				adipisci, animi blanditiis nam esse saepe illum dolore eos, ea cumque amet! Tempore aut iusto tenetur quam nostrum, sequi distinctio
				veniam facere, quas sint eligendi, blanditiis accusantium? Harum fugit sint cum reiciendis sequi voluptate, quam soluta iure corrupti
				aliquam assumenda ratione. Labore! Iste, voluptatum! Cumque similique nesciunt iure atque ipsum consectetur? Reprehenderit vel ad Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Laudantium temporibus quod voluptatum, doloremque obcaecati ex totam nostrum, assumenda
				odio porro vel est dolorem neque repellat sunt enim, nam harum perspiciatis.
			</ExpandableText>
		</div>
	);
};

export default UserDetails;
