import React from "react";
import { useFormStatus } from "react-dom";
import { HiPaperAirplane } from "react-icons/hi";

const Button = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="flex items-center gap-3 text-slate-100 bg-slate-900 py-2 px-3 border rounded-xl hover:scale-[1.04] hover:cursor-pointer transition-all disabled:scale-100 disabled:bg-opacity-75"
			disabled={pending}>
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<>
					Submit <HiPaperAirplane />
				</>
			)}
		</button>
	);
};

export default Button;
