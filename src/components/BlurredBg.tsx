import React from "react";

const BlurredBg = () => {
	return (
		<div className="pointer-events-none absolute top-0 right-0 left-0 -z-10 h-[100vh] w-full overflow-hidden bg-gradient-to-b from-[#001e47]/40 via-[#020817]/80 to-[#020817]">
			<div className="relative mx-auto h-full w-full max-w-7xl">
				<div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
				<div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-indigo-600/15 blur-[120px]" />
			</div>
		</div>
	);
};

export default BlurredBg;
