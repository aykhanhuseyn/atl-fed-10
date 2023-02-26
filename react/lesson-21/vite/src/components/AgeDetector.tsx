type AgeDetectorProps = {
	name: string;
	birthYear: number;
};

const AgeDetector = ({ name, birthYear }: AgeDetectorProps) => {
	const date = new Date();

	return (
		<div>
			<h2>Hello, {name}!</h2>
			<h3>You are {date.getFullYear() - birthYear} years old.</h3>
		</div>
	);
};

export { AgeDetector };
