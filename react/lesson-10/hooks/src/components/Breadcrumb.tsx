import { useLocation, useMatch, useMatches } from 'react-router-dom';

const breadcrumbData: Record<string, string> = {
	'/': 'Home',
	'/about': 'About',
	'/dashboard': 'Dashboard',
	'/products': 'Products',
	'/products/:id': 'Products / View',
};

// /users/aykhan

// v5
// /users/:username{/\w{5,15}/}
// /users/1

// v6
// /users/:username

export const Breadcrumb = () => {
	const location = useLocation();
	const match = useMatch('/products/:id');

	console.log('Breadcrumb render', location, match);

	const path = match?.pattern?.path ?? location.pathname ?? '/';
	const breadcrumb = breadcrumbData[path as string] ?? 'Not Found';

	return (
		<div>
			<p>Breadcrumbs</p>
			<p>{breadcrumb}</p>
		</div>
	);
};
