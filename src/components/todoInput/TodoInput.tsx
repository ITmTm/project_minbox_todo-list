import React, { useState } from "react";

import './todoInput.scss';

interface TodoInputProps {
	addTodo: (text: string) => void;
	isDropdownOpen: boolean;
	setIsDropdownOpen: (isOpen: boolean) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo, isDropdownOpen, setIsDropdownOpen }) => {
	const [text, setText] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (text.trim()) {
			addTodo(text);
			setText('');
		}
	};

	return(
		<form onSubmit={handleSubmit} className='todo-input'>
			<button
				type='button'
				className='dropdown-btn'
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
			>
				{isDropdownOpen ? '▼' : '▲'}
			</button>

			<input
				type="text"
				placeholder='What needs to be done?'
				value={text}
				onChange={e => setText(e.target.value)}
			/>
		</form>
	);
};

export default TodoInput;