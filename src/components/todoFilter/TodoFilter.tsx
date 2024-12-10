import React from "react";

import './todoFilter.scss';

interface TodoFilterProps {
	filter: 'all' | 'active' | 'completed';
	setFilter: (filter: 'all' | 'active' | 'completed') => void;
	clearCompleted: () => void;
	todosCount: number;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter, clearCompleted, todosCount }) => {
	return (
		<div className='todo-filter'>
			<span>{todosCount} items left</span>

			<div className='filter-buttons'>
				<button
					className={filter === 'all' ? 'active' : ''}
					onClick={() => setFilter('all')}
				>
					All
				</button>

				<button
					className={filter === 'active' ? 'active' : ''}
					onClick={() => setFilter('active')}
				>
					Active
				</button>

				<button
					className={filter === 'completed' ? 'active' : ''}
					onClick={() => setFilter('completed')}
				>
					Completed
				</button>
			</div>

			<button onClick={clearCompleted} className='clear-btn'>Clear completed</button>
		</div>
	);
};

export default TodoFilter;