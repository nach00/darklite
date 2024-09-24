import Image from "next/image";
import React from "react";

const imageGallery = ["draco", "thanos", "mochi", "rogue"];

export default function ImageGallery() {
	return (
		<div className="flex flex-row justify-center gap-6">
			{imageGallery.map((image) => (
				<Image
					src={`/static/media/${image}.png`}
					alt={`Image of ${image}`}
					key={image}
					width={320}
					height={320}
					style={{ objectFit: "cover", aspectRatio: 1 }}
					className="rounded-2xl"
				/>
			))}
		</div>
	);
}
