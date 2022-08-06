import { motion, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { cc } from "../../utils/cc";

interface InputProps {
	type?: string;
	value?: string | number;
	onChange?: (e: any) => void;
	id?: string;
	name: string;
	disabled?: boolean;
	error?: boolean;
	innerRef: any;
}

const Input: FunctionComponent<PropsWithChildren<InputProps>> = ({ children, type = "text", onChange, value = "", id = "", name = "", disabled = false, error = false, innerRef }) => {
	const [focused, setFocused] = useState(false);
	const active = focused || value.toString().length > 0;

	const variants: Variants = {
		active: {
			translateX: "-6px",
			translateY: "-34px",
			scale: 0.8
		},
		inactive: { translateX: 0, translateY: 0, scale: 1 }
	};
	return (
		<div className="relative cursor-text" onClick={() => !focused && innerRef.current?.focus()}>
			<div className={cc(focused ? "input-outline-black" : error ? "input-outline-error" : "", "px-3 py-2 rounded transition-all flex items-center relative shadow h-[48px] border border-white backdrop-blur-xl bg-white/90")}>
				<motion.div className={cc(active ? "font-bold" : "", "absolute px-1 pointer-events-none")} animate={active ? "active" : "inactive"} variants={variants}>
					<label htmlFor={name} className={error ? "text-error" : "text-black"}>
						{children}
					</label>
				</motion.div>
				<input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={onChange} value={value} ref={innerRef} id={name} disabled={disabled} className="text-md w-full h-full text-black outline-none px-1 disabled:bg-transparent bg-transparent" type={type ? type : "text"} />
			</div>
		</div>
	);
};

export default Input;
