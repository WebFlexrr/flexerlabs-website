"use client";

import FacebookPixel from "./FacebookPixel";

export default function ClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<FacebookPixel pixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID!} />
			{children}
		</>
	);
}
