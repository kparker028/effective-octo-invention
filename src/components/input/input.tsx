import React, { FC } from "react";
import "./input.css";

type InputProps = {
	value: string;
	placeHolder?: string;
	onChange: (event: string) => void;
};

export const Input: FC<InputProps> = ({ value, onChange, placeHolder }) => {
	return (
		<div className='input-container'>
			<input
				type='text'
				placeholder={placeHolder}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	);
};
