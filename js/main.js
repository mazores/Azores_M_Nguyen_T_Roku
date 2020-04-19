import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';
import Home from './components/Home.js';


(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/home', name: 'home', component: Home, props: true },
      { path: '/userhome', name: 'media', component: UserHomeComponent, props: true }
    ]
  });

  const vm = new Vue({
    data: {
      authenticated: false,
      administrator: false,
      user: [],

      //currentUser: {},
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        // push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;

        // When user's gone then remove the cached videos (refer to Video Component)
        if (localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        if (localStorage.getItem("cachedVideo")) {
          localStorage.removeItem("cachedVideo");
        }

        if (localStorage.getItem("cachedTVKids")) {
          localStorage.removeItem("cachedTVKids");
        }

        if (localStorage.getItem("cachedMovieKids")) {
          localStorage.removeItem("cachedMovieKids");
        }

        if (localStorage.getItem("cachedMusic")) {
          localStorage.removeItem("cachedMusic");
        }
      }
    },

    created: function() {
      // check for a user in localStorage
      // if we've logged in before, this should be here until we manually remove

      if (localStorage.getItem("cachedUser")) {
        let user = JSON.parse(localStorage.getItem("cachedUser"));

        this.authenticated = true;

        this.$router.push({ name: "home", params: { currentuser: user }});
        
      } else {
        this.$router.push({ name: "login" }).catch(err => {  });
      }
    },

    router: router
  }).$mount("#app");

  // router.beforeEach((to, from, next) => {
  //   console.log('router guard fired!', to, from, vm.authenticated);

  //   if (vm.authenticated == false) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });
})();