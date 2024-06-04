import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ Component }) {
	let isAuthenticated = false;

	const token = sessionStorage.getItem('auth');

	if ('true' === token) {
		isAuthenticated = true;
	}

	return (
		<div>
			{isAuthenticated ? (
				<Component />
			) : (
				<Navigate to='/teacherLogin' replace />
			)}
		</div>
	);
}

export function ProtectedParentRoute({ Component }) {
	let isAuthenticated = false;

	const token = sessionStorage.getItem('pAuth');

	if ('true' === token) {
		isAuthenticated = true;
	}

	return (
		<div>
			{isAuthenticated ? <Component /> : <Navigate to='/parentLogin' replace />}
		</div>
	);
}

export function logOut() {
	sessionStorage.setItem('auth', false);
	sessionStorage.setItem('pAuth', false);
}
