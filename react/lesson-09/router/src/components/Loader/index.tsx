import './styles.css';

export const Loader = () => {
	return (
		<div className='loader'>
			<div className='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
