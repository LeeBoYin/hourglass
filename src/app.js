import './style.css';
import Vue from 'vue';
import App from './App.vue';


new Vue({
	el: '#app',
	render: h => h(App),
});

// function component() {
// 	let element = document.createElement('div');
// 	let btn = document.createElement('button');
//
// 	// Lodash, currently included via a script, is required for this line to work
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	element.classList.add('hello');
//
// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = util.sayHello;
// 	element.appendChild(btn);
//
// 	return element;
// }
//
// document.body.appendChild(component());