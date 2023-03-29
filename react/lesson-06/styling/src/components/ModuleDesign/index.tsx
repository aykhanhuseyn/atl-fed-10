import style from './style.module.css';
import lazZiya from './LazZiya.module.css';

console.log({ style, lazZiya });

export const ModuleDesign = () => {
	return (
		<div className={style.form}>
			<h1 className={lazZiya.title}>Benim adim Laz Ziya</h1>
			<h2 className={style.form__title}>ModuleDesign</h2>
		</div>
	);
};

// LazZiay_title_1j1j1
// FileName + ClassName + Hash
