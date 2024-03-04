<script>
	// Add any necessary script logic here
</script>

<slot />

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		min-height: 100vh;
		padding: 16px;
	}

	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body) {
		background-color: #212121;
		color: #ececec;
		font-family: 'Arial', sans-serif;
	}
</style>
