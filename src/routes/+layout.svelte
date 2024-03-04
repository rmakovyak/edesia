<script>
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

	:global(input) {
		width: 100%;
		border: 1px solid #414141;
		color: #ececec;
		background-color: transparent;
		border-radius: 10px;
		padding: 12px 48px 12px 12px;
		font-size: 16px;
	}

	:global(input:focus) {
		outline: none;
	}
</style>
