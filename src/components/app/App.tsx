import React, { useState } from "react";

import TodoList from '../todoList/TodoList.tsx';
import TodoInput from "../todoInput/TodoInput.tsx";
import TodoFilter from '../todoFilter/TodoFilter.tsx';

import './app.scss';

export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
	const [isDropdownOpen, setIsDropdownOpen] = useState(true);

	const addTodo = (text: string) => {
		setTodos([...todos, { id: Date.now(), text, completed: false }]);
	};

	const toggleTodo = (id: number) => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	const clearCompleted = () => {
		setTodos(todos.filter(todo => !todo.completed));
	};

	const filteredTodos = todos.filter(todo => {
		if (filter === 'active') return !todo.completed;
		if (filter === 'completed') return todo.completed;
		return true;
	})

	return (
		<div className='app'>
			<h1 className='app-header'>todos</h1>
			<div className='todo-header'>
				<TodoInput addTodo={addTodo} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
			</div>
			{isDropdownOpen && (
				<>
					<TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
					<TodoFilter
						filter={filter}
						setFilter={setFilter}
						clearCompleted={clearCompleted}
						todosCount={todos.filter(todo => !todo.completed).length}
					/>
				</>
			)}
		</div>
	);
};

export default App
