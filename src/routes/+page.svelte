<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import capitalize from 'lodash/capitalize';
	export let form;
</script>

<main>
	<div class="result-view">
		{#if form?.query}
			<div class="message query" in:slide>Query: {form.query}</div>
		{/if}
		{#if form?.result}
			{#each form?.result as item}
				<div class="list-message" in:slide>
					<ul>
						<li><span class="title">{capitalize(item.name)}</span></li>
						<li><span class="label">Calories:</span> {item.calories}</li>
						<li><span class="label">Serving Size (g):</span> {item.serving_size_g}</li>
						<li><span class="label">Total Fat (g):</span> {item.fat_total_g}</li>
						<li><span class="label">Saturated Fat (g):</span> {item.fat_saturated_g}</li>
						<li><span class="label">Protein (g):</span> {item.protein_g}</li>
						<li><span class="label">Sodium (mg):</span> {item.sodium_mg}</li>
						<li><span class="label">Potassium (mg):</span> {item.potassium_mg}</li>
						<li><span class="label">Cholesterol (mg):</span> {item.cholesterol_mg}</li>
						<li>
							<span class="label">Total Carbohydrates (g):</span>
							{item.carbohydrates_total_g}
						</li>
						<li><span class="label">Fiber (g):</span> {item.fiber_g}</li>
						<li><span class="label">Sugar (g):</span> {item.sugar_g}</li>
					</ul>
				</div>
			{/each}
			<div class="list-message" in:slide>
				<ul class="summary">
					<li><span class="title">Total</span></li>
					<li><span class="label">Calories:</span> {form?.summary.calories}</li>
					<li><span class="label">Serving Size (g):</span> {form?.summary.serving_size_g}</li>
					<li><span class="label">Total Fat (g):</span> {form?.summary.fat_total_g}</li>
					<li><span class="label">Saturated Fat (g):</span> {form?.summary.fat_saturated_g}</li>
					<li><span class="label">Protein (g):</span> {form?.summary.protein_g}</li>
					<li><span class="label">Sodium (mg):</span> {form?.summary.sodium_mg}</li>
					<li><span class="label">Potassium (mg):</span> {form?.summary.potassium_mg}</li>
					<li><span class="label">Cholesterol (mg):</span> {form?.summary.cholesterol_mg}</li>
					<li>
						<span class="label">Total Carbohydrates (g):</span>
						{form?.summary.carbohydrates_total_g}
					</li>
					<li><span class="label">Fiber (g):</span> {form?.summary.fiber_g}</li>
					<li><span class="label">Sugar (g):</span> {form?.summary.sugar_g}</li>
				</ul>
			</div>
		{/if}

		{#if form?.error}
			<div class="error message" in:slide>{form.error}</div>
		{/if}
	</div>

	<div class="input-form">
		<form method="POST" action="?/create" use:enhance>
			<input class="textarea" name="query" placeholder="Enter ingredients..." />
			<button type="submit">↑</button>
		</form>
	</div>
	<div class="buffer"></div>
</main>

<style>
	.result-view {
		width: 100%;
	}

	.input-form {
		width: 100%;
	}

	input {
		width: 100%;
		border: 1px solid #414141;
		color: #ececec;
		background-color: transparent;
		border-radius: 10px;
		padding: 12px 48px 12px 12px;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	form {
		position: relative;
	}

	form button {
		position: absolute;
		right: 8px;
		top: 7px;
		border: 1px solid #414141;
		/* color: #ececec; */
		border-radius: 10px;
		height: 32px;
		width: 32px;
		font-size: 16px;
	}

	.error {
		color: red;
	}

	.message {
		margin-bottom: 16px;
		text-align: left;
		padding: 0 12px;
	}

	.list-message {
		margin-bottom: 16px;
		width: 100%;
	}

	ul {
		list-style: none;
	}

	li {
		padding: 8px;
		border: 1px solid #414141;
		border-top: none;
		font-size: 12px;
	}

	.title {
		font-size: 16px;
		font-weight: bold;
	}

	.label {
		color: #d2d2d2;
	}

	li:first-child {
		border-top: 1px solid #414141;
		border-radius: 12px 12px 0 0;
	}

	li:last-child {
		border-radius: 0 0 12px 12px;
	}

	li:nth-child(odd) {
		background-color: hsl(0, 0%, 17%);
	}
</style>
