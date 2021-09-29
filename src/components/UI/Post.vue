<template>
	<div class="post card-panel">
		<div class="header">
			<img src="https://firebasestorage.googleapis.com/v0/b/vibesdb-5fb8e.appspot.com/o/userphoto%2Fsad-2042536_640.jpg?alt=media&token=ac9782f5-9591-4d20-bd5e-ef18d8153860" width="65" height="65">
			<span>{{user}}</span>
		</div>
		<h5 class="title">{{title}}</h5>
		<span class="text">{{text}}</span>
		<div class="likes"><i class="material-icons">favorite</i> <span class="likes-number">{{likes}}</span></div>
	</div>
</template>

<script>
export default {
	props: ['user', 'title', 'text', 'likes']
}
</script>

<style scoped>
.header {
	border-bottom: 1px solid rgb(180, 180, 180);
	padding: 1.50em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.header img {
	border-radius: 100%;
}

.post {
	padding: 0px;
	border-radius: 15px;
}

.title {
	padding: 1.50em;
}

.text {
	padding: 1.50em;
}

.likes {
	padding: 1.50em;
	text-align: center;
	border-top: 1px;
}

.likes-number {
	font-size: 30px;
}

i{
	cursor: pointer;
}
</style>