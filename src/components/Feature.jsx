import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const Feature = ({ icon, title }) => {
	const variant = {
		true: { transform: "scale(1)" },
		false: { transform: "scale(0.5)" },
	};

	const [elementVisable, setElementVisable] = useState(false);

	return (
		<VisibilitySensor onChange={isVisible => setElementVisable(isVisible)}>
			<div className="feature flex items-center justify-center flex-col relative text-center mx-12">
				{/* icon */}
				<motion.div
					variants={variant}
					transition={{
						duration: 1,
						type: "ease-out",
					}}
					animate={`${elementVisable}`}
					className="icon bg-[#081730] rounded-2xl p-4"
				>
					<img src={require(`../assets/${icon}.png`)} alt="" className="w-12" />
				</motion.div>

				<span className=" mt-5">{title}</span>
				<span className="text-[#707070] mt-4 ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquid
					reiciendis commodi, ad illum eius?
				</span>

				<span className=" text-[#E600FF] underline mt-12 hover:cursor-pointer">
					Learn more
				</span>
			</div>
		</VisibilitySensor>
	);
};

export default Feature;
