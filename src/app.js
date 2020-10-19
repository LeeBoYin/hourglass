import './style.css';
import Vue from 'vue';
import App from './App.vue';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

new Vue({
	el: '#app',
	render: h => h(App),
});

if ('serviceWorker' in navigator) {
	const registration = runtime.register();
}
