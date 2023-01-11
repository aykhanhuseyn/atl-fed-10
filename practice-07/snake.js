class Snake {
	#x = 0;
	#y = 0;
	#xSpeed = Canvas.cell; // 1 saga, -1 sola
	#ySpeed = 0; // -1 yuxari, 1 asagi
	#color = '#24b6ff';

	move() {
		this.#x += this.#xSpeed;
		this.#y += this.#ySpeed;

		if (this.#x > Canvas.width) {
			this.#x = 0;
		}
		if (this.#x < 0) {
			this.#x = Canvas.width;
		}
		if (this.#y > Canvas.height) {
			this.#y = 0;
		}
		if (this.#y < 0) {
			this.#y = Canvas.height;
		}
	}

	draw() {
		Canvas.context.fillStyle = this.#color;
		Canvas.context.fillRect(this.#x, this.#y, 10, 10);
	}

	// Up, Right, Down, Left
	cd(direction) {
		switch (direction) {
			case 'Up':
				this.#xSpeed = 0;
				this.#ySpeed = Canvas.cell * -1;
				break;
			case 'Right':
				this.#xSpeed = Canvas.cell * 1;
				this.#ySpeed = 0;
				break;
			case 'Down':
				this.#xSpeed = 0;
				this.#ySpeed = Canvas.cell * 1;
				break;
			case 'Left':
				this.#xSpeed = Canvas.cell * -1;
				this.#ySpeed = 0;
				break;
			default:
				break;
		}
	}

	eat(fruit) {
		if (fruit.x === this.#x && fruit.y === this.#y) {
			fruit.move();
			fruit.draw();
		}
	}
}
