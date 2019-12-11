<template>
	<div id="container">
		<div id="wrapper" :class="{ flipped: isFlipped, paused: !isRunning }">
			<div class="glass upper" @click="flip">
				<div class="hole">
					<div class="sand" :style="{transform: 'scaleY(' + upperSandHeight + ')'}"></div>
					<div class="sand-flow"></div>
				</div>
			</div>
			<div class="glass lower" @click="flip">
				<div class="hole">
					<div class="sand" :style="{transform: 'scaleY(' + lowerSandHeight + ')'}"></div>
					<div class="sand-flow"></div>
				</div>
			</div>
			<div id="toggle" @click="toggleRun">
				<span v-show="isRunning">Pause</span>
				<span v-show="!isRunning">Run</span>
			</div>
		</div>
		<div class="remain-time">{{ remainSecond.toFixed(2) }}<span>s</span></div>
		<div class="tool setting" @click="showSettings">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path d="M489.175 206.556a1566.991 1566.991 0 00-29.379-4.111c-1.195-.155-2.165-.966-2.467-2.064a207.8 207.8 0 00-19.636-47.389c-.57-1.002-.463-2.266.273-3.223a1575.02 1575.02 0 0017.876-23.69c7.824-10.578 6.688-25.588-2.64-34.917l-32.366-32.366c-9.329-9.328-24.338-10.464-34.918-2.638a1579.273 1579.273 0 00-23.689 17.875c-.954.736-2.221.843-3.223.274a207.812 207.812 0 00-47.389-19.637c-1.099-.301-1.91-1.271-2.066-2.469a1587.93 1587.93 0 00-4.109-29.376C303.495 9.812 292.079 0 278.886 0h-45.773c-13.194 0-24.61 9.812-26.554 22.824a1579.752 1579.752 0 00-4.11 29.379c-.157 1.197-.967 2.165-2.067 2.467a207.876 207.876 0 00-47.387 19.637c-1.003.569-2.269.459-3.225-.274a1575.991 1575.991 0 00-23.69-17.876c-10.581-7.825-25.59-6.687-34.917 2.64L58.797 91.163c-9.329 9.33-10.464 24.341-2.638 34.918a1580.844 1580.844 0 0017.875 23.688c.735.955.843 2.22.274 3.223a207.826 207.826 0 00-19.637 47.389c-.301 1.097-1.271 1.908-2.467 2.065a1587.026 1587.026 0 00-29.378 4.111C9.812 208.502 0 219.92 0 233.112v45.774c0 13.193 9.812 24.61 22.824 26.556a1578.724 1578.724 0 0029.379 4.11c1.197.157 2.165.967 2.467 2.066a207.833 207.833 0 0019.637 47.389c.569 1.003.461 2.268-.274 3.223a1571.918 1571.918 0 00-17.875 23.689c-7.825 10.578-6.691 25.589 2.638 34.918l32.366 32.366c9.33 9.329 24.341 10.465 34.918 2.638a1579.273 1579.273 0 0023.689-17.875c.955-.736 2.221-.842 3.223-.274a207.846 207.846 0 0047.389 19.637c1.099.302 1.91 1.271 2.066 2.467 1.289 9.88 2.672 19.765 4.11 29.376 1.946 13.013 13.362 22.825 26.556 22.825h45.773c13.193 0 24.61-9.812 26.555-22.827a1597.167 1597.167 0 004.109-29.376c.157-1.197.967-2.166 2.066-2.469a207.902 207.902 0 0047.388-19.637c1.003-.567 2.268-.459 3.224.274a1574.173 1574.173 0 0023.689 17.875c10.578 7.825 25.588 6.691 34.918-2.638l32.366-32.366c9.328-9.329 10.464-24.339 2.639-34.918a1607.832 1607.832 0 00-17.876-23.689c-.735-.955-.843-2.22-.273-3.223a207.841 207.841 0 0019.636-47.388c.304-1.1 1.272-1.91 2.469-2.067a1578.782 1578.782 0 0029.378-4.11c13.013-1.945 22.825-13.362 22.825-26.555v-45.774c0-13.19-9.812-24.608-22.824-26.553zm-1.084 72.332c0 1.45-1.054 2.7-2.453 2.911a1571.912 1571.912 0 01-28.932 4.048c-10.758 1.402-19.56 9.024-22.426 19.42a183.951 183.951 0 01-17.375 41.932c-5.333 9.389-4.504 21.012 2.112 29.612a1559.297 1559.297 0 0117.604 23.329c.842 1.137.702 2.769-.323 3.794L403.931 436.3c-1.026 1.026-2.657 1.163-3.793.324a1565.489 1565.489 0 01-23.33-17.605c-8.599-6.617-20.221-7.446-29.609-2.114a183.98 183.98 0 01-41.934 17.377c-10.394 2.865-18.016 11.667-19.421 22.426a1549.245 1549.245 0 01-4.047 28.932c-.209 1.399-1.461 2.453-2.911 2.453h-45.773c-1.45 0-2.702-1.054-2.911-2.454a1567.626 1567.626 0 01-4.047-28.93c-1.403-10.759-9.027-19.561-19.421-22.426a183.901 183.901 0 01-41.934-17.378 26.697 26.697 0 00-13.196-3.491 26.872 26.872 0 00-16.412 5.607 1570.69 1570.69 0 01-23.33 17.605c-1.138.839-2.767.702-3.792-.324l-32.367-32.366c-1.026-1.026-1.166-2.656-.324-3.793a1554.583 1554.583 0 0117.604-23.33c6.615-8.6 7.445-20.221 2.114-29.609A183.93 183.93 0 0177.72 305.27c-2.865-10.394-11.667-18.017-22.425-19.42a1574.379 1574.379 0 01-28.934-4.048c-1.399-.21-2.453-1.461-2.453-2.911v-45.774c0-1.45 1.054-2.701 2.453-2.911a1566.765 1566.765 0 0128.932-4.048c10.759-1.402 19.561-9.025 22.426-19.42a183.86 183.86 0 0117.377-41.934c5.332-9.389 4.502-21.011-2.113-29.609a1575.762 1575.762 0 01-17.604-23.33c-.84-1.137-.701-2.769.324-3.793l32.365-32.367c1.024-1.026 2.655-1.163 3.792-.324a1556.978 1556.978 0 0123.33 17.605c8.6 6.614 20.221 7.445 29.611 2.112a183.928 183.928 0 0141.932-17.377c10.395-2.865 18.019-11.667 19.422-22.426a1562.97 1562.97 0 014.048-28.933c.209-1.397 1.461-2.452 2.911-2.452h45.773c1.45 0 2.702 1.054 2.911 2.453a1555.746 1555.746 0 014.048 28.932c1.403 10.759 9.027 19.561 19.421 22.426a183.999 183.999 0 0141.934 17.377c9.388 5.33 21.01 4.502 29.608-2.114a1568.83 1568.83 0 0123.329-17.604c1.137-.842 2.769-.703 3.794.324l32.366 32.366c1.026 1.026 1.164 2.657.324 3.793a1549.126 1549.126 0 01-17.604 23.33c-6.615 8.601-7.445 20.223-2.112 29.612a183.928 183.928 0 0117.377 41.933c2.865 10.394 11.669 18.016 22.424 19.418 9.716 1.268 19.451 2.63 28.934 4.048 1.399.21 2.453 1.461 2.453 2.911v45.773z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"/><path d="M256 144.866c-61.28 0-111.134 49.854-111.134 111.134S194.72 367.134 256 367.134 367.134 317.28 367.134 256 317.28 144.866 256 144.866zm0 198.359c-48.097 0-87.225-39.129-87.225-87.225 0-48.097 39.13-87.225 87.225-87.225 48.096 0 87.225 39.129 87.225 87.225S304.097 343.225 256 343.225z" data-original="#000000" data-old_color="#000000" fill="#fff"/></svg>
		</div>
		<div class="tool reset" @click="reset">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.186 458.186"><path d="M445.651 201.95c-1.485-9.308-10.235-15.649-19.543-14.164-9.308 1.485-15.649 10.235-14.164 19.543.016.102.033.203.051.304 17.38 102.311-51.47 199.339-153.781 216.719-102.311 17.38-199.339-51.47-216.719-153.781S92.966 71.232 195.276 53.852c62.919-10.688 126.962 11.29 170.059 58.361l-75.605 25.19c-8.944 2.976-13.781 12.638-10.806 21.582l.003.007c2.976 8.944 12.638 13.781 21.582 10.806l.007-.002 102.4-34.133a17.068 17.068 0 0011.674-16.196v-102.4C414.59 7.641 406.949 0 397.523 0s-17.067 7.641-17.067 17.067v62.344C292.564-4.185 153.545-.702 69.949 87.19s-80.114 226.911 7.779 310.508 226.911 80.114 310.508-7.779a219.633 219.633 0 0057.415-187.969z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"/></svg>
		</div>
		<div id="setting-panel" :class="{ in: isShowSettings, shake: isShaking }">
			<!--<div class="close" @click="cancel">x</div>-->
			<div class="form-group">
				<label for="capacity">Capacity</label>
				<input type="number" id="capacity" v-model="settingSecond" tabindex="-1" @keydown.prevent.stop.enter="hideSettings">
				<span>s</span>
			</div>
			<div class="form-group">
				<label>Color Theme</label>
				<div id="salmon" :class="{ selected: theme === 'salmon' }" class="color-box" @click="theme = 'salmon'">
					<div class="color-circle">
						<div class="check">✔</div>
					</div>
					<span>Salmon</span>
				</div>
				<div id="glacier" :class="{ selected: theme === 'glacier' }" class="color-box" @click="theme = 'glacier'">
					<div class="color-circle">
						<div class="check">✔</div>
					</div>
					<span>Glacier</span>
				</div>
				<!--<div class="color-box" id="bright">-->
					<!--<div class="color-circle">-->
						<!--<div class="check">✔</div>-->
					<!--</div>-->
					<!--<span>Bright</span>-->
				<!--</div>-->
				<!--<div class="color-box" id="dark">-->
					<!--<div class="color-circle">-->
						<!--<div class="check">✔</div>-->
					<!--</div>-->
					<!--<span>Dark</span>-->
				<!--</div>-->
			</div>
		</div>
		<div class="backdrop" @click="hideSettings"></div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				settingSecond: 0,
				capacitySecond: 30,
				millisecondUsed: 0,
				millisecondUsedCurrent: 0,
				isRunning: false,
				timeInterval: null,
				isFlipped: false,
				isShowSettings: false,
				isShaking: false,
				theme: 'salmon',
			}
		},
		computed: {
			remainSecond() {
				return Math.max(0, (this.capacitySecond * 1000 - this.millisecondUsed - this.millisecondUsedCurrent) / 1000);
			},
			remainPercent() {
				return this.remainSecond / this.capacitySecond;
			},
			upperSandHeight() {
				if(this.isFlipped) {
					return 1 - Math.sqrt(this.remainPercent);
				}
				return Math.sqrt(this.remainPercent);
			},
			lowerSandHeight() {
				return 1 - this.upperSandHeight;
			},
		},
		watch: {
			capacitySecond() {
				this.reset();
				localStorage && localStorage.setItem('capacity', this.capacitySecond.toString());
			},
			remainSecond() {
				if(this.remainSecond <= 0) {
					this.stop();
				}
			},
			theme() {
				document.documentElement.setAttribute('data-theme', this.theme);
				localStorage && localStorage.setItem('theme', this.theme);
			},
		},
		created() {
			this.loadStorage();
			this.loadUrlParams();
			this.bindKeyboard();
		},
		methods: {
			flip() {
				const wasRunning = this.isRunning;
				this.isFlipped = !this.isFlipped;
				this.stop();
				this.millisecondUsed = this.capacitySecond * 1000 - this.millisecondUsed;
				if(wasRunning) {
					this.run();
				}
			},
			toggleRun() {
				if(this.isRunning) {
					this.stop();
				} else {
					this.run();
				}
			},
			run() {
				if(this.remainSecond === 0) {
					this.flip();
				}
				this.isRunning = true;
				const startTime = (new Date()).getTime();
				this.timeInterval = setInterval(() => {
					this.millisecondUsedCurrent = (new Date()).getTime() - startTime;
					// stop when over used
					if(this.millisecondUsed + this.millisecondUsedCurrent > this.capacitySecond * 1000) {
						this.stop();
					}
				}, 10);
			},
			stop() {
				this.isRunning = false;
				this.millisecondUsed = Math.min(this.capacitySecond * 1000, this.millisecondUsed + this.millisecondUsedCurrent);
				this.millisecondUsedCurrent = 0;
				if(this.timeInterval) {
					clearInterval(this.timeInterval);
				}
			},
			reset() {
				this.stop();
				this.isFlipped = false;
				this.millisecondUsed = 0;
			},
			cancel() {
				this.settingSecond = this.capacitySecond;
				this.hideSettings();
			},
			loadStorage() {
				if(!localStorage) {
					return;
				}
				if(localStorage.getItem('capacity')) {
					this.capacitySecond = +localStorage.getItem('capacity');
				}
				if(localStorage.getItem('theme')) {
					this.theme = localStorage.getItem('theme');
				}
			},
			loadUrlParams() {
				const urlParams = new URLSearchParams(window.location.search);
				const capacity = urlParams.get('c');
				if(capacity) {
					this.capacitySecond = capacity;
				}
				const run = urlParams.get('r');
				if(run) {
					this.$nextTick(() => {
						this.run();
					});
				}
				window.history.replaceState(null, '', window.location.origin);
			},
			bindKeyboard() {
				window.onkeydown = (e) => {
					if(this.isShowSettings) {
						// ESC to hide settings
						if(e.keyCode === 27) {
							// cancel set capacity
							this.cancel();
						}
					} else {
						// ENTER to flip
						if(e.keyCode === 13) {
							this.flip();
						}
						// SPACE to run/pause
						else if(e.keyCode === 32) {
							this.toggleRun();
						}
						// R to reset
						else if(e.keyCode === 82) {
							this.reset();
						}
						// S to settings
						else if(e.keyCode === 83) {
							this.showSettings();
						}
					}
				};

			},
			showSettings() {
				this.settingSecond = this.capacitySecond;
				this.isShowSettings = true;
			},
			hideSettings() {
				const newCapacity = +this.settingSecond;
				if(newCapacity <= 0) {
					if(!this.isShaking) {
						this.isShaking = true;
						setTimeout(() => {
							this.isShaking = false;
						}, 500);
					}
					document.getElementById('capacity').focus();
					return;
				}

				// set new capacity
				if(this.capacitySecond !== newCapacity) {
					this.capacitySecond = newCapacity;
				}

				document.getElementById('capacity').blur();
				this.isShowSettings = false;
			},
		},

	}
</script>

<style scoped>
</style>