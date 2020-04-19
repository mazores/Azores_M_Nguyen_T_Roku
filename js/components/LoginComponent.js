export default {
    name: "Login",

    template: `
        <div class="container-fluid d-flex" id="login" style="height: 100vh">
            <div class="row align-items-center justify-content-center my-auto py-auto">
            <!-- <div class="jumbotron roku-jumbotron"> -->
                <div class="col-10 center">
                    <h1 class="display-4 center">Travel back in time with us</h1>
                </div>

                <div class="col-10 col-md-6 col-xl-4 center">
                    <p>Greatest collection of entertainment from 1950, 1960, 1970, 1980, and 1990. The first and only free streaming app for everyone.</p>
                </div>

                <div class="w-100"></div>
                
                <div class="col-5 col-md-3 mt-md-4 col-xl-2 center">
                    <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#signupmodal">Sign Up</button>
                </div>

                <div class="col-5 col-md-3 mt-md-4 col-xl-2 center">
                    <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#loginmodal">Log In</button>
                </div>
            </div>

            <div class="modal" id="signupmodal">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1>Log In</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="container-fluid">
                                <form>
                                    <div class="form-row align-items-center px-lg-5 mb-lg-4">
                                        <div class="col-md-12 mb-3 my-1">
                                            <label for="inlineFormInputName">Username</label>
                                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                                        </div>

                                        <div class="col-md-12 mb-3 my-1 px-lg-5 mb-lg-4">
                                            <label for="inlineFormPassword">Password</label>
                                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                                        </div>

                                        <div class="col-auto my-1 px-lg-5">
                                            <p>{{this.message}}</p>
                                            <button class="btn btn-primary" v-on:click.prevent="login()" type="submit" data-dismiss="modal">Start streaming</button>
                                        </div>
                                    </div>
                                </form>  
                            </div>
                        </div>
                        
                    </div> 
                </div>         
            </div>

            <div class="modal" id="loginmodal">
                <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1>Log In</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <div class="container-fluid">
                                <form>
                                    <div class="form-row align-items-center">
                                        <div class="col-md-12 mb-3 my-1 px-lg-5 mb-lg-4">
                                            <label for="inlineFormInputName">Username</label>
                                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                                        </div>

                                        <div class="col-md-12 mb-3 my-1 px-lg-5 mb-lg-4">
                                            <label for="inlineFormPassword">Password</label>
                                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                                        </div>

                                        <div class="col-auto my-1 px-lg-5">
                                            <p>{{this.message}}</p>
                                            <button class="btn btn-primary" data-dismiss="modal" v-on:click.prevent="login()" type="submit">Start streaming</button>
                                        </div>
                                    </div>
                                </form>  
                            </div>
                        </div>
                        
                    </div> 
                </div>         
            </div>
            
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: "",
                message: ""
            }

        }
    },

    methods: {
        login() {

            if (this.input.username != "" && this.input.password != "") {
                // fetch the user from the DB
                // generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { // means that we're not getting a user object back
                            console.warn(data);
                            // just for testing
                            alert("authentication failed, please try again");
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({ name: "users" });
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}