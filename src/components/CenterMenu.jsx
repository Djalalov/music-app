import React from "react";

const liStyle = "mr-12 hover:cursor-pointer";

const Center = () => {
	return (
		<div className="menu flex">
			<ul className="flex w-[100%] justify-between">
				<li className={liStyle}>Home</li>
				<li className={liStyle}>About</li>
				<li className={liStyle}>Performer</li>
				<li className={liStyle}>Event Schedule</li>
			</ul>
		</div>
	);
};

export default Center;
