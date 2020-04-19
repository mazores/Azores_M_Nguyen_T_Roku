import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="container-fluid d-flex flex-column" id="allusers" style="height: 100vh">
		<div class="row d-flex align-items-center justify-content-center my-auto py-auto">
			<div class="col-sm-12">
				<h1 class="user-message">{{ message }}</h1>
			</div>

			<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>
		</div>
	</div>
	`,

	created: function () {
		this.fetchAllUsers();
	},

	data() {
		return {
			message: `Who's Time-Travelling?`,

			userList: []
		}
	},

	methods: {
		fetchAllUsers() {
			let url = ('./admin/admin_getusers.php?allusers=true');

			fetch(url)
			.then(res => res.json())
			.then(data =>{
				this.userList = data;
			})
			.catch((err) => console.log(err));
		}
	},

	components: {
		user: UserComponent
	}
}