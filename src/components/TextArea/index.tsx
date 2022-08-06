import { FunctionComponent, PropsWithChildren, useState } from "react";
import { cc } from "../../utils/cc";

interface TextAreaProps {
	rows?: number;
	value?: string;
	onChange?: (e: any) => void;
	disabled?: boolean;
	error?: boolean;
	innerRef: any;
	name: string;
}

const TextArea: FunctionComponent<PropsWithChildren<TextAreaProps>> = ({ children, rows = 2, onChange, value = "", disabled = false, error = false, innerRef, name = "" }) => {
	const [focused, setFocused] = useState(false);
	const active = focused || value.toString().length > 0;

	return (
		<div className="relative cursor-text" onClick={() => !focused && innerRef.current?.focus()}>
			<div className={cc(focused ? "input-outline-black" : error ? "input-outline-error" : "", "px-3 py-2 rounded transition-all relative shadow border border-white backdrop-blur-xl bg-white/90")}>
				<div className={cc(active ? "font-bold" : "font-base", "absolute transition-all px-1 pointer-events-none")} style={active ? { transform: "translateY(-32px) scale(0.8) translateX(-12px)" } : {}}>
					<label htmlFor={name} className={error ? "text-error" : "text-black"}>
						{children}
					</label>
				</div>
				<textarea id={name} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={onChange} value={value} rows={rows} className="w-full h-full text-black text-md outline-none bg-transparent focused:bg-transparent disabled:bg-transparent" disabled={disabled} ref={innerRef} />
			</div>
		</div>
	);
};

export default TextArea;
