<template>
	<div id="app">
		<form @submit="login" class="form">
			<div class="form__field">
				<label for="email" class="form__label">Email address</label>
				<input type="text" id="email" name="email" class="form__input" v-model="email" />
			</div>

			<div class="form__field">
				<label for="password" class="form__label">Password</label>
				<input type="password" id="password" name="password" class="form__input" v-model="password" />
			</div>

			<button>Submit</button>
		</form>

		<a href="#" @click="check">Check user is logged in?</a>
	</div>
</template>

<script>
	import Auth from './utils/auth';
	import Api from './utils/api';

	export default {
		name: 'app',
		
		data: () => ({
			email: '',
			password: ''
		}),

		methods: {
			login() {
				event.preventDefault();

				Auth.login({
					email: this.email,
					password: this.password
				});
			},

			check() {
				Api.request('get', 'user');
			}
		}
	}
</script>