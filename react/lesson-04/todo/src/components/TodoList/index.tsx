import { FC } from 'react';
import { Todo } from '../../App';

interface TodoListProps {
	todos: Todo[];
	// changeCompleted: (id: number, check: boolean) => void;
	// clearCompleted: () => void;
}

export const TodoList: FC<TodoListProps> = ({ todos }) => {
	return (
		<>
			<h1>TodoList</h1>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.text} is {todo.completed ? '' : 'not'} completed
				</div>
			))}
			<button>clear completed</button>
		</>
	);
};
