class Canvas {
	static width = 300;
	static height = 300;
	static cell = 10;
	static cols = 300 / 10;
	static rows = 300 / 10;
	static context;

	static init() {
		const canvas = document.getElementById('canvas');
		canvas.style.width = Canvas.width + 'px';
		canvas.style.height = Canvas.height + 'px';
		canvas.style.backgroundColor = '#333333';

		const context = canvas.getContext('2d');
		Canvas.context = context;

		const snake = new Snake();
		const fruit = new Fruit();
		snake.draw();
		fruit.draw();

		setInterval(() => {
			context.clearRect(0, 0, Canvas.width, Canvas.height);
			snake.move();
			snake.eat(fruit);
			fruit.draw();
			snake.draw();
		}, 250);

		document.addEventListener('keydown', (event) => {
			const dir = event.key.replace('Arrow', ''); // Up, Down
			snake.cd(dir);

			// if (event.key.startsWith('Arrow')) {
			// 	const dir = event.key.replace('Arrow', ''); // Up, Down
			// 	snake.cd(dir);
			// 	context.clearRect(0, 0, Canvas.width, Canvas.height);
			// 	snake.move();
			// 	snake.draw();
			// }
		});
	}
}
