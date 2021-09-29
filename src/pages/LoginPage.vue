<template>
	<div class="login_container">
		<h3>Login</h3>
		<transition>
			<div class="alert card-panel #f44336 red" v-show="error">
				<i class="material-icons" @click="close">close</i>{{errorMessage}}
			</div>
		</transition>
		<div class="form card-panel">
			<form @submit.prevent="logAccount">
				<div class="input-field">
					<input type="text" v-model="email" required>
					<label>Email</label>
				</div>
				<div class="input-field">
					<input type="password" v-model="password" required>
					<label>Password</label>
				</div>
				<div class="selector">
					<button class="waves-effect waves-light btn-large #0288d1 light-blue darken-2">Enter</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import cookies from 'js-cookie';

export default {
	data(){
		return {
			email: '',
			password: '',
			error: false,
			errorMessage: ''
		}
	},
	methods: {
		close(){
			this.error = false
		},
		logAccount(){
			fetch('http://localhost:3000/loginuser',{
				method: 'POST',
				headers: {
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					email: this.email,
					password: this.password
				})
			})
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
			})
			.then((data) => {
				console.log(data);
				if(data.token === 'denied'){
					this.error = true;
					this.errorMessage = 'Invalid password'

				}else if(data.token === 'undefinied'){
					console.log('usuario no existe')
					this.error = true;
					this.errorMessage = "That user doesn't exist"
				}else {
					cookies.set("userToken", data.token, { samesite: 'strict'});
					this.$router.push("/")
				}
			})
		}
	}
}
</script>

<style scoped>
h3{
	text-align: center;
}

.form {
	width: 430px;
}

.login_container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.selector {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.alert {
	color: white;
}

.v-enter-from, .v-leave-to{
	opacity: 0;
}

.v-enter-active, .v-leave-active{
	transition: 0.5s;
}

.v-enter-to,.v-leave-from{
	opacity: 1;
}
</style>