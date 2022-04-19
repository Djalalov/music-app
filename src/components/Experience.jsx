import React from "react";
import Feature from "./Feature";

const Experience = () => {
	return (
		<div className="experience flex flex-col items-center justify-start px-20 bg-[#020917] h-[60rem] pt-72 mt-[-10rem] relative z-20 rounded-b-[5rem]">
			{/* icon */}
			<img src={require("../assets/Path318.png")} alt="" className="w-20" />
			{/* heading */}
			<div className="headline mt-7 flex flex-col items-center text-sm">
				<span>An Amazing App Can Change Your Daily Life</span>
				<span>
					<b>Music Experience</b>
				</span>
			</div>
			{/* features  */}
			<div className="feature flex items-center justify-around mt-24 w-full">
				<Feature icon="Group2" title="For Live Music" />
				<Feature icon="MusicIcon" title="For Daily Music" />
				<Feature icon="Group4" title="For Artists" />
			</div>
		</div>
	);
};

export default Experience;
