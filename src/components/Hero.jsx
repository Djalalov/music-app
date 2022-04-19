import React, { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const Hero = () => {
	const [elementIsVisible, setElementIsVisible] = useState(false);
	const bg = {
		true: {
			left: "7rem",
		},
		false: {
			left: "19rem",
		},
	};
	const musicPlayer = {
		true: {
			left: "295px",
		},
		false: {
			left: "235px",
		},
	};
	const rect = {
		true: {
			left: "11rem",
		},
		false: {
			left: "13rem",
		},
	};
	const heart = {
		true: {
			left: "9rem",
		},
		false: {
			left: "12.5rem",
		},
	};
	return (
		<VisibilitySensor
			onChange={isVisible => setElementIsVisible(isVisible)}
			minTopValue={300}
		>
			<div className="wrapper bg-[#071630] flex items-center justify-between px-20 rounded-b-[7rem] w-full h-[35rem] relative z-30">
				{/* Left */}
				<div className="headings flex flex-col items-start justify-center h-full text-5xl leading-snug">
					<span>Wanna Feel The</span>
					<span>
						<b> Best Quality Music ?</b>
					</span>

					<span className="text-base text-[#525D6E] mt-5">
						Dolor sit amet, consectetur adipisicing elit. Perspiciatis ut
						asperiores, a Nemo, repellendus.
					</span>
					<span className="text-base text-[#525D6E]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
						repellendus.
					</span>

					<div className="mt-5">
						<DownloadAds />
					</div>
				</div>

				{/* Right */}
				<div className="images relative w-[50%] mt-20">
					<motion.img
						variants={bg}
						animate={`${elementIsVisible}`}
						transition={{ duration: 1, type: "ease-out" }}
						src={require("../assets/backgraphics.png")}
						alt=""
						className="absolute top-[-9.5rem] left-[19rem]"
					/>

					<img
						src={require("../assets/p1.png")}
						alt=""
						className="absolute top-[-15rem] h-[34rem] left-[13rem]"
					/>
					<motion.img
						variants={musicPlayer}
						animate={`${elementIsVisible}`}
						transition={{
							duration: 1,
							type: "ease-out",
						}}
						src={require("../assets/p2.png")}
						alt=""
						className="absolute left-[235px] top-[94px] w-[175px]"
					/>

					<motion.img
						variants={rect}
						animate={`${elementIsVisible}`}
						transition={{
							type: "ease-out",
							duration: 1,
						}}
						src={require("../assets/p3.png")}
						alt=""
						className="absolute w-[5rem] left-[13rem] top-[12rem]"
					/>

					<motion.img
						variants={heart}
						animate={`${elementIsVisible}`}
						transition={{
							type: "ease-out",
							duration: 1,
						}}
						src={require("../assets/p4.png")}
						alt=""
						className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
					/>
				</div>
			</div>
		</VisibilitySensor>
	);
};

export default Hero;
