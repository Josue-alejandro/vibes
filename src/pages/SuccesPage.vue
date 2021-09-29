<template>
	<div class="page container">
		<div class="card-panel">
			<i class="material-icons">mood</i>
			<h1>You're in</h1>
			<div>
				<button class="waves-effect waves-light btn #0288d1 light-blue darken-2"><router-link to="login">Go to login</router-link></button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.page {
	text-align: center;
	padding-top: 5em;
}

a {
	color: white;
}

h1{
	padding-top: 0px;
}

i {
	font-size: 200px;
	color: #00c853;
}
</style>