import React, { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Search = () => {
	const [elementVisible, setElementVisible] = useState(false);
	const bg = {
		true: {
			left: "-44rem",
		},
		false: {
			left: "-50rem",
		},
	};
	const redImg = {
		true: {
			left: "18rem",
		},
		false: {
			left: "16rem",
		},
	};
	const musicImg = {
		true: {
			left: "2rem",
		},
		false: {
			left: "6rem",
		},
	};

	return (
		<div className="search relative h-[70rem] px-[5rem] bg-[#071630] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
			{/* LEFT side */}
			<div className="left flex-1">
				<motion.img
					variants={bg}
					animate={`${elementVisible}`}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					src={require("../assets/backgraphics.png")}
					alt=""
					className="absolute top-[22rem] left-[10rem] w-5/6"
				/>
				<motion.img
					src={require("../assets/d1.png")}
					alt=""
					className="w-[18rem] top-[26rem] left-[10rem] absolute"
				/>{" "}
				<motion.img
					src={require("../assets/d2.png")}
					alt=""
					className="w-[9rem] absolute top-[34rem] left-[12rem]"
				/>{" "}
				<motion.img
					variants={redImg}
					animate={`${elementVisible}`}
					transition={{
						duration: 1.2,
						type: "ease-out",
					}}
					src={require("../assets/d3.png")}
					alt=""
					className="w-[9rem] top-[34rem] left-[15rem] absolute translate-x-16"
				/>
				<motion.img
					variants={musicImg}
					animate={`${elementVisible}`}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					src={require("../assets/d4.png")}
					alt=""
					className="w-[15rem] top-[54rem] translate-x-28 absolute"
				/>
			</div>

			{/* right side */}
			<div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
				{/* Search */}
				<div className="searchbar flex justify-start w-[100%]">
					<input
						type="text"
						placeholder="Enter the keyword or URL"
						className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
					/>
					{/* SearchIcon */}
					<div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
						<img
							src={require("../assets/search.png")}
							alt=""
							className="w-[1.5rem]"
						/>
					</div>
				</div>
				{/* tild icon */}
				<div className="tild flex justify-start mt-7 items-center w-[100%]">
					<img
						src={require("../assets/Path318.png")}
						alt=""
						className="w-[5rem]"
					/>
				</div>

				{/* paragraph */}
				<div className="detail flex flex-col mt-5 text-4xl">
					<span>Search Music by</span>
					<span>
						<b>Name or Direct URL</b>
					</span>
					<span className="text-sm mt-3 text-[#4D586A]">
						Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
						eget. Vestibulum ullamcorper <br /> volutpat varius.
					</span>
				</div>

				{/* Music Player */}
				<VisibilitySensor onChange={isVisible => setElementVisible(isVisible)}>
					<MusicPlayer />
				</VisibilitySensor>
			</div>
		</div>
	);
};

export default Search;
