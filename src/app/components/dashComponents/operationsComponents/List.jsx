import React from "react";
import Card from "../../baseComponents/Card";

const List = ({ tools }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col gap-8 justify-between items-center">
				{tools.map(({ id, name, description }) => (
					<React.Fragment key={id}>
						<Card id={id} name={name} description={description} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default List;
