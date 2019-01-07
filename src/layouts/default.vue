<template>
	<div class="container">
		<GlobalNav class="globalnav" />
		<nuxt />
	</div>
</template>

<script>
import GlobalNav from '~/components/globalnav/GlobalNav'

export default {
	components: {
		GlobalNav
	}
}
</script>


<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	& > .globalnav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
}
</style>
