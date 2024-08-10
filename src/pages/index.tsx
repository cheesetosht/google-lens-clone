import Image from "next/image";
import { Inter } from "next/font/google";
import { Crop } from "@/components/crop";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [fileURL, setFileURL] = useState<any>();
	const [showImageSearch, toggleImageSearch] = useState(false);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles.length > 0) setFileURL(URL.createObjectURL(acceptedFiles[0]));
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/png": [".png"],
			"image/jpg": [".jpg"],
			"image/jpeg": [".jpeg"],
		},
	});

	return (
		<main className={`flex min-h-screen flex-col group w-full items-center justify-center ${inter.className}`}>
			{fileURL ? (
				<div className="flex h-full grow w-full">
					<div className="basis-1/2 bg-[#202124] py-12 px-6">
						<div className="w-full">
							<Crop imgSrc={fileURL} />
						</div>
					</div>
					<div className="basis-1/2 bg-white"></div>
				</div>
			) : (
				<div className="relative">
					<div className="relative group flex items-center text-[#9aa0a6] bg-[#202124] rounded-b-[24px] rounded-t-[24px] border border-[#5f6368]">
						<svg className="w-6 h-6 mx-3" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
							></path>
						</svg>
						<textarea
							rows={1}
							placeholder="Search anything..."
							className="w-96 resize-none py-3 text-[#e8e8e8] bg-transparent focus-within:outline-none"
						/>
						<button onClick={() => toggleImageSearch(true)}>
							<svg className="h-6 w-6 mx-3" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
								<rect fill="none" height="192" width="192"></rect>
								<g>
									<circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
									<circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
									<path
										fill="#ea4335"
										d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
									></path>
									<path
										fill="#fbbc04"
										d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
									></path>
									<path
										fill="#4285f4"
										d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
									></path>
								</g>
							</svg>
						</button>
					</div>
					{showImageSearch && (
						<div className="text-[#e8e8e8] absolute top-0 p-px bg-[#303134] rounded-[24px] w-full pb-5 px-5">
							<div className="flex items-center">
								<p className="text-center py-3 w-full">Search any image with Google Lens</p>
								<button className="p-3 -mr-4" onClick={() => toggleImageSearch(false)}>
									<svg
										width="24px"
										height="24px"
										fill="currentColor"
										focusable="false"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
									>
										<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
									</svg>
								</button>
							</div>
							<div
								className="bg-[#202124] rounded-lg border-dashed border-[#303134] pt-4 pb-5 px-5"
								{...getRootProps()}
							>
								<div className="flex items-center justify-center gap-4 pyx-6 py-12">
									<input {...getInputProps()} />
									<svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z"></path>
										<path d="M40.3332 13.747L17.0832 13.747L17.0832 33.122L40.3332 33.122L40.3332 13.747Z"></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.614479 12.7783L6.74988 12.7783L6.74988 14.7158L2.55198 14.7158L2.55198 18.9137L0.614479 18.9137L0.614479 12.7783Z"
											fill="#BDC1C6"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M39.3644 42.4866L39.3644 38.2887L41.3019 38.2887L41.3019 44.4241L35.1665 44.4241L35.1665 42.4866L39.3644 42.4866Z"
											fill="#BDC1C6"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.614479 38.2887L2.55198 38.2887L2.55198 42.4866L6.74987 42.4866L6.74987 44.4241L0.614479 44.4241L0.614479 38.2887Z"
											fill="#BDC1C6"
										></path>
										<path d="M19.6665 30.2531H58.4165L58.4165 0.544722H19.6665L19.6665 30.2531Z" fill="#AECBFA"></path>
										<path
											d="M19.6665 21.8429L19.6665 30.2525L58.4168 30.2525L58.4168 19.7406L49.6667 12.4069C48.6234 11.5342 47.2931 11.0699 45.9272 11.1018C44.5614 11.1337 43.2547 11.6596 42.2542 12.5801L33.4166 20.7918L28.4166 17.2548C27.7332 16.7781 26.9013 16.5563 26.0684 16.6288C25.2354 16.7012 24.4554 17.0632 23.8666 17.6505L19.6665 21.8429Z"
											fill="#669DF6"
										></path>
										<path
											d="M30.0056 12.9386C31.7315 12.9386 33.1306 11.5395 33.1306 9.8136C33.1306 8.08773 31.7315 6.68863 30.0056 6.68863C28.2798 6.68863 26.8807 8.08773 26.8807 9.8136C26.8807 11.5395 28.2798 12.9386 30.0056 12.9386Z"
											fill="#E8F0FE"
										></path>
									</svg>
									{isDragActive ? (
										"Drop the files here..."
									) : (
										<p>
											Drag an image here or{" "}
											<label className="text-blue-400" htmlFor="">
												upload a file
											</label>
										</p>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</main>
	);
}
