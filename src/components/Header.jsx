import React from "react";
import CenterMenu from "./CenterMenu";

const Header = () => {
	return (
		<div className="header bg-[#081730] flex items-center justify-between px-20 pt-12 text-base ">
			{/* Logo */}
			<img
				src={require("../assets/MusicLogo.png")}
				alt=""
				className="logo w-42 h-42"
			/>

			{/* Side Menu */}
			<CenterMenu />

			{/* Buttons */}
			<div className="buttons flex">
				<button className="mr-4 hover:bg-[#F00654] border-2 border-[#F00654] rounded-xl px-4 py-[1.6px]">
					Sign In
				</button>
				<button className="bg-[#F00654] border-2 rounded-xl border-[#F00654] px-4 py-[1.6px]">
					Log In
				</button>
			</div>
		</div>
	);
};

export default Header;
