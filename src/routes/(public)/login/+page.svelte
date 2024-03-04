<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	export let form;
</script>

<main>
	<div class="row">
		<form method="POST" use:enhance>
			<input name="passphrase" autocomplete="off" type="password" placeholder="Enter password" />
		</form>

		{#if form?.incorrect}
			<p class="error" in:slide>Wrong password!</p>
		{/if}
	</div>
</main>

<style>
	.row {
		width: 100%;
	}
	.error {
		color: red;
		margin-top: 16px;
		margin-left: 12px;
	}
</style>
