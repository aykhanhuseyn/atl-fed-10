class Snake {
	#x = 0;
	#y = 0;
	#xSpeed = Canvas.cell;
	#ySpeed = 0;
	#color = '#24b6ff';
	#tail = [];
	#total = 0;

	move() {
		this.#tail.unshift({ x: this.#x, y: this.#y });
		this.#tail.length = this.#total;

		if (
			this.#tail
				.slice(1)
				.find(
					(coords) =>
						coords.x === this.#x + this.#xSpeed &&
						coords.y === this.#y + this.#ySpeed,
				)
		) {
			return false;
		}

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

		return true;
	}

	draw() {
		Canvas.context.fillStyle = this.#color;
		Canvas.context.fillRect(this.#x, this.#y, Canvas.cell, Canvas.cell);
		if (this.#total) {
			for (let i = 0; i < this.#tail.length; i++) {
				const { x, y } = this.#tail[i];
				Canvas.context.fillRect(x, y, Canvas.cell, Canvas.cell);
			}
		}
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

			this.#total++;
		}
	}
}
