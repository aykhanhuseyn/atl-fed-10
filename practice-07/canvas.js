class Canvas {
	static width = 300;
	static height = 300;
	static cell = 10;
	static cols = 300 / 10;
	static rows = 300 / 10;
	static context;

	static init() {
		const canvas = document.getElementById('canvas');
		document.body.style.width = '100%';
		document.body.style.height = '100vh';
		document.body.style.overflow = 'hidden';

		canvas.width = Canvas.width;
		canvas.height = Canvas.height;
		canvas.style.width = Canvas.width + 'px';
		canvas.style.height = Canvas.height + 'px';
		canvas.style.backgroundColor = '#333333';

		const context = canvas.getContext('2d');
		Canvas.context = context;

		const snake = new Snake();
		const fruit = new Fruit();
		snake.draw();
		fruit.draw();

		const interval = setInterval(() => {
			context.clearRect(0, 0, Canvas.width, Canvas.height);
			const canMove = snake.move();
			if (canMove) {
				snake.eat(fruit);
				fruit.draw();
				snake.draw();
			} else {
				clearInterval(interval);
				Canvas.context.fillStyle = 'red';
				Canvas.context.font = '50px serif';
				Canvas.context.fillText('You lost', 150, 150);
			}
		}, 150);

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
