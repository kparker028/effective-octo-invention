import React from "react";
import "./App.css";
import { Form } from "./components/form/form";

function App() {
	const handleSubmit = (firstName: string, lastName: string) => {
		alert(`Thank you ${firstName} ${lastName}! Your form was submitted.`);
	};
	return (
		<div className='App'>
			<Form onSubmit={handleSubmit} />
		</div>
	);
}

export default App;
