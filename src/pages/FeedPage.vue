<template>
	<div class="feed_container">
		<user-panel class="panel" 
		:name="userData.nick" 
		:followers="userData.followers"
		:following="userData.following.length" 
		:info="userData.email"></user-panel>
		<div class="container">
			<div class="say card-panel">
				<div>
					<div>
						<input type="text" placeholder="Write a title" v-if="titleActive">
					</div>
					<div class="input-field">
						<textarea 
						class="materialize-textarea" 
						data-length="300" 
						@leave="titleOn" 
						v-model="postText"></textarea>
						<label>Do you wanna say something?</label>
					</div>
				</div>
				<button class="waves-effect waves-light btn-large #0288d1 light-blue darken-2">Post</button>
			</div>
			<div class="timeline">
				<post 
				:user="postData.user"
				:title="postData.title"
				:text="postData.Text"
				:likes="postData.likes"></post>
			</div>
		</div>
	</div>
</template>

<script>
import UserPanel from '../components/UserPanel.vue';
import cookies from 'js-cookie';

export default {
	data(){
		return{
			userData: null,
			postData: null,
			postText: '',
			titleActive: false
		}
	},
	components:{
		UserPanel
	},
	methods:{
		titleOn(){
			if (this.postText !== '') {
				this.titleActive = true
			}else {
				this.titleActive = false
			}
		}
	},
	beforeMount(){
		const domain = 'http://localhost:3000';
		const token = cookies.get("userToken")

		fetch(`${domain}/getuserdata`,{
			method:'POST',
			headers: {'Content-Type':'application/json'},
			body:JSON.stringify({
				token:token
			})
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
		})
		.then((data) => {
			this.userData = data;
		});

		fetch(`${domain}/getpostdata`)
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
		})
		.then((data) => {
			console.log(data)
			this.postData = data
		})

		console.log(this.postData)

	}
}
</script>

<style scoped>
.feed_container {
	display: flex;
	flex-direction: row;
}

.panel {
	margin: 1em;
	max-width: 500px;
	text-align: center;
	min-width: 400px;
}

.say {
	margin: 1em;
}

.timeline{
	margin: 1em;
}
</style>