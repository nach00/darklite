import Image from "next/image";
import React from "react";

const imageGallery = ["draco", "thanos", "mochi", "rogue"];

export default function ImageGallery() {
	return (
		<div className="flex flex-row justify-center gap-2 lg:gap-6">
			{imageGallery.map((image) => (
				<Image
					src={`/static/media/${image}.png`}
					alt={`Image of ${image}`}
					key={image}
					width={320}
					height={320}
					style={{ objectFit: "cover", aspectRatio: 1 }}
					className="rounded-lg lg:rounded-2xl h-[80px] lg:h-full"
				/>
			))}
		</div>
	);
}
