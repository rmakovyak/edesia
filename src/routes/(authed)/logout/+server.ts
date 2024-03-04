import { redirect } from '@sveltejs/kit';

export function POST({ cookies }) {
	cookies.delete('allowed', { path: '/' });
	throw redirect(303, '/');
}
