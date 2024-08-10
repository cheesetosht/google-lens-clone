import { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";

export const Crop = ({ imgSrc }: { imgSrc: string }) => {
	const cropperRef = useRef<ReactCropperElement>(null);
	const onCrop = () => {
		const cropper: any = cropperRef.current?.cropper;
		console.log(cropper.getCroppedCanvas().toDataURL());
	};

	return (
		<div className="relative w-full h-full">
			<div className="shimmer-dot top-[10%] left-[12%]"></div>
			<div className="shimmer-dot top-[24%] right-[20%]"></div>
			<div className="shimmer-dot bottom-[20%] right-[12%]"></div>
			<div className="shimmer-dot bottom-[40%] right-[40%]"></div>
			<Cropper
				src={imgSrc}
				style={{ width: "100%", height: "860px" }}
				// initialAspectRatio={1}
				guides={false}
				crop={onCrop}
				ref={cropperRef}
			/>
		</div>
	);
};
