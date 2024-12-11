import React from "react";
import { Todo } from '../app/App.tsx';
import Button from "../ui/Button.tsx";

import './todoList.scss';

interface TodoListProps {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<ul className='todo-list'>
			{todos.map(todo => (
				<li key={todo.id} className={todo.completed ? 'completed' : ''}>
					<label>
						<input
							type="checkbox"
							checked={todo.completed}
							onChange={() => toggleTodo(todo.id)}
						/>
						<span>{todo.text}</span>
					</label>
					{!todo.completed && (
						<Button onClick={() => deleteTodo(todo.id)} className='delete-btn'>✕</Button>
					)}
				</li>
			))}
		</ul>
	);
};

export default TodoList;