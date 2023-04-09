interface Board {
	id: string;
	name: string;
	statuses: Status[];
}

interface Status {
	id: string;
	name: string;
	color: string;
}

interface Task {
	id: string;
	name: string;
	description?: string;
	boardId: string;
	statusId: string;
}

interface Data {
	boards: Board[];
	tasks: Task[];
}

// preserve at local storage

const data = {
	boards: [
		{
			id: 'board-1',
			name: 'Board 1',
			statuses: [
				{
					id: 'status-1',
					name: 'To Do',
					color: 'red',
				},
				{
					id: 'status-2',
					name: 'In Progress',
					color: 'blue',
				},
				{
					id: 'status-3',
					name: 'Done',
					color: 'green',
				},
			],
		},
	],
	tasks: [
		{
			id: 'task-1',
			name: 'Task 1',
			description: 'Task 1 description',
			boardId: 'board-1',
			statusId: 'status-1',
		},
	],
};

// url = /boards/board-1

data.tasks
	.filter((task) => task.boardId === 'board-1')
	.map((task) => {
		const status = data.boards[0].statuses.find(
			(status) => status.id === task.statusId,
		);

		return (
			<div>
				<h1>{task.name}</h1>
				<p>{task.description}</p>
			</div>
		);
	});
