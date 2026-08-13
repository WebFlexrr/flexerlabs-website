"use client";

import { useEffect } from "react";

const FacebookPixel = ({ pixelId }: { pixelId: string }) => {
	useEffect(() => {
		import("react-facebook-pixel")
			.then((x) => x.default)
			.then((ReactPixel) => {
				ReactPixel.init(pixelId);
				ReactPixel.pageView();
			});
	}, [pixelId]);
	return null;
};

export default FacebookPixel;
