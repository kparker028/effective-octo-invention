import React, { FC, useState } from "react";
import "./form.css";
import { Input } from "../input/input";

type FormProps = {
	onSubmit: (firstName: string, lastName: string) => void;
};

export const Form: FC<FormProps> = ({ onSubmit }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	return (
		<div className='form-container'>
			<h1 className='form-title'>Form with TSX</h1>
			<div className='inputs'>
				<Input
					value={firstName}
					onChange={setFirstName}
					placeHolder='first name'
				/>
				<Input
					value={lastName}
					onChange={setLastName}
					placeHolder='last name'
				/>
			</div>
			<button
				className='submit-button'
				onClick={() => {
					firstName && lastName
						? onSubmit(firstName, lastName)
						: alert("please enter you first name and last name");
				}}
			>
				Submit
			</button>
		</div>
	);
};
