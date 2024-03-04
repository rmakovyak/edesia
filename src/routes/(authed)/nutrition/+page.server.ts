import { fail } from '@sveltejs/kit';
import { RAPID_API_KEY, RAPID_API_HOST } from '$env/static/private';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query');

		if (!query || typeof query !== 'string') return fail(422, { description: 'Query is required' });

		const sanitizedQuery = query.replace(/[.,]/g, ' ');

		try {
			const url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${sanitizedQuery}`;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': RAPID_API_KEY,
					'X-RapidAPI-Host': RAPID_API_HOST
				}
			};

			const response = await fetch(url, options);
			const result = await response.json();

			const summary = result.reduce((acc: Ingredient, item: Ingredient) => ({
				name: 'summary',
				calories: acc.calories + item.calories,
				serving_size_g: acc.serving_size_g + item.serving_size_g,
				fat_total_g: acc.fat_total_g + item.fat_total_g,
				fat_saturated_g: acc.fat_saturated_g + item.fat_saturated_g,
				protein_g: acc.protein_g + item.protein_g,
				sodium_mg: acc.sodium_mg + item.sodium_mg,
				potassium_mg: acc.potassium_mg + item.potassium_mg,
				cholesterol_mg: acc.cholesterol_mg + item.cholesterol_mg,
				carbohydrates_total_g: acc.carbohydrates_total_g + item.carbohydrates_total_g,
				fiber_g: acc.fiber_g + item.fiber_g,
				sugar_g: acc.sugar_g + item.sugar_g
			}));

			return { result, summary, query: sanitizedQuery };
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: (error as Error).message
			});
		}
	}
};
