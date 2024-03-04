import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	if (!cookies.get('allowed')) {
		throw redirect(307, '/login');
	}
}
