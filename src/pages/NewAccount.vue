<template>
	<div class="login_container">
		<h3>Create an account</h3>
		<transition>
			<div class="alert card-panel #f44336 red" v-show="error">
				<i class="material-icons" @click="close">close</i>{{errorMessage}}
			</div>
		</transition>
		<div class="form card-panel">
			<form @submit.prevent="submitAccount">
				<div class="input-field">
					<input type="text" v-model="username" required>
					<label>Username</label>
				</div>
				<div class="input-field">
					<input type="text" v-model="email" required>
					<label>Email</label>
				</div>
				<div class="input-field">
					<input type="password" v-model="password" required>
					<label>Password</label>
				</div>
				<div class="input-field">
					<input type="password" v-model="confPassword" required>
					<label>Confirm password</label>
				</div>
				<div class="selector">
					<button class="waves-effect waves-light btn-large #0288d1 light-blue darken-2">Create Account</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			username:'',
			email:'',
			password:'',
			confPassword:'',
			error: false,
			errorMessage: ''
		}
	},
	methods:{
		close(){
			this.error = false
		},
		submitAccount(){
			if (this.password === this.confPassword && this.username !== '' && this.email !== '') {

				fetch('http://localhost:3000/newuser', {
					method:'POST',
					headers:{
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						username: this.username,
						email: this.email,
						password: this.password
					})
				}).then((response) => {
					if (response.ok) {
						return response.json()
					}
				}).then((data) => {
					console.log(data);
					const nextpage = data.confirm

					if (nextpage === "userCreated") {
						this.$router.push('/usercreated');
					}else if (nextpage === "error"){
						this.error = true;
						this.errorMessage = "Error, Try again in a few minutes later"
					}				
				});
		}else{
			this.password = '';
			this.confPassword = '';
			this.error = true;
			this.errorMessage = "Passwords doesn't match";
		}
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