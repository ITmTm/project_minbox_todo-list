import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/app/App.tsx';

describe('Todo App', () => {
	test('adds a new todo', () => {
		render(<App />);

		const input = screen.getByPlaceholderText('What needs to be done?');
		fireEvent.change(input, { target: { value: 'Test Todo' } });
		fireEvent.submit(input);

		expect(screen.getByText('Test Todo')).toBeInTheDocument();
	});

	test('toggles a todo completed state', () => {
		render(<App />);

		const input = screen.getByPlaceholderText('What needs to be done?');
		fireEvent.change(input, { target: { value: 'Test Todo' } });
		fireEvent.submit(input);

		const checkbox = screen.getByRole('checkbox');
		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});

	test('filters todos', () => {
		render(<App />);

		const input = screen.getByPlaceholderText('What needs to be done?');
		fireEvent.change(input, { target: { value: 'Active Todo' } });
		fireEvent.submit(input);

		const completedCheckbox = screen.getByRole('checkbox');
		fireEvent.click(completedCheckbox);

		fireEvent.click(screen.getByText('Active'));
		expect(screen.queryByText('Active Todo')).not.toBeInTheDocument();

		fireEvent.click(screen.getByText('Completed'));
		expect(screen.getByText('Active Todo')).toBeInTheDocument();
	})
})