import Image from "next/image";
import { Inter } from "next/font/google";
import { Crop } from "@/components/crop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col group items-center justify-center p-24 ${inter.className}`}>
			<div className="relative group flex items-center text-[#9aa0a6] focus-within:bg-[#303134] focus-within:border-[#303134] bg-[#202124] rounded-b-[24px] focus-within:rounded-b-none rounded-t-[24px] border border-[#5f6368]">
				<svg className="w-6 h-6 mx-3" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					></path>
				</svg>
				<div className="h-48 top-full absolute w-full group-focus-within:flex overflow-hidden hidden group-focus-within:bg-[#303134] bg-transparent rounded-b-[24px] border border-[#303134]">
					<Crop />
				</div>
				<textarea
					rows={1}
					placeholder="Search anything..."
					className="w-72 resize-none py-3 text-[#e8e8e8] bg-transparent focus-within:outline-none"
				/>
				<button>
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
		</main>
	);
}
