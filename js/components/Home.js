import MovieComponent from "./MovieComponent.js";
import TVComponent from "./TVComponent.js";
import MusicComponent from "./MusicComponent.js";


export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container-fluid" id="login" style="height: 100vh">
        <!-- <div class="row d-flex align-content-md-end align-items-end my-md-4 mt-5 justify-content-center pb-5 pb-xl-1 pt-xl-5 pb-xl-3"> -->

        <div class="row d-flex align-content-end align-items-end justify-content-center mt-5 pt-5">
            <div class="col-10 mt-5 pt-5 center">
                <h1 class="center">Where to start?</h1>
            </div>

            <div class="col-10 col-md-6 col-xl-4 mb-3 mb-md-5 center">
                    <p>Greatest collection of entertainment from 1950, 1960, 1970, 1980, and 1990. The first and only free streaming app for everyone.</p>
            </div>

            <div class="w-100"></div>

            <!-- show media icons here -->
            <div class="icon-home col-4 px-1 px-md-3 px-lg-5 mt-lg-5 mb-5 pb-5 align-self-end" v-for="media in mediaTypes" :data-type="media.description" :activeComponent="media" @click="selectComponent(media.component); navToMediaHome()">
                <img :src="'./images/icon-'+ media.icon">
            </div>
        </div>
    </div>
    `,

    beforeCreate: function() {
        document.body.className = 'two';
    },

    data: function() {
        return {
            activeComponent: "",
            // permissions: this.currentuser,
            mediaTypes: [
                {
                    description: "Movies",
                    icon: "movie.svg",
                    component: MovieComponent
                },
                {
                    description: "Television",
                    icon: "tv.svg",
                    component: TVComponent
                },
                {
                    description: "Music",
                    icon: "music.svg",
                    component: MusicComponent
                }
            ]
        }
    },

    methods: {
        selectComponent(theComponent) {
            this.activeComponent = theComponent;

        },

        navToMediaHome() {
            // debugger;

            // send this user to its home page, and pass the user object to the hoome page
            this.$router.push({ name: "media", params: { permissions: this.currentuser, activeMedia:this.activeComponent }, props: { permissions: this.currentuser, activeMedia: this.activeComponent } })
        }
        // switchMedia(theComponent) {
        //     this.activeComponent = theComponent;
        // },

        // toSingleDetail() {
        //     this.singleDetail = !this.singleDetail;
        // }
    }
}