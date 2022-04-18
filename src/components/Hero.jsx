import React from "react";

const Hero = () => {
	return (
		<div className="wrapper bg-[#081730] flex items-center justify-between px-20 rounded-b-[7rem] w-full h-[35rem] relative">
			{/* Left */}
			<div className="headings flex flex-col items-start justify-center h-full text-5xl leading-normal">
				<span>Wanna Feel The</span>
				<span>
					<b> Best Quality Music ?</b>
				</span>

				<span className="text-base text-[#525D6E]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, <br />
					repellendus. Dolor sit, amet consectetur adipisicing elit amet
					consectetur.
				</span>
			</div>

			{/* Right */}
			<div className="images">Images</div>
		</div>
	);
};

export default Hero;
