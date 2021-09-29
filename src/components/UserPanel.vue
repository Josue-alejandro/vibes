<template>
	<div class="card-panel">
		<img class="photo" src="https://firebasestorage.googleapis.com/v0/b/vibesdb-5fb8e.appspot.com/o/userphoto%2Ferick-wake.jpg?alt=media&token=40f2c9e2-0cd1-4748-8d18-8f0bea3b2383" width="300" height="300">
		<h4>{{ name }}</h4>
		<div class="follow">
			<span>Followers: <strong>{{ followers }}</strong></span>
			<span>Following: <strong>{{ following }}</strong></span>
		</div>
		<p>{{ info }}</p>
		<button class="waves-effect waves-light btn #0288d1 light-blue darken-2">Logout</button>
	</div>
</template>

<script>
export default {
	props:['name', 'followers', 'following', 'info']
}
</script>

<style scoped>
.follow {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.follow span {
	padding: 0.40em;
}

.photo {
	border-radius: 100%;
}
</style>