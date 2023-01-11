class Fruit {
	x;
	y;
	#color;

	constructor() {
		this.move();
		this.#color = '#' + this.#ranodmHex() + this.#ranodmHex() + this.#ranodmHex();
	}

	// #23fe4a
	#ranodmHex() {
		return Math.floor(Math.random() * 255).toString(16);
	}

	move() {
		this.x = Math.floor(Math.random() * Canvas.cols) * Canvas.cell;
		this.y = Math.floor(Math.random() * Canvas.rows) * Canvas.cell;
	}

	draw() {
		Canvas.context.fillStyle = this.#color;
		Canvas.context.fillRect(this.x, this.y, Canvas.cell, Canvas.cell);
	}
}
