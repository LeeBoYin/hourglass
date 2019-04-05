<template>
	<div>
		<h1>This is Vue App</h1>
		<div>{{ currentTime }}</div>
		<button @click="flip">Flip</button>
	</div>
</template>

<script>
	import moment from 'moment';
	// import _ from 'lodash';
	// import util from './util.js';


	export default {
		name: 'App',
		data() {
			return {
				capacitySec: 0,
				currentTime: moment().format()
			}
		},
		methods: {
			flip() {
				console.log('flip');
			}
		},

	}
</script>

<style scoped>

</style>