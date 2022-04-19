import React from "react";

const DownloadAds = () => {
	return (
		<div className="download">
			<div className="download__images flex">
				<img
					src={require("../assets/AppStore.png")}
					alt=""
					className=" rounded-lg h-10 w-30 mr-8"
				/>
				<img
					src={require("../assets/GooglePlay.png")}
					alt=""
					className="rounded-lg h-10 w-30"
				/>
			</div>
		</div>
	);
};

export default DownloadAds;
