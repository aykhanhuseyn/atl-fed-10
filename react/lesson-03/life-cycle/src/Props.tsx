import { Drill } from './Drill';

export const Props = ({ name }) => {
	return (
		<>
			<h3>Props component</h3>
			<Drill name={name} />
		</>
	);
};
