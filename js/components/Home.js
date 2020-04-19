import MovieComponent from "./MovieComponent.js";
import TVComponent from "./TVComponent.js";
import MusicComponent from "./MusicComponent.js";


export default {
    name: "TheHomeComponent",

    props: ['currentuser'],

    template: `
    <div class="container-fluid d-flex" id="login" style="height: 100vh">

        <div class="row align-items-center justify-content-center my-auto py-auto">
            <div class="col-10 center">
                <h1 class="center">Where to start?</h1>
            </div>

            <!-- show media icons here -->
            
            <div class="icon-home col-4 px-1 px-md-3 px-lg-5 mt-lg-5" v-for="media in mediaTypes" :data-type="media.description" :activeComponent="media" @click="selectComponent(media.component); navToMediaHome()">
                <img :src="'./images/icon-'+ media.icon">
            </div>

            <nav class="col-12 col-sm-3">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component); showAllDetails()">
                        
                        <span class="d-none d-md-block">{{ media.description }}</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    `,

    data: function() {
        return {
            activeComponent: "",
            // permissions: this.currentuser,
            mediaTypes: [
                {
                    description: "Movies",
                    icon: "movie.svg",
                    background: "/images/home-background-movie.svg",
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
            debugger;

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